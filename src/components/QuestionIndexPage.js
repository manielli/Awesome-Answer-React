import React, { Component } from "react";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state= {
      questions: [ ...this.props.questions ]
    };
  }

  render () {
    return (
      <main>
        <h1>Questions</h1>
        <ul style={{
            padding: 0,
            listStyle: "none"
          }}>
              {this.state.questions.map(question => (
                <li key={question.id}>
                    <a href="#ignore-me">{question.title}</a>
                </li>  
              ))}
        </ul>
      </main>
    );
  }
};

export default QuestionIndexPage;
