'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Wifi, Brain, Activity, Cloud } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import Image from 'next/image';

// 3D Model Viewer Component
function ThreeModelViewer({ modelPath, title }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const modelRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // FBX Loader
    const loader = new FBXLoader();

    // Load FBX model
    loader.load(
      modelPath,
      (fbx) => {
        // Model loaded successfully
        setIsLoading(false);
        setError(null);

        // Enable shadows on all meshes first
        fbx.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Get initial bounding box
        const box = new THREE.Box3().setFromObject(fbx);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        console.log('Original model size:', size);
        console.log('Original max dimension:', maxDim);

        // Aggressive scaling - most FBX models from Blender need significant scaling
        let scaleMultiplier = 1;

        if (maxDim < 10) {
          // Scale up small models significantly
          scaleMultiplier = 50 / maxDim; // Target size of 50 units
        } else if (maxDim > 100) {
          // Scale down large models
          scaleMultiplier = 50 / maxDim;
        } else {
          // Models in good range, slight adjustment
          scaleMultiplier = 5;
        }

        console.log('Applied scale multiplier:', scaleMultiplier);
        fbx.scale.setScalar(scaleMultiplier);

        // Recalculate bounding box after scaling
        const scaledBox = new THREE.Box3().setFromObject(fbx);
        const scaledSize = box.getSize(new THREE.Vector3());
        const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

        // Center the model
        fbx.position.sub(scaledCenter);

        // Set camera position based on scaled model
        const finalMaxDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z) * scaleMultiplier;
        const cameraDistance = finalMaxDim * 1.5;

        console.log('Final model size:', finalMaxDim);
        console.log('Camera distance:', cameraDistance);

        // Position camera
        camera.position.set(
          cameraDistance * 0.8,
          cameraDistance * 0.6,
          cameraDistance
        );
        camera.lookAt(0, 0, 0);

        // Update camera near/far planes for better rendering
        camera.near = cameraDistance * 0.1;
        camera.far = cameraDistance * 10;
        camera.updateProjectionMatrix();

        scene.add(fbx);
        modelRef.current = fbx;
      },
      (progress) => {
        // Loading progress
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%');
      },
      (error) => {
        // Error loading model
        console.error('Error loading FBX model:', error);
        setError('Failed to load 3D model');
        setIsLoading(false);

        // Fallback to placeholder geometry
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.8
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add(cube);
        modelRef.current = cube;
      }
    );

    // Add mouse wheel zoom functionality
    const handleWheel = (event) => {
      event.preventDefault();
      const zoomSpeed = 0.1;
      const zoom = event.deltaY > 0 ? 1 + zoomSpeed : 1 - zoomSpeed;

      // Prevent zooming too close or too far
      const currentDistance = camera.position.length();
      const newDistance = currentDistance * zoom;

      if (newDistance > 1 && newDistance < 100) {
        camera.position.multiplyScalar(zoom);
      }
    };

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Rotate the model if it exists
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && rendererRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    if (mountRef.current) {
      mountRef.current.addEventListener('wheel', handleWheel);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('wheel', handleWheel);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [modelPath]);




  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-sm text-gray-600">Loading 3D Model...</span>
          </div>
        </div>
      )}

      {/* Error indicator */}
      {error && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
          {error}
        </div>
      )}

      {/* Model info */}
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
        3D Model: {title}
      </div>

      {/* Controls hint */}
      {!isLoading && !error && (
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
          Auto-rotating view
        </div>
      )}
    </div>
  );
}

// Tab Component
function MediaTabs({ product, index }) {
  const [activeTab, setActiveTab] = useState('image');

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      {/* <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('image')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'image'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-sans'
              : 'text-gray-600 hover:text-gray-800 font-sans'
          }`}
        >
          Image View
        </button>
        <button
          onClick={() => setActiveTab('3d')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === '3d'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          3D Model
        </button>
      </div> */}

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}

      >
        {activeTab === 'image' ? (
          <Image
            width={400}
            height={400}
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain rounded-xl"
          />
        ) : (
          <ThreeModelViewer
            modelPath={product.model}
            title={product.title}
          />
        )}

        {/* Floating Badge */}
        <div className=" bottom-1 left-1 text-white  ">
          <Image
            width={50}
            height={50}
            src="/images/a.png"
            alt="Made in India"
            className="w-20 h-20 object-contain"
          />

        </div>


      </motion.div>
    </div>
  );
}

export default function ProductsSection() {
  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Drishti",
      description: "Drishti is a fully integrated, solar-powered, dual-factor flood monitoring sensor that combines image processing (visual data), radar- based measurements, and rain gauge inputs, with key features including",
      features: ["Wide-area monitoring: Accurately monitors river stretches up to 15 meters wide, making it ideal for small to medium rivers, canals, and urban drains", "Dual-sensor technology: Combines image processing (visual monitoring) and radar- based surface velocity measurement for high-accuracy flow estimation"],
      image: "/images/3.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Doordrishti",
      description: "DoorDrishti is a fully integrated, solar-powered, dual-factor flood monitoring sensor that combines advanced image processing (visual data), long-range radar-based measurements, and rain gauge inputs, with key features including:",
      features: ["Wide-area monitoring", "Rain gauge integration", "2-day battery backup for uninterrupted operation even during extreme weather conditions"],
      image: "/images/4.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Rakshak",
      description: "Rakshak is a solar-powered, long-range disaster early warning system equipped with sirens for rapid public alerting, with key features including:",
      features: ["High-decibel siren alerts", "Low-latency response", "Ultra-long-range communication"],
      image: "/images/2.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Tarang",
      description: "Tarang is a compact, solar-powered, radar- based river monitoring sensor focused solely on providing accurate depth measurements, with key features including:",
      features: ["Radar-based depth measurement", "Single-parameter focus", "Solar powered"],
      image: "/images/1.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Pravaah",
      description: "Pravaah is a compact, solar-powered, radar- based river monitoring sensor that focuses on depth and surface velocity calculation with key features including:",
      features: ["Wide-area coverage", "Solar powered", "Real-time data transmission for continuous river flow monitoring and decision support"],
      image: "/images/5.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-6xl font-sans text-gray-900 mb-4">
            Presenting Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Products</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive flood prevention solutions designed specifically for Indian conditions,
            from advanced sensors to AI-powered analytics and cloud-based monitoring systems.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">

                  <h3 className="text-2xl font-sans text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{product.title}</h3>
                </div>

                <p className="text-lg font-sans text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex font-sans items-center space-x-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>


                <div className="pt-6">
                  <a
                    href={`/products/${product.title.toLowerCase()}`}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Media Section with Tabs */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <MediaTabs product={product} index={index} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}