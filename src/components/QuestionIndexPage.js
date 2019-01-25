import React from "react";

const QuestionIndexPage = props => {
  return (
    <main>
      <h1>Questions</h1>
      <ul style= {{
          padding: 0,
          listStyle: "none"
      }} >
            {props.questions.map(question => (
              <li>
                  <a href="">{question.title}</a>
              </li>  
            ))}
      </ul>
    </main>
  );
};

export default QuestionIndexPage;
