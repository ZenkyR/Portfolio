"use client";
import React, { useRef, useEffect, useCallback } from "react";

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

interface CanvasProps {
  [key: string]: any;
}

const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);

  const getRandomColor = useCallback(() => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  const drawCircle = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.filter = "blur(0px)";
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }, []);

  const updateCircle = useCallback((circle: Circle) => {
    const { x, y, dx, dy, radius, color } = circle;
    const newX = x + dx;
    const newY = y + dy;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const canvasWidth = canvas?.width || 0;
    const canvasHeight = canvas?.height || 0;

    if (newX - radius < 0 || newX + radius > canvasWidth) {
      circle.dx = -dx;
    }
    if (newY - radius < 0 || newY + radius > canvasHeight) {
      circle.dy = -dy;
    }

    circle.x = newX;
    circle.y = newY;

    if (ctx) {
      drawCircle(ctx, newX, newY, radius, color);
    }
  }, [drawCircle]);

  const handleCircleClick = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const rect = canvas?.getBoundingClientRect();
    const mouseX = event.clientX - (rect?.left || 0);
    const mouseY = event.clientY - (rect?.top || 0);

    circlesRef.current.forEach((circle, index) => {
      const { x, y, radius } = circle;

      if (
        mouseX >= x - radius &&
        mouseX <= x + radius &&
        mouseY >= y - radius &&
        mouseY <= y + radius
      ) {
        circlesRef.current.splice(index, 1);        
      }
    });
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const canvasWidth = canvas?.width || 0;
    const canvasHeight = canvas?.height || 0;

    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      circlesRef.current.forEach((circle) => {
        updateCircle(circle);
      });

      requestAnimationFrame(draw);
    }
  }, [updateCircle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    if (canvas && ctx) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const circles: Circle[] = [];
      
      const numberOfCircles = canvasWidth < 500 ? 50 : 100;
      const maxRadius = canvasWidth < 500 ? 20 : 70;
      const boomBubble = maxRadius - 30;
      for (let i = 0; i < numberOfCircles; i++) {
        const x = Math.floor(Math.random() * canvasWidth);
        const y = Math.floor(Math.random() * canvasHeight);
        const radius = Math.floor(Math.random() * maxRadius);
        const color = getRandomColor();
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;

        circles.push({ x, y, radius, color, dx, dy });
      }

      circlesRef.current = circles;

      draw();
    }
  }, [draw, getRandomColor]);

  return (
    <canvas
      ref={canvasRef}
      onClick={handleCircleClick}
      style={{ cursor: "pointer", outline: "none" }}
      {...props}
    />
  );  
};


export default Canvas;