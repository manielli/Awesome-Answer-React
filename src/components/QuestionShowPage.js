import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: { ...this.props.question }
    };
  }

  render () {
    return (
      <main>
        <QuestionDetails {...this.state.question} />
        <h2>Answers</h2>
        <AnswerList answers={this.state.question.answers} />
      </main>
    );
  }
};

export default QuestionShowPage;
