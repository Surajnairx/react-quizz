import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completedImage from "../assets/quiz-complete.png";
import QuizzTimer from "./QuizzTimer";
import Answers from "./Answers";
import Question from "./Question";

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevAns) => {
        return [...prevAns, selectAnswer];
      });
      setTimeout(() => {
        if (selectAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, 1000);
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={completedImage} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <Question
      key={activeQuestionIndex}
      questionText={QUESTIONS[activeQuestionIndex].text}
      answers={QUESTIONS[activeQuestionIndex].answers}
      onSelectAnswer={handleSelectAnswer}
      selectedAnswer={userAnswer[userAnswer.length - 1]}
      answerState={answerState}
      onSkipAnswer={handleSkipAnswer}
    />
  );
}

export default Quiz;
