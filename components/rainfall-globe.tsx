'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Deployment {
  id: string;
  name: string;
  status: 'active' | 'testing' | 'planning';
  sensors: number;
  population: number;
  riskLevel: string;
  coordinates: [number, number];
  details: {
    districts: string[];
    rivers: string[];
    deployment: string;
    successRate: string;
  };
}

interface RainfallData {
  region: string;
  intensity: number;
  risk: string;
  alerts: number;
}

interface RainfallGlobeProps {
  deployments: Deployment[];
  rainfallData: RainfallData[];
  onRegionSelect: (regionId: string | null) => void;
  activeView: 'global' | 'india' | 'local';
}

export default function RainfallGlobe({ 
  deployments, 
  rainfallData, 
  onRegionSelect, 
  activeView 
}: RainfallGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      800 / 600,
      0.1,
      1000
    );
    
    // Adjust camera position based on active view
    switch (activeView) {
      case 'global':
        camera.position.set(0, 0, 4);
        break;
      case 'india':
        camera.position.set(1.2, 0.5, 3);
        break;
      case 'local':
        camera.position.set(1.8, 1.2, 2.5);
        break;
    }

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(800, 600);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(1.5, 64, 32);
    
    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg',
      undefined,
      undefined,
      () => {
        // Fallback texture
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d')!;
        
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1e40af');
        gradient.addColorStop(0.5, '#3b82f6');
        gradient.addColorStop(1, '#60a5fa');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add India outline
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        // Simplified India shape
        ctx.moveTo(1200, 400);
        ctx.quadraticCurveTo(1400, 350, 1450, 500);
        ctx.quadraticCurveTo(1400, 650, 1300, 700);
        ctx.quadraticCurveTo(1200, 680, 1150, 600);
        ctx.quadraticCurveTo(1180, 450, 1200, 400);
        ctx.fill();
        
        const fallbackTexture = new THREE.CanvasTexture(canvas);
        if (globeRef.current) {
          (globeRef.current.material as THREE.MeshPhongMaterial).map = fallbackTexture;
          (globeRef.current.material as THREE.MeshPhongMaterial).needsUpdate = true;
        }
      }
    );

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.9
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.rotation.y = activeView === 'india' ? -Math.PI * 0.7 : -Math.PI * 0.3;
    globeRef.current = earth;
    scene.add(earth);

    // Create atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.65, 32, 16);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
          gl_FragColor = vec4(atmosphere, intensity * 0.6);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Create rainfall heatmap overlay
    const rainfallGeometry = new THREE.SphereGeometry(1.52, 64, 32);
    const rainfallMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        rainfallData: { value: new THREE.DataTexture(new Uint8Array([255, 0, 0, 255]), 1, 1, THREE.RGBAFormat) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        // Rainfall intensity simulation
        float getRainfallIntensity(vec2 uv) {
          // Simulate monsoon patterns over India
          float lat = (uv.y - 0.5) * 180.0;
          float lon = (uv.x - 0.5) * 360.0;
          
          // India region (approximate)
          if (lon > 68.0 && lon < 97.0 && lat > 8.0 && lat < 37.0) {
            // Western Ghats - high rainfall
            if (lon < 77.0 && lat > 10.0 && lat < 20.0) {
              return 0.9 + 0.1 * sin(time * 2.0);
            }
            // Northeast - high rainfall
            if (lon > 88.0 && lat > 22.0) {
              return 0.8 + 0.2 * sin(time * 1.5);
            }
            // Himachal Pradesh
            if (lon > 75.0 && lon < 79.0 && lat > 30.0 && lat < 33.0) {
              return 0.7 + 0.3 * sin(time * 3.0);
            }
            // Kerala
            if (lon > 74.0 && lon < 77.0 && lat > 8.0 && lat < 12.0) {
              return 0.85 + 0.15 * sin(time * 2.5);
            }
            // General monsoon pattern
            return 0.3 + 0.2 * sin(time + lon * 0.1) * sin(lat * 0.1);
          }
          
          return 0.1 + 0.1 * sin(time + lon * 0.05) * sin(lat * 0.05);
        }
        
        void main() {
          float intensity = getRainfallIntensity(vUv);
          
          // Color mapping for rainfall intensity
          vec3 color;
          if (intensity < 0.3) {
            color = mix(vec3(0.2, 0.8, 0.2), vec3(0.8, 0.8, 0.2), intensity / 0.3);
          } else if (intensity < 0.6) {
            color = mix(vec3(0.8, 0.8, 0.2), vec3(1.0, 0.5, 0.0), (intensity - 0.3) / 0.3);
          } else {
            color = mix(vec3(1.0, 0.5, 0.0), vec3(1.0, 0.0, 0.0), (intensity - 0.6) / 0.4);
          }
          
          gl_FragColor = vec4(color, intensity * 0.7);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const rainfallOverlay = new THREE.Mesh(rainfallGeometry, rainfallMaterial);
    scene.add(rainfallOverlay);

    // Create deployment markers
    const deploymentMarkers: THREE.Mesh[] = [];
    deployments.forEach((deployment) => {
      const [lat, lon] = deployment.coordinates;
      
      // Convert lat/lon to 3D coordinates
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      
      const x = -(1.55 * Math.sin(phi) * Math.cos(theta));
      const z = (1.55 * Math.sin(phi) * Math.sin(theta));
      const y = (1.55 * Math.cos(phi));

      // Create marker based on status
      let markerGeometry: THREE.BufferGeometry;
      let markerMaterial: THREE.Material;
      
      if (deployment.status === 'active') {
        markerGeometry = new THREE.SphereGeometry(0.03, 8, 6);
        markerMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x00ff00,
          transparent: true,
          opacity: 0.9
        });
      } else if (deployment.status === 'testing') {
        markerGeometry = new THREE.SphereGeometry(0.025, 8, 6);
        markerMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffff00,
          transparent: true,
          opacity: 0.8
        });
      } else {
        markerGeometry = new THREE.SphereGeometry(0.02, 8, 6);
        markerMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x0088ff,
          transparent: true,
          opacity: 0.7
        });
      }
      
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(x, y, z);
      marker.userData = { deployment };
      
      // Add pulsing animation for active deployments
      if (deployment.status === 'active') {
        const pulseGeometry = new THREE.RingGeometry(0.04, 0.08, 16);
        const pulseMaterial = new THREE.MeshBasicMaterial({
          color: 0x00ff00,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide
        });
        const pulseRing = new THREE.Mesh(pulseGeometry, pulseMaterial);
        pulseRing.position.copy(marker.position);
        pulseRing.lookAt(new THREE.Vector3(0, 0, 0));
        pulseRing.userData = { isPulse: true, originalScale: 1 };
        scene.add(pulseRing);
        deploymentMarkers.push(pulseRing);
      }
      
      scene.add(marker);
      deploymentMarkers.push(marker);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.4);
    fillLight.position.set(-3, -2, -3);
    scene.add(fillLight);

    // Create starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      const radius = 20 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    let time = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate globe slowly
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.002;
      }

      // Update atmosphere
      if (atmosphereMaterial.uniforms) {
        atmosphereMaterial.uniforms.time.value = time;
      }

      // Update rainfall overlay
      if (rainfallMaterial.uniforms) {
        rainfallMaterial.uniforms.time.value = time;
      }

      // Animate deployment markers
      deploymentMarkers.forEach(marker => {
        if (marker.userData.isPulse) {
          const scale = 1 + 0.3 * Math.sin(time * 3);
          marker.scale.setScalar(scale);
          (marker.material as THREE.MeshBasicMaterial).opacity = 0.3 * (1 - Math.sin(time * 3) * 0.5);
        } else if (marker.userData.deployment?.status === 'active') {
          // Gentle glow animation
          const glow = 0.9 + 0.1 * Math.sin(time * 2);
          (marker.material as THREE.MeshBasicMaterial).opacity = glow;
        }
      });

      // Rotate stars slowly
      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(deploymentMarkers.filter(m => !m.userData.isPulse));
      
      if (intersects.length > 0) {
        const deployment = intersects[0].object.userData.deployment;
        if (deployment) {
          setHoveredPoint(deployment.id);
          document.body.style.cursor = 'pointer';
        }
      } else {
        setHoveredPoint(null);
        document.body.style.cursor = 'default';
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(deploymentMarkers.filter(m => !m.userData.isPulse));
      
      if (intersects.length > 0) {
        const deployment = intersects[0].object.userData.deployment;
        if (deployment) {
          onRegionSelect(deployment.id);
        }
      }
    };

    if (mountRef.current) {
      mountRef.current.addEventListener('mousemove', handleMouseMove);
      mountRef.current.addEventListener('click', handleClick);
    }

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        mountRef.current.removeEventListener('click', handleClick);
        if (renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      rainfallGeometry.dispose();
      rainfallMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      document.body.style.cursor = 'default';
    };
  }, [deployments, activeView, onRegionSelect]);

  return (
    <div className="relative">
      <div 
        ref={mountRef} 
        className="w-full h-[600px] cursor-grab active:cursor-grabbing rounded-lg overflow-hidden"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)'
        }}
      />
      
      {/* Tooltip for hovered deployment */}
      {hoveredPoint && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border max-w-xs">
          {deployments.find(d => d.id === hoveredPoint) && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {deployments.find(d => d.id === hoveredPoint)?.name}
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Status: <span className="font-medium capitalize">
                  {deployments.find(d => d.id === hoveredPoint)?.status}
                </span></div>
                <div>Sensors: <span className="font-medium">
                  {deployments.find(d => d.id === hoveredPoint)?.sensors}
                </span></div>
                <div>Population: <span className="font-medium">
                  {deployments.find(d => d.id === hoveredPoint)?.population.toLocaleString()}
                </span></div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* View indicator */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
        <div className="text-sm font-medium text-gray-900 capitalize">
          {activeView} View
        </div>
      </div>
      
      {/* Live data indicator */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-900">Live Rainfall Data</span>
        </div>
      </div>
    </div>
  );
}