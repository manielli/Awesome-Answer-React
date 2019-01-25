import React from "react";
import "../styles/App.css"
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import questionsData from "../questionsData";

const App = () => {
  return (
    <div>
      <QuestionIndexPage questions={questionsData} />
      <QuestionShowPage />
    </div>
  );
};

export default App;