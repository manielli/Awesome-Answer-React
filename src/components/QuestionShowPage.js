import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import { Question } from "../requests";

class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // question: { ...this.props.question }
      question: null
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    // .bind() is a method of functions. It allows us to permanently
    // set a `this` for that function.
    // We do this to make sure that whenever deleteQuestion will be
    // called, its `this` will refer to the instance of the component
    // where we can `setState` amongst methods.
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    // console.log("id", this.props.match.params.id);
    const id = this.props.match.params.id;

    Question.one(id).then(question => {
      console.log(question);
      this.setState({
        question: question,
        loading: false
      })
    })
  }

  deleteQuestion() {
    console.log("Deleting... question with the id");

    this.setState({ question: null });
  }

  deleteAnswer(id) {
    this.setState((state) => ({
      question: {
        ...state.question,
        answers: state.question.answers.filter(a => a.id !== id)
      }
    }));
  }


  render () {
    
    if (this.state.loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      );
    }

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
        <AnswerList answers={this.state.question.answers} onAnswerDeleteClick={this.deleteAnswer} />
      </main>
    );
  }
};

export default QuestionShowPage;
