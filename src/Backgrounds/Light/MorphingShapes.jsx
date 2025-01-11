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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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

    // Geometries and Material
    const geometries = [
      new THREE.IcosahedronGeometry(20, 1),
      new THREE.SphereGeometry(20, 20, 20),
      new THREE.TorusGeometry(20, 5, 16, 100)
    ];
    let currentGeometryIndex = 0;

    const material = new THREE.MeshStandardMaterial({
      // color: "#3B82F6",
      color:"#60A5FA",
      // color: 0xff5722,
      // color:0xffa500,
      wireframe: true,
    });

    const shape = new THREE.Mesh(geometries[currentGeometryIndex], material);
    scene.add(shape);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 100;

    // Geometry switch interval
    const switchGeometry = () => {
      currentGeometryIndex = (currentGeometryIndex + 1) % geometries.length;
      shape.geometry.dispose();
      shape.geometry = geometries[currentGeometryIndex];
    };

    const interval = setInterval(switchGeometry, 2000);

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

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{
        width: '95vw', // Prevent horizontal scrollbar
        height: '100vh',
        overflow: 'hidden',
        background: 'transparent',
      }}
    />
  );
}

export default MorphingShapes;
