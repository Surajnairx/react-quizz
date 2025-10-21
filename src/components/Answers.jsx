import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];

    shuffledAnswer.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li className="answer" key={index}>
            <button className={cssClasses} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
