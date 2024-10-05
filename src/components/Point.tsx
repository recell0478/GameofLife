import React from "react";

// Define the props for the Point component
interface PointProps {
  score: number;
}

const Point: React.FC<PointProps> = ({ score }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Points: {score}</h3>
    </div>
  );
};

export default Point;
