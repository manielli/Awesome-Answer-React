import React from "react";


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

export default QuestionDetails;