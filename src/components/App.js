import React from "react";
import "../styles/App.css"
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

import questionsData from "../questionsData";
import questionData from "../questionData";

// import CurrentDateTime from "./CurrentDateTime";

const App = () => {
  return (
    <div>

      {/* <CurrentDateTime onlyTime={false} /> */}
      <QuestionIndexPage questions={questionsData} />
      <QuestionShowPage question={questionData} />
    </div>
  );
};

export default App;