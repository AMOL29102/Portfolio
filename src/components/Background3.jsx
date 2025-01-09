import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Resize handler
    const resizeHandler = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resizeHandler);

    // Floating Cubes
    const cubeCount = 100;
    const cubes = new THREE.Group();

    for (let i = 0; i < cubeCount; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x4299e1, wireframe: true });
      const cube = new THREE.Mesh(geometry, material);
      
      cube.position.x = (Math.random() - 0.5) * 500;
      cube.position.y = (Math.random() - 0.5) * 500;
      cube.position.z = (Math.random() - 0.5) * 500;
      
      cubes.add(cube);
    }

    scene.add(cubes);

    // Camera Position
    camera.position.z = 300;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      cubes.rotation.x += 0.01;
      cubes.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeHandler);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}

export default Background3D;