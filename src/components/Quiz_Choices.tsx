import React from "react";

// Define types for the props
interface Choice {
  value: string;
  popup: string;
}

interface QuizChoicesProps {
  choices: Choice[];  // Array of Choice objects
  handleChoiceClick: (choiceIndex: number) => void;  // Function that takes the index of the selected choice
  selectedAnswer: number | null;  // Track the selected answer to highlight it
}

const Quiz_Choices: React.FC<QuizChoicesProps> = ({ choices, handleChoiceClick, selectedAnswer }) => {
  return (
    <div>
      <h3>Choose one:</h3>
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceClick(index)}  // Pass the index of the clicked choice to the parent
          style={{
            display: 'block',
            margin: '10px',
            backgroundColor: selectedAnswer === index ? "lightblue" : "white",  // Highlight selected answer
          }}
        >
          {choice.value}
        </button>
      ))}
    </div>
  );
};

export default Quiz_Choices;
