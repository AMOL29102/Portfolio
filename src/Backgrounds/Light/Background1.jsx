// import React, { useEffect, useRef } from 'react';

// function Background() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;
//     let particles = [];

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.z = Math.random() * 1000;
//         this.size = 1;
//         this.speed = 1;
//       }

//       move() {
//         this.z = this.z - this.speed;
//         if (this.z <= 1) {
//           this.z = 1000;
//           this.x = Math.random() * canvas.width;
//           this.y = Math.random() * canvas.height;
//         }
//       }

//       draw() {
//         const scale = 100 / this.z;
//         const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
//         const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
//         const size = scale * this.size;

//         ctx.beginPath();
//         ctx.fillStyle = `rgba(66, 153, 225, ${Math.min(1, 1000 / this.z / 10)})`;
//         ctx.arc(x, y, Math.max(0.1, size), 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Create particles
//     for (let i = 0; i < 300; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       ctx.fillStyle = 'rgba(177, 198, 244, 0.2)';
//       ctx.fillStyle = 'rgba(174, 211, 234, 0.2)';

//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.move();
//         particle.draw();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-10"
//       style={{ background: 'linear-gradient(to bottom right, #111827, #1f2937)' }}
//     />
//   );
// }

// export default Background;


// import React, { useEffect, useRef } from 'react';

// function DiagonalParticles() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;
//     let particles = [];

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 5 + 2;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//       }

//       move() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
//         if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(255, 123, 0, 0.8)';
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < 100; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.move();
//         particle.draw();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-10"
//       style={{ background: 'linear-gradient(to top right, #fdfdfd, #ececec)' }}
//     />
//   );
// }

// export default DiagonalParticles;


import React, { useEffect, useRef } from 'react';

function CircularMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.originX = Math.random() * canvas.width;
        this.originY = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.005 + 0.01;
        this.size = Math.random() * 5 + 2;
      }

      move() {
        this.angle += this.speed;
      }

      draw() {
        const x = this.originX + Math.cos(this.angle) * this.radius;
        const y = this.originY + Math.sin(this.angle) * this.radius;

        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 183, 255, 0.7)';
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.move();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)' }}
    />
  );
}

export default CircularMotion;
