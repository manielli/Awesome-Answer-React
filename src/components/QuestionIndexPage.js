import React, { Component } from "react";
import NewQuestionForm from "./NewQuestionForm";
// import CurrentDateTime from "./CurrentDateTime";

import { Question } from "../requests";

import { Link } from 'react-router-dom';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    // Very temporary you should never code like this lying aroud
    // Only to play around in the console with questions
    // window.questions = props.questions;

    this.state = {
      
      // questions: [ ...this.props.questions ],
      questions: null//,


      // shouldShowTime: true 
      // determine whether the CurrentDateTime component
      // should be displayed.
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    Question.all().then(questions => {
      this.setState({
        questions: questions
      });
    });
  }


  deleteQuestion(id) {
    console.log("Deleting", id);

    // To change `state`, you must ALWAYS use the `this.setState()`
    // method.

    // You can use setState by passing an object as its first argument.
    // When the time comes, the object will be merged with the current
    // state changing whatever properties are inside.
    // this.setState({ questions: this.state.questions.filter(q => q-id !== id) });

    // You can also use setState by giving a callback as a first argument
    // that receives the current state and props as arguments. It must
    // an object that will be merged with the state.
    this.setState((state, props) => ({
      questions: state.questions.filter(q => q.id !== id )
    }))

    // More on setState:
    // http://reactjs.org/docs/state-and-lifecycle.html
  }

  createQuestion(params) {
    this.setState((state) => ({
      questions: [
       {
         id: Math.max(...state.questions.map(q => q.id)) + 1,
         ...params
       },
       ...state.questions
      ]
    }));
  }

  render () {
    // Initially, before we have received our list of questions from the server
    // this.state.questions is `null`.
    // So, until the have received them, display a loading message to
    // the user.
    
    if (!this.state.questions) {
      return (
        <main>
          <h1>Loading...</h1>
        </main>
      );
    }

    // However, once we have received our list of questions
    // i.e. QuestionIndexPage's state now has an array as its
    // value for this.state.questions, we should display that
    // list of questions.
    
    return (
      <main>

        {/* {this.state.shouldShowTime ? <CurrentDateTime onlyTime={false} /> : null}
        <button onClick={() => this.setState({
          shouldShowTime: !this.state.shouldShowTime
        })} >Toggle Time Show</button> */}
        
        <NewQuestionForm onSubmit={this.createQuestion}/>
        
        <h1>Questions</h1>

        <ul style={{
          padding: 0,
          listStyle: "none"
        }}>

          {this.state.questions.map(question => (

            <li key={question.id}>

              {/* <a href="#ignore-me">{question.title}</a> <br/> */}
              <Link to={`/questions/${question.id}`}>{question.title}</Link> <br />
                    
              <button onClick={event => {
                // console.log("Delete clicked!");
                this.deleteQuestion(question.id);
              }} >Delete</button>
            </li>  
          ))}

        </ul>
      </main>
    );
  }
};

export default QuestionIndexPage;
