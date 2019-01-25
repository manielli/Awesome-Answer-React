import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

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
            <h2>Answers</h2>
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy? 1"
                author={{full_name: "Ulises Wisozk 1"}}
                created_at={new Date()}
            />
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy? 2"
                author={{full_name: "Ulises Wisozk 2"}}
                created_at={new Date()}
            />
            <AnswerDetails 
                body="Of all the rooms to burn in your uncle's home... the kitchen! Are you mad, boy? 3"
                author={{full_name: "Ulises Wisozk 3"}}
                created_at={new Date()}
            />
        </main>
    );
};

export default QuestionShowPage;