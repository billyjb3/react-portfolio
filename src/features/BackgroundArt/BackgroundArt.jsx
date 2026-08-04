import React, { useState, useEffect, useRef } from 'react';
import { useHomeContext } from '../HomePage/homeContext';

const BackgroundArt = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const {
    backgroundState,
    pageSettings: { showAnimations },
  } = useHomeContext();

  // TODO: have a global settings option to change the background color of the canvas.
  const backgroundClasses = useRef({});
  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext('2d');
    if (!context) return;

    let width = canvas.width;
    let height = canvas.height;
    Object.values(backgroundState).forEach((state) => backgroundClasses.current[state.id] = new state.renderClass(canvas));
    let frame;

    const render = () => {
      if (width !== canvas.width || height !== canvas.height) {
        width = canvas.width;
        height = canvas.height;
        Object.values(backgroundClasses.current).forEach((backgroundClass) => backgroundClass.init());
      }
      context.clearRect(0, 0, width, height);

      Object.values(backgroundClasses.current).forEach((backgroundClass) => backgroundClass.render(context));

      frame = window.requestAnimationFrame(render);
    };

    render();

    return () => window.cancelAnimationFrame(frame);
  }, [canvasRef.current]);

  useEffect(() => {
    Object.values(backgroundState).forEach((state) => {
      const { id, props } = state;
      backgroundClasses.current[id].changeProps(props);
    });
  }, [backgroundState]);

  useEffect(() => {
    Object.values(backgroundState).forEach((state) => {
      const { id } = state;
      backgroundClasses.current[id].toggleAnimations(showAnimations.value);
    });
  }, [showAnimations.value]);

  useEffect(() => {
    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setContainerSize({ w, h });
    };

    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  const { w, h } = containerSize;
  return (
    <div ref={containerRef} className="position-fixed-t color-bg-primary size-full">
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
