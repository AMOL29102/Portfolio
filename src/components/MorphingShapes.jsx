import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function MorphingShapes() {
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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true ensures transparency
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

    // Geometries
    const geometries = [
      new THREE.IcosahedronGeometry(20, 1),
      new THREE.SphereGeometry(20, 20, 20),
    ];
    let currentGeometryIndex = 0;

    const material = new THREE.MeshStandardMaterial({
      color: 0xff5722,
      wireframe: true,
    });

    const shape = new THREE.Mesh(geometries[currentGeometryIndex], material);
    scene.add(shape);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 100;

    // Geometry switch interval
    const switchGeometry = () => {
      currentGeometryIndex = (currentGeometryIndex + 1) % geometries.length;
      shape.geometry.dispose(); // Dispose of the old geometry
      shape.geometry = geometries[currentGeometryIndex];
    };

    const interval = setInterval(switchGeometry, 3000); // Change every 3 seconds

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeHandler);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" style={{ background: 'transparent' }} />;
}

export default MorphingShapes;
