import QuizzTimer from "./QuizzTimer";
import Answers from "./Answers";
function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="quiz">
      <QuizzTimer timeout={10000} onTimeout={onSkipAnswer} />
      <div id="question">
        <h2>Question : {questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
