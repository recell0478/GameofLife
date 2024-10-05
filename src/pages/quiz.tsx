import React, { useState } from "react";
import {QuestionList} from "../utils/testQuestions";
import Quiz_Choices from "../components/Quiz_Choices";


const Quiz = () => {
 const [currentQuestionId, setCurrentQuestionId] = useState(1); // Start with question ID 1
 const [score, setScore] = useState(0); // Tracks the score
 const [showScore, setShowScore] = useState(false); // Whether to show score at the end of the quiz


 // Function to get the question by ID
 const getQuestionById = (id: number) => {
   return QuestionList.find((question) => question.id === id);
 }; 


 const handleChoiceClick = (popup: string) => {
   // For now, we just increment the score based on popup value (for example purposes)
   setScore(score + parseInt(popup));


   const nextQuestionId = currentQuestionId + 1;
   if (nextQuestionId <= QuestionList.length) {
     setCurrentQuestionId(nextQuestionId);
   } else {
     setShowScore(true);
   }
 };


 // Get the current question data based on the currentQuestionId
 const currentQuestion = getQuestionById(currentQuestionId);


 return (
   <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-xl m-auto text-center">
      {showScore ? (
        <div>
          <h2>Your score is {score}</h2>
        </div>
      ) : (
        <div>
          {currentQuestion ? (
            <>
              <div>
                <h2 className="text-center font-merriweather mb-10 mx-5 md:mx-0 text-xl" >{currentQuestion.question}</h2>
                <Quiz_Choices
                  choices={currentQuestion.choices}
                  handleChoiceClick={handleChoiceClick}
                />
              </div>
            </>
          ) : (
            <h2>Loading question...</h2>
          )}
        </div>
      )}
    </div>
   </div>
 );
};


export default Quiz;