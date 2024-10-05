import React, { useState } from "react";
import { QuestionList } from "../utils/testQuestions";
import Quiz_Choices from "../components/Quiz_Choices";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  // Function to get the current question by ID
  const getQuestionById = (id: number) => {
    return QuestionList.find((question) => question.id === id);
  };

  // Handle choice click and automatically submit the answer
  const handleChoiceClick = (choiceIndex: number) => {
    setSelectedAnswer(choiceIndex); // Set selected answer
    setErrorMessage(null); // Reset error message

    const currentQuestion = getQuestionById(currentQuestionId);

    if (currentQuestion) {
      const isCorrect = currentQuestion.answer.includes(choiceIndex); // Check if the answer is correct

      if (isCorrect) {
        // If the answer is correct, increment score and move to next question
        setScore(score + 4); // Adjust points based on your scoring system
        const nextQuestionId = currentQuestionId + 1;

        if (nextQuestionId <= QuestionList.length) {
          setCurrentQuestionId(nextQuestionId); // Move to the next question
          setSelectedAnswer(null); // Reset the selected answer
        } else {
          // If no more questions, navigate to the "/ending" route
          navigate("/ending");
        }
      } else {
        // If the answer is wrong, show the error message
        setErrorMessage(currentQuestion.choices[choiceIndex].popup); // Show the popup message from the choice
      }
    }
  };

  // Get the current question data based on the currentQuestionId
  const currentQuestion = getQuestionById(currentQuestionId);

  return (
    <div>
      {currentQuestion ? (
        <>
          <h2>{currentQuestion.question}</h2>
          <Quiz_Choices
            choices={currentQuestion.choices}
            handleChoiceClick={handleChoiceClick} // Handle click event to submit automatically
            selectedAnswer={selectedAnswer} // Pass the selected answer to highlight it
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Show error message if answer is wrong */}
        </>
      ) : (
        <h2>Loading question...</h2>
      )}
    </div>
  );
};

export default Quiz;
