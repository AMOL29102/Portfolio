

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function RotatingWaves() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb2d4e8);
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

    // Wave Geometry
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      side: THREE.DoubleSide,
      wireframe: true,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Camera Position
    camera.position.set(0, 50, 200);
    camera.lookAt(0, 0, 0);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update wave vertices
      const time = Date.now() * 0.001;
      const vertices = plane.geometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin((i + time) * 0.1) * 5; // z-axis oscillation
      }
      plane.geometry.attributes.position.needsUpdate = true;

      // Rotate plane
      plane.rotation.z += 0.001;

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

export default RotatingWaves;

