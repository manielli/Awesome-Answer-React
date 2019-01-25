import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// A react component is a function that returns a React element.
// You React component's must use the PascalCase naming convention.
// Components whose name does not begin with a capital letter will
// be considered plain HTML elements.
const QuestionDetails = () => {
    return (
        <div>
            <h2>What is your favourite colour?</h2>
            <p>Red, green, blue, magenta, etc.</p>
            <p>Bt Bridge Troll</p>
            <p>
                <small>Seen 10 time(s)</small>•<small>Create 10 days ago</small>
                <small>Last edited 2 hours ago</small>
            </p>
        </div>
    )
}
// In JSX, self-closing tags must be closed. <img> doesn't work, you
// must write <img/> to close it.
ReactDOM.render(<QuestionDetails />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
