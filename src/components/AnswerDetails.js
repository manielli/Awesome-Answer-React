import React from "react";

const AnswerDetails = props => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: "5px",
        paddingLeft: "5px"
      }}
    >
      <p>{props.body}</p>
      <p>By {props.author.first_name}</p>
      <p>
        <strong>Created at:</strong>
        {props.created_at.toLocaleString()}
      </p>
    </div>
  );
};

export default AnswerDetails;