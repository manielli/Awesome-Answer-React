import React, { Component } from "react";
import "../styles/App.css"
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

import questionsData from "../questionsData";
import questionData from "../questionData";
// import CurrentDateTime from "./CurrentDateTime";

import {Question, Session} from "../requests";

// This allows us to use the Question and Session helper modules
// that we created directly from the console
// window.Question = Question;
// window.Session = Session;
// The above was for initial testing purposes only
// DO NOT do this in your real app
// Only for the development phase
// and only temporarily at that

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    // console.log("The app just mounted");
    // Within componentDidMount, we fetch all of our questions
    // asynchronously.
    // Once the server has responded woth the list of questions
    // We can update the state to have this list of questions

    Session
      .create({email: "js@winterfell.gov", password: "daenerystargaryen"})
      .then((user) => {
        this.setState({
          currentUser: user
        })
      });
  }

  render() {
    return (
    <div>
      {/* <CurrentDateTime onlyTime={false} /> */}
      <QuestionIndexPage questions={questionsData} />
      <QuestionShowPage question={questionData} />
    </div>      
    );
  } 
}

// const App = () => {
//   return (
//     <div>

//       {/* <CurrentDateTime onlyTime={false} /> */}
//       <QuestionIndexPage questions={questionsData} />
//       <QuestionShowPage question={questionData} />
//     </div>
//   );
// };

export default App;