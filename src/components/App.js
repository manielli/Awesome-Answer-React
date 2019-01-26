import React from "react";
import "../styles/App.css"
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

import questionsData from "../questionsData";
import questionData from "../questionData";

const App = () => {
  return (
    <div>
      <QuestionIndexPage questions={questionsData} />
      <QuestionShowPage question={questionData} />
    </div>
  );
};

export default App;