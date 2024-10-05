import React from "react";

// Define the props for the Point component
interface PointProps {
  score: number;
}

const Point: React.FC<PointProps> = ({ score }) => {
  return (
    <div className="mb-10">
      <h3 className="font-poppins font-bold">Points: {score}</h3>
    </div>
  );
};

export default Point;
