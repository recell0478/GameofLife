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

  const colors = ["#DE0884", "#2397D4", "#71AB47", "#FEEA00"];

  return (
    <div className="mx-5 md:mx-0">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceClick(choice.popup)}  // Pass popup value to parent function
          style={{ backgroundColor: colors[index % colors.length] }}
          className="
          w-full font-poppins 
          flex 
          items-center 
          justify-center 
          rounded-md 
          py-3 
          my-3 
          text-[#ffffff] 
          transform 
          transition-transform 
          duration-200 
          hover:scale-105
          cursor-pointer
          "
        >
          <span className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{choice.value}</span>
        </button>
      ))}
    </div>
  );
};

export default Quiz_Choices;