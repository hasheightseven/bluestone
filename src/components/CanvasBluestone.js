import React, { useRef, useEffect } from "react";

const CanvasBluestone = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(context, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Handle user clicks
    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      drawCircle(context, x, y); // Draw a circle at click position
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  // Function to draw on the canvas
  const draw = (context, width, height) => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "blue";
    context.fillRect(0, 0, width, height);
  };

  // Draw a circle at the clicked position
  const drawCircle = (context, x, y) => {
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
  };

  return <canvas ref={canvasRef} />;
};

export default CanvasBluestone;