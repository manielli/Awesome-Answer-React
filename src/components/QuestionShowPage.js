import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: { ...this.props.question }
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    // .bind() is a method of functions. It allows us to permanently
    // set a `this` for that function.
    // We do this to make sure that whenever deleteQuestion will be
    // called, its `this` will refer to the instance of the component
    // where we can `setState` amongst methods.
  }

  deleteQuestion() {
    console.log("Deleting... question with the id");

    this.setState({ question: null });
  }

  render () {
    if (!this.state.question) {
        return (
          <h2>Question doesn't exist!</h2>
        );
    }
    return (
      <main>
        <QuestionDetails {...this.state.question} />
        <button onClick={this.deleteQuestion} >Delete</button>

        <h2>Answers</h2>
        <AnswerList answers={this.state.question.answers} />
      </main>
    );
  }
};

export default QuestionShowPage;
