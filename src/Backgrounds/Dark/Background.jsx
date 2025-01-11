

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

    // Particle System
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // x, y, z for each particle

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 500; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 500; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 500; // z
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4299e1,
      size: 1.5,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Camera Position
    camera.position.z = 300;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particle system for some motion
      particleSystem.rotation.y += 0.002;

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








// Ring rotating
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// function Background3D() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     // Scene, Camera, and Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     container.appendChild(renderer.domElement);

//     // Resize handler
//     const resizeHandler = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', resizeHandler);

//     // Spinning Torus
//     const geometry = new THREE.TorusGeometry(100, 20, 16, 100);
//     const material = new THREE.MeshBasicMaterial({ color: 0x4299e1, wireframe: true });
//     const torus = new THREE.Mesh(geometry, material);
//     scene.add(torus);

//     // Camera Position
//     camera.position.z = 300;

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={containerRef} className="fixed inset-0 -z-10 " />;
// }

// export default Background3D;



// Sphere rotating
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// function WireframeSphere() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     container.appendChild(renderer.domElement);

//     const geometry = new THREE.SphereGeometry(50, 32, 32);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0x00ffff,
//       wireframe: true
//     });

//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     camera.position.z = 150;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotation effect on the sphere
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={containerRef} className="fixed inset-0 -z-10" />;
// }

// export default WireframeSphere;
