import React, { useState } from "react";
import {QuestionList} from "../utils/testQuestions";
import Quiz_Choices from "../Components/Quiz_Choices";


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
   console.log(currentQuestionId),
   console.log(QuestionList),
   console.log(currentQuestion),
   <div>
     {showScore ? (
       <div>
         <h2>Your score is {score}</h2>
       </div>
     ) : (
       <div>
         {currentQuestion ? (
           <>
             <h2>{currentQuestion.question}</h2>
             <Quiz_Choices
               choices={currentQuestion.choices}
               handleChoiceClick={handleChoiceClick}
             />
           </>
         ) : (
           <h2>Loading question...</h2>
         )}
       </div>
     )}
   </div>
 );
};


export default Quiz;