import React from "react";

const AnswerDetails = props => {
    return (
        <div style={{
            backgroundColor: "whitesmoke",
            // padding: "5px",
            // margin: "5px"
            borderRadius: "5px",
            paddingLeft: "5px"
        }}>
            <p>{props.body}</p>
            <p>
                <small>By {props.author.first_name}</small> <br/>
                <small>
                    <strong>Created At:</strong>{props.created_at.toLocaleString()}
                </small>
            </p>
            <button onClick={() => props.onDeleteClick(props.id)} >Delete</button>
        </div>
    );
};

export default AnswerDetails;