import { useState } from "react";
import { quizQuestions } from "../shared/questions";

const Quiz = ({ next }) => {
  const [current, setCurrent] = useState(0);

  const question = quizQuestions[current];

  const goNext = () => {
    if (current === quizQuestions.length - 1) {
      next();
      return;
    }

    setCurrent(current + 1);
  };

  return (
    <div className="quiz">
      <h2 className="quiz__question">
        {question.question}
      </h2>

      <p className="quiz__progress">
        {current + 1} / {quizQuestions.length}
      </p>

      <button className="quiz__next" onClick={goNext}>
        {current === quizQuestions.length - 1
          ? "Weiter zur nächsten Überraschung!!"
          : "Nächste Frage →"}
      </button>
    </div>
  );
};

export default Quiz;
