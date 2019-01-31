import "../styles/App.css";
import React, { Component } from "react";
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";

// import questionsData from "../questionsData";
// import questionData from "../questionData";

// import CurrentDateTime from "./CurrentDateTime";

import { Session } from "../requests";
// import { Question } from "../requests";
import { User } from "../requests";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";
import {BrowserRouter, Route} from "react-router-dom";



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
      currentUser: null//,
      // shouldShowTime: true
    }

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    this.setState({
      currentUser: null
    });

    Session.destroy();
  }

  getCurrentUser() {
    User
    .current().then(data => {
      // This is destructuring the `data` but also redefine the current_user we got form API
      // to currentUser that we used all over this react app and it is CamelCase
      const { current_user: currentUser } = data;
      
      
        if (currentUser) {
          this.setState({currentUser});
        }
     });
  }

  componentDidMount() {
    console.log("The app just mounted");
    // Within componentDidMount, we fetch all of our questions
    // asynchronously.
    // Once the server has responded woth the list of questions
    // We can update the state to have this list of questions

    // Session
    //   .create({email: "js@winterfell.gov", password: "daenerystargaryen"})
    //   .then((user) => {
    //     this.setState({
    //       currentUser: user
    //     });
    //   });

    // User
    //   .current().then(data => {
    //     console.log(data);
    //   });

    this.getCurrentUser();
  }

  render() {
    const { currentUser } = this.state;

    return (
      // We need to wrap all components that are imported from react-router-dom
      // within a component that is a router
      // Here we used the BrowserRouter component to do this
      // So now any "descendent" of the BrowserRouter can be a route
      // or a Link, or a NavLink, etc
      <BrowserRouter>
        <div>
          <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
          {/* 
          {this.state.shouldShowTime ? <CurrentDateTime onlyTime={true} /> : null}
          <button onClick={() => this.setState({
            shouldShowTime: !this.state.shouldShowTime
          })}>Toggle Time Show</button> */}


          {/* The Route component has many props that it uses to
          determine which component to render and when to show that component
          When the path matches in the url bar, it will show the compnent 
          given to the component prop */}


          {/* We use the `exact` prop to exactly match the url in the
            url bar. Otherwise the path will match any path beginning with 
            the path given to `path` prop */}

          <Route path="/" exact component={WelcomePage} />
          <Route path="/questions" exact component={QuestionIndexPage} />
          <Route path="/questions/:id" exact component={QuestionShowPage} />
          <Route path="/sign_in" render={authProps => <SignInPage {...authProps} onSignIn={this.getCurrentUser} />}  />
        </div>      
      </BrowserRouter>
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