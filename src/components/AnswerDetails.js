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
                <small>By {props.author.full_name}</small> <br/>
                <small>
                    <strong>Created At:</strong>{props.created_at.toLocaleString()}
                </small>
            </p>
        </div>
    );
};

export default AnswerDetails;