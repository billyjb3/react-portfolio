import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';

const BackgroundArt = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext('2d');
    if (context) {
      let frame;

      const circles = [];

      const maxMoving = .01; // percent of particles.length
      const maxSpeed = 2;
      const minSpeed = .5;
      const circleChance = 50;
      const arcSpeed = .05;
      const spacing = 20;

      // sizing values. change on window resize
      let particles = [];
      let movingParticles = [];
      let w = canvas.width;
      let h = canvas.height;
      let movingCount;

      const setSizing = () => {
        w = canvas.width;
        h = canvas.height;
        createParticles();
      };

      // 0: right, 1: up, 2: left, 3: down
      const getDir = () => {
        return Math.floor(Math.random() * 4);
      };

      const getRandomPosition = () => {
        const i = Math.floor(Math.random() * particles.length);
        const { x, y } = particles[i];
        return { x, y };
      }

      const getMovingParticle = () => {
        const particle = getRandomPosition();
        const dir = getDir();
        const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        if (dir === 0) {
          particle.dx = speed;
          particle.dy = 0;
        } else if (dir === 1) {
          particle.dx = 0;
          particle.dy = -speed;
        } else if (dir === 2) {
          particle.dx = -speed;
          particle.dy = 0;
        } else {
          particle.dx = 0;
          particle.dy = speed;
        }
        return particle;
      }

      const createParticles = () => {
        particles = [];
        movingParticles = [];
        const i = Math.ceil(w / spacing);
        const j = Math.ceil(h / spacing);
        for (let x = 0; x < i; x++) {
          for (let y = 0; y < j; y++) {
            particles.push({
              x: x * spacing,
              y: y * spacing,
            });
          }
        }
        movingCount = Math.ceil(maxMoving * particles.length);
        for (let n = 0; n < movingCount; n++) {
          movingParticles.push(getMovingParticle());
        }
      };

      const getCircle = () => {
        const circle = getRandomPosition();
        const arcStart = Math.random() * 2 * Math.PI;
        circle.arcStart = arcStart;
        circle.currentArc = 0;
        circle.dir = Math.round(Math.random());
        return circle;
      }

      const render = () => {
        if (!particles.length) createParticles();
        if (w !== canvas.width || h !== canvas.height) setSizing();
        context.clearRect(0, 0, w, h);

        const circleDraw = Math.floor(Math.random() * 100) < circleChance;
        // if (circleDraw) circles.push(getCircle());

        particles.forEach((particle) => {
          const { x, y } = particle;
          context.beginPath();
          context.arc(x, y, 1, 0, Math.PI * 2);
          context.fillStyle = '#303030';
          context.fill();
        });

        // TODO: could be cool to have them randomly disappear on some dot opposed to only disappearing on the edge
        movingParticles.forEach((particle, i) => {
          const { x, y, dx, dy } = particle;
          context.beginPath();
          context.arc(x, y, 1, 0, Math.PI * 2);
          context.fillStyle = '#606060';
          context.fill();
          particle.x += dx;
          particle.y += dy;
          if (particle.x > w || particle.x < 0 || particle.y > h | particle.y < 0) {
            movingParticles[i] = getMovingParticle();
          }
        });

        circles.forEach((circle) => {
          const {
            x,
            y,
            arcStart,
            currentArc,
            dir,
          } = circle;
          let arcEnd = 0;
          if (!!dir) { // counter clockwise
            arcEnd = arcStart - currentArc;
            if (arcEnd < 0) {
              arcEnd = (Math.PI * 2) - (currentArc - (Math.PI * 2 - arcStart));
            }
          } else {
            arcEnd = arcStart + currentArc
            if (arcEnd > Math.PI * 2) {
              arcEnd = currentArc - (Math.PI * 2 - arcStart);
            }
          }
          context.beginPath();
          context.arc(x, y, spacing, arcStart, arcEnd, !!dir);
          context.strokeStyle = '#606060';
          context.stroke();
          circle.currentArc += arcSpeed;
        });

        for (let i = circles.length - 1; i >= 0; i--) {
          const { currentArc } = circles[i];
          if ( currentArc >= Math.PI * 2) circles.splice(i, 1);
        }

        frame = window.requestAnimationFrame(render);
      };

      render();

      return () => window.cancelAnimationFrame(frame);
    }
  }, [canvasRef.current]);

  const setSize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setContainerSize({ w, h });
  }

  useEffect(() => {
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  const { w, h } = containerSize;
  return (
    <div ref={containerRef} className="position-fixed-t color-bg-primary backgroundContainer">
      <canvas
        ref={canvasRef}
        className=""
        width={w}
        height={h}
      />
    </div>
  );
};

export default BackgroundArt;
