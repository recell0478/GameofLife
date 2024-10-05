import React from "react";

const Quiz_Choices = ({ choices, handleChoiceClick }) => {
  return (
    <div>
      <h3>Choose one:</h3>
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceClick(choice.popup)}
          style={{ display: 'block', margin: '10px' }}
        >
          {choice.value}
        </button>
      ))}
    </div>
  );
};

export default Quiz_Choices;


