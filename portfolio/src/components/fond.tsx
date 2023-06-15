"use client";
import React, { useRef, useEffect } from "react";

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

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  const updateCircle = (circle: Circle) => {
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
  };

  const handleCircleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
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
  };

  const draw = () => {
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
  };

  useEffect(() => {
  const resizeHandler = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    if (canvas && ctx) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const circles = circlesRef.current;
      circles.forEach((circle) => {
        const { x, y, radius } = circle;
        const newX = (x / canvasWidth) * canvas.width;
        const newY = (y / canvasHeight) * canvas.height;
        circle.x = newX;
        circle.y = newY;
        circle.radius = (radius / Math.max(canvasWidth, canvasHeight)) * Math.max(canvas.width, canvas.height);
      });

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      circles.forEach((circle) => {
        const { x, y, radius, color } = circle;
        drawCircle(ctx, x, y, radius, color);
      });
    }
  };

  window.addEventListener("resize", resizeHandler);

  return () => {
    window.removeEventListener("resize", resizeHandler);
  };
}, []);


  return (
    <canvas
      ref={canvasRef}
      onClick={handleCircleClick}
      style={{ cursor: "pointer" }}
      {...props}
    />
  );
};

export default Canvas;
