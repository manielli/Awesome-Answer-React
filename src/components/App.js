import React, { Component } from "react";
import "../styles/App.css"
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

import questionsData from "../questionsData";
import questionData from "../questionData";

// import CurrentDateTime from "./CurrentDateTime";

import {Question, Session} from "../requests";

window.Question = Question;
window.Session = Session;

class App extends Component {
  componentDidMount() {
    // console.log("The app just mounted");

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