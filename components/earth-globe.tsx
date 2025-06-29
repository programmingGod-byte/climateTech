'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - adjusted for smaller globe
    const camera = new THREE.PerspectiveCamera(
      75,
      600 / 600,
      0.1,
      1000
    );
    camera.position.z = 3.2; // Adjusted for smaller size

    // Renderer setup - reduced size
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(600, 600); // Reduced from 800x800 to 600x600
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Earth geometry - reduced size
    const geometry = new THREE.SphereGeometry(1.6, 128, 64); // Reduced from 2.0 to 1.6
    
    // Load real world map textures
    const textureLoader = new THREE.TextureLoader();
    
    // Real Earth day texture
    const earthTexture = textureLoader.load(
      'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
      },
      undefined,
      (error) => {
        console.log('Primary texture failed, trying backup...');
        const backupTexture = textureLoader.load(
          'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg',
          undefined,
          undefined,
          () => {
            console.log('Backup texture failed, using fallback...');
            const fallbackTexture = createFallbackTexture();
            if (earthRef.current) {
              (earthRef.current.material as THREE.MeshPhongMaterial).map = fallbackTexture;
              (earthRef.current.material as THREE.MeshPhongMaterial).needsUpdate = true;
            }
          }
        );
        if (earthRef.current) {
          (earthRef.current.material as THREE.MeshPhongMaterial).map = backupTexture;
          (earthRef.current.material as THREE.MeshPhongMaterial).needsUpdate = true;
        }
      }
    );

    // Real Earth normal map
    const normalTexture = textureLoader.load(
      'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_normal_2048.jpg',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
      }
    );

    // Real Earth specular map
    const specularTexture = textureLoader.load(
      'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_specular_2048.jpg',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
      }
    );

    // Enhanced fallback texture with India focus
    const createFallbackTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d')!;

      // Ocean background
      const oceanGradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2
      );
      oceanGradient.addColorStop(0, '#1e40af');
      oceanGradient.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = oceanGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Asia with detailed India
      ctx.fillStyle = '#15803d';
      ctx.beginPath();
      ctx.moveTo(1200, 200);
      ctx.quadraticCurveTo(1500, 180, 1800, 250);
      ctx.quadraticCurveTo(1850, 400, 1700, 600);
      ctx.quadraticCurveTo(1500, 700, 1300, 650);
      ctx.quadraticCurveTo(1200, 500, 1250, 350);
      ctx.quadraticCurveTo(1220, 250, 1200, 200);
      ctx.fill();

      // India highlighted prominently
      ctx.fillStyle = '#fbbf24'; // Gold for India
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 6; // Thicker border for India
      ctx.beginPath();
      
      // More detailed India shape
      ctx.moveTo(1250, 420); // Kashmir
      ctx.quadraticCurveTo(1280, 400, 1320, 430); // Northern border
      ctx.quadraticCurveTo(1380, 450, 1420, 500); // Eastern border
      ctx.quadraticCurveTo(1400, 550, 1380, 600); // Bay of Bengal coast
      ctx.quadraticCurveTo(1350, 650, 1300, 680); // Tamil Nadu
      ctx.quadraticCurveTo(1250, 690, 1200, 670); // Kerala coast
      ctx.quadraticCurveTo(1180, 620, 1190, 580); // Western coast
      ctx.quadraticCurveTo(1200, 540, 1220, 500); // Maharashtra/Gujarat
      ctx.quadraticCurveTo(1230, 460, 1250, 420); // Back to Kashmir
      ctx.fill();
      ctx.stroke();

      // Add major Indian cities as bright spots
      ctx.fillStyle = '#ef4444'; // Red for cities
      
      // Delhi
      ctx.beginPath();
      ctx.arc(1280, 470, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Mumbai
      ctx.beginPath();
      ctx.arc(1220, 540, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Bangalore
      ctx.beginPath();
      ctx.arc(1280, 620, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Chennai
      ctx.beginPath();
      ctx.arc(1320, 630, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Kolkata
      ctx.beginPath();
      ctx.arc(1360, 560, 8, 0, Math.PI * 2);
      ctx.fill();

      // Add text labels for India
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('INDIA', 1300, 550);
      
      // Add smaller surrounding countries for context
      ctx.fillStyle = '#22c55e';
      
      // Pakistan
      ctx.beginPath();
      ctx.moveTo(1180, 420);
      ctx.quadraticCurveTo(1220, 400, 1250, 430);
      ctx.quadraticCurveTo(1240, 480, 1220, 520);
      ctx.quadraticCurveTo(1190, 540, 1160, 520);
      ctx.quadraticCurveTo(1150, 470, 1180, 420);
      ctx.fill();
      
      // Bangladesh
      ctx.beginPath();
      ctx.moveTo(1380, 520);
      ctx.quadraticCurveTo(1400, 510, 1420, 530);
      ctx.quadraticCurveTo(1415, 560, 1390, 570);
      ctx.quadraticCurveTo(1370, 565, 1365, 540);
      ctx.quadraticCurveTo(1375, 525, 1380, 520);
      ctx.fill();
      
      // Sri Lanka
      ctx.beginPath();
      ctx.arc(1310, 720, 15, 0, Math.PI * 2);
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    // Enhanced material
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      normalMap: normalTexture,
      specularMap: specularTexture,
      shininess: 150,
      transparent: false,
      normalScale: new THREE.Vector2(0.7, 0.7),
      emissive: new THREE.Color(0x111111),
      emissiveIntensity: 0.1
    });

    // Create earth mesh
    const earth = new THREE.Mesh(geometry, material);
    earth.castShadow = true;
    earth.receiveShadow = true;
    
    // Position Earth to show India prominently (rotate to show Asia/India)
    earth.rotation.y = -Math.PI * 0.7; // Rotate to show India/Asia region
    earth.rotation.x = 0.1; // Slight tilt
    
    earthRef.current = earth;
    scene.add(earth);

    // Atmosphere - adjusted size
    const atmosphereGeometry = new THREE.SphereGeometry(1.75, 32, 16); // Reduced from 2.2 to 1.75
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
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 atmosphere = vec3(0.4, 0.7, 1.0) * intensity;
          gl_FragColor = vec4(atmosphere, intensity * 0.8);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
    sunLight.position.set(5, 3, 5);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x6495ed, 0.6);
    fillLight.position.set(-3, -2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x87ceeb, 0.4);
    rimLight.position.set(0, 0, -5);
    scene.add(rimLight);

    // Starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000; // Reduced star count for smaller globe
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.8
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop - increased rotation speed
    let time = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      if (earthRef.current) {
        // Increased rotation speed for more dynamic movement
        earthRef.current.rotation.y += 0.003; // Increased from 0.001 to 0.003
        earthRef.current.rotation.x = Math.sin(time * 0.1) * 0.02 + 0.1;
      }

      if (atmosphereMaterial.uniforms) {
        atmosphereMaterial.uniforms.time.value = time;
      }

      stars.rotation.y += 0.0002; // Slightly increased star rotation too

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !earthRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      const mouseX = x * 0.3; // Reduced sensitivity
      const mouseY = y * 0.3;
      
      earthRef.current.rotation.y += mouseX * 0.005; // Reduced rotation speed
      earthRef.current.rotation.x += mouseY * 0.005;
    };

    if (mountRef.current) {
      mountRef.current.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      earthTexture.dispose();
      normalTexture.dispose();
      specularTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={mountRef} 
        className="w-[600px] h-[600px] mx-auto cursor-grab active:cursor-grabbing"
        style={{ 
          filter: 'drop-shadow(0 0 60px rgba(74, 144, 226, 0.8)) drop-shadow(0 0 120px rgba(34, 197, 94, 0.5)) brightness(1.2)',
          background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      
      {/* India-focused floating elements */}
      <div className="absolute top-16 left-16 bg-orange-500/60 backdrop-blur-md rounded-full p-4 animate-pulse border border-orange-400/60 shadow-xl">
        <div className="w-3 h-3 bg-orange-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="absolute bottom-20 right-20 bg-green-500/60 backdrop-blur-md rounded-full p-4 animate-pulse delay-1000 border border-green-400/60 shadow-xl">
        <div className="w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="absolute top-1/2 right-12 bg-blue-500/60 backdrop-blur-md rounded-full p-4 animate-pulse delay-500 border border-blue-400/60 shadow-xl">
        <div className="w-3 h-3 bg-blue-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="absolute top-1/3 left-12 bg-red-500/60 backdrop-blur-md rounded-full p-4 animate-pulse delay-700 border border-red-400/60 shadow-xl">
        <div className="w-3 h-3 bg-red-300 rounded-full animate-ping"></div>
      </div>
      
      {/* India-focused info labels */}
      <div className="absolute top-8 right-8 text-white/95 text-sm bg-black/60 backdrop-blur-lg rounded-xl px-4 py-3 border border-orange-400/40 shadow-2xl">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">India Focus</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Monsoon monitoring</div>
      </div>
      
      <div className="absolute bottom-8 left-8 text-white/95 text-sm bg-black/60 backdrop-blur-lg rounded-xl px-4 py-3 border border-green-400/40 shadow-2xl">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">Real-time Data</span>
        </div>
        <div className="text-xs text-white/80 mt-1">24/7 active sensors</div>
      </div>
      
      <div className="absolute top-1/2 left-8 text-white/95 text-sm bg-black/60 backdrop-blur-lg rounded-xl px-4 py-3 border border-blue-400/40 shadow-2xl transform -translate-y-1/2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">AI Prediction</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Flood forecasting</div>
      </div>
      
      <div className="absolute top-1/4 right-8 text-white/95 text-sm bg-black/60 backdrop-blur-lg rounded-xl px-4 py-3 border border-red-400/40 shadow-2xl">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="font-semibold">Emergency Alerts</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Multi-language</div>
      </div>
    </div>
  );
}