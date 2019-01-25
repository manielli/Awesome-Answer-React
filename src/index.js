import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// A react component is a function that returns a React element.
// You React component's must use the PascalCase naming convention.
// Components whose name does not begin with a capital letter will
// be considered plain HTML elements.

// const QuestionDetails = () => {
//     return (
//         <div>
//             <h2>What is your favourite colour?</h2>
//             <p>Red, green, blue, magenta, etc.</p>
//             <p>Bt Bridge Troll</p>
//             <p>
//                 <small>Seen 10 time(s)</small>•<small>Create 10 days ago</small>
//                 <small>Last edited 2 hours ago</small>
//             </p>
//         </div>
//     );
// };

const QuestionDetails = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>By {props.author.full_name}</p>
            <p>
                <small>Seen {props.view_count.toLocaleString()}</small> • 
                <small>Create {props.created_at.toLocaleString()}</small> •
                <small>Last edited {props.updated_at.toLocaleString()}</small>
            </p>
        </div>
    );
};


const AnswerDetails = props => {
    return (
        <div>
            <p>{props.body}</p>
            <p>
                <small>By {props.author}</small>
                <small>
                    <strong>Created At:</strong>{props.created_at.toLocaleString()}
                </small>
            </p>
        </div>
    );
};

const QuestionShowPage = () => {
    return (
        <main>
            <QuestionDetails
                title="What is your favourite colour?"
                body="Red, green, blue, etc."
                author={{full_name: "Bridge Troll"}}
                view_count={1234}
                created_at={new Date()}
                updated_at={new Date()}
            />
            <h1>–––––––––––––––––––––––––––––––––––</h1>
            <h2>Answers</h2>
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy?"
                author={{full_name: "Ulises Wisozk"}}
                created_at={new Date()}
            />
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy?"
                author={{full_name: "Ulises Wisozk"}}
                created_at={new Date()}
            />
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy?"
                author={{full_name: "Ulises Wisozk"}}
                created_at={new Date()}
            />
        </main>
    );
};

// In JSX, self-closing tags must be closed. <img> doesn't work, you
// must write <img/> to close it.
// ReactDOM.render(<QuestionDetails />, document.getElementById('root'));
// ReactDOM.render(<AnswerDetails />, document.getElementById('root'));
ReactDOM.render(<QuestionShowPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
