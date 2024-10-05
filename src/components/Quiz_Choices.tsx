import React from "react";

// Define types for the props
interface Choice {
  value: string;
  popup: string;
}

interface QuizChoicesProps {
  choices: Choice[];  // Array of Choice objects
  handleChoiceClick: (popup: string) => void;  // Function that takes a popup value
}

const Quiz_Choices: React.FC<QuizChoicesProps> = ({ choices, handleChoiceClick }) => {
  return (
    <div>
      <h3>Choose one:</h3>
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceClick(choice.popup)}  // Pass popup value to parent function
          style={{ display: 'block', margin: '10px' }}
        >
          {choice.value} 
        </button>
      ))}
    </div>
  );
};

export default Quiz_Choices;