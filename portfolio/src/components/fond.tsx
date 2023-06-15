"use client";
import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const circlesRef = useRef([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const drawCircle = (ctx, x, y, radius, color) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  const updateCircle = (circle) => {
    const { x, y, dx, dy, radius, color } = circle;
    const newX = x + dx;
    const newY = y + dy;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width: canvasWidth, height: canvasHeight } = canvas;

    if (newX - radius < 0 || newX + radius > canvasWidth) {
      circle.dx = -dx;
    }
    if (newY - radius < 0 || newY + radius > canvasHeight) {
      circle.dy = -dy;
    }

    circle.x = newX;
    circle.y = newY;

    drawCircle(ctx, newX, newY, radius, color);
  };

  const handleCircleClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    circlesRef.current.forEach((circle) => {
      const { x, y, radius } = circle;

      if (
        mouseX >= x - radius &&
        mouseX <= x + radius &&
        mouseY >= y - radius &&
        mouseY <= y + radius
      ) {
        const index = circlesRef.current.indexOf(circle);
        circlesRef.current.splice(index, 1);
      }
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width: canvasWidth, height: canvasHeight } = canvas;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    circlesRef.current.forEach((circle) => {
      updateCircle(circle);
    });

    requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const circles = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * canvasWidth);
      const y = Math.floor(Math.random() * canvasHeight);
      const radius = Math.floor(Math.random() * 70) + 1;
      const color = getRandomColor();
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;

      circles.push({ x, y, radius, color, dx, dy });
    }

    circlesRef.current = circles;

    draw();
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
