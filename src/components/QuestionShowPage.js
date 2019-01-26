import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";

const QuestionShowPage = props => {
  return (
    <main>
      <QuestionDetails {...props.question} />
      <h2>Answers</h2>
      <AnswerList answers={props.question.answers} />
    </main>
  );
};

export default QuestionShowPage;
