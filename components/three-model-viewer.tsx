'use client';

import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

interface ThreeModelViewerProps {
    modelPath: string;
    title: string;
}

export default function ThreeModelViewer({ modelPath, title }: ThreeModelViewerProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameRef = useRef<number | null>(null);
    const modelRef = useRef<THREE.Object3D | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0); // Transparent background if needed, or stick to scene background
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
                    if ((child as THREE.Mesh).isMesh) {
                        (child as THREE.Mesh).castShadow = true;
                        (child as THREE.Mesh).receiveShadow = true;
                    }
                });

                // Get initial bounding box
                const box = new THREE.Box3().setFromObject(fbx);
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);

                // Aggressive scaling logic
                let scaleMultiplier = 1;

                if (maxDim < 10) {
                    scaleMultiplier = 50 / maxDim;
                } else if (maxDim > 100) {
                    scaleMultiplier = 50 / maxDim;
                } else {
                    scaleMultiplier = 5;
                }

                fbx.scale.setScalar(scaleMultiplier);

                // Recalculate bounding box after scaling
                const scaledBox = new THREE.Box3().setFromObject(fbx);
                const scaledSize = scaledBox.getSize(new THREE.Vector3());
                const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

                // Center the model
                fbx.position.sub(scaledCenter);

                // Set camera position based on scaled model
                const finalMaxDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z);
                const cameraDistance = finalMaxDim * 1.5;

                // Position camera
                camera.position.set(
                    cameraDistance * 0.8,
                    cameraDistance * 0.6,
                    cameraDistance
                );
                camera.lookAt(0, 0, 0);

                // Update camera near/far planes
                camera.near = cameraDistance * 0.1;
                camera.far = cameraDistance * 10;
                camera.updateProjectionMatrix();

                scene.add(fbx);
                modelRef.current = fbx;
            },
            (progress) => {
                // Loading progress if needed
            },
            (error) => {
                console.error('Error loading FBX model:', error);
                setError('Failed to load 3D model');
                setIsLoading(false);

                // Fallback cube
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

        // Zoom handler
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            const zoomSpeed = 0.1;
            const zoom = event.deltaY > 0 ? 1 + zoomSpeed : 1 - zoomSpeed;

            const currentDistance = camera.position.length();
            const newDistance = currentDistance * zoom;

            if (newDistance > 1 && newDistance < 300) { // Increased max zoom out slightly
                camera.position.multiplyScalar(zoom);
            }
        };

        // Animation loop
        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.005; // Slightly slower rotation
            }
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            if (mountRef.current && rendererRef.current) {
                const width = mountRef.current.clientWidth;
                const height = mountRef.current.clientHeight;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                rendererRef.current.setSize(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        if (mountRef.current) {
            mountRef.current.addEventListener('wheel', handleWheel);
        }

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
            // Clean up scene
            if (sceneRef.current) {
                sceneRef.current.clear();
            }
        };
    }, [modelPath]);

    return (
        <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            <div ref={mountRef} className="w-full h-full cursor-move" title="Scroll to zoom" />

            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <span className="text-sm text-gray-600">Loading 3D Model...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    {error}
                </div>
            )}

            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs pointer-events-none">
                3D Model: {title}
            </div>
        </div>
    );
}
