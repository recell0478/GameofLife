import { useState } from "react";
import { QuestionList } from "../utils/testQuestions";
import Quiz_Choices from "../components/Quiz_Choices";
import { useNavigate } from "react-router-dom";
import Point from "../components/Point";  // Import Point component

const Quiz = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [earnPoints, setEarnPoints] = useState(true);  // Whether user can earn points


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
        if (earnPoints) {
          setScore(score + 4);  // Add points only if earnPoints is true
        }
        setEarnPoints(true);

        const nextQuestionId = currentQuestionId + 1;

        if (nextQuestionId <= QuestionList.length) {
          setCurrentQuestionId(nextQuestionId); // Move to the next question
          setSelectedAnswer(null); // Reset the selected answer
        } else {
          // If no more questions, navigate to the "/ending" route
          navigate("/ending",  { state: { score } });
        }
      } else {
        // If the answer is wrong, show the error message
        setErrorMessage(currentQuestion.choices[choiceIndex].popup); // Show the popup message from the choice
        setEarnPoints(false);
      }
    }
  };

  // Get the current question data based on the currentQuestionId
  const currentQuestion = getQuestionById(currentQuestionId);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xl m-auto text-center">
         {/* Display the current points */}
      <Point score={score} /> 
        {currentQuestion ? (
          <>
            <h2 className="text-center font-merriweather mb-10 mx-5 md:mx-0 text-lg">{currentQuestion.question}</h2>
            <Quiz_Choices
              choices={currentQuestion.choices}
              handleChoiceClick={handleChoiceClick} // Handle click event to submit automatically
              selectedAnswer={selectedAnswer} // Pass the selected answer to highlight it
            />
            {errorMessage && <p className="text-red-600 font-poppins mt-5 text-xl">{errorMessage}</p>} {/* Show error message if answer is wrong */}
          </>
        ) : (
          <h2>Loading question...</h2>
        )}
      </div>
    </div>
  );
};

export default Quiz;
