import React, { Component } from "react";
import NewQuestionForm from "./NewQuestionForm";
import { Question } from "../requests";

class QuestionNewPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            errors: []
        };

        this.createQuestion = this.createQuestion.bind(this);
    }

    createQuestion(params) {
        Question
            .create(params)
            .then(data => {
                if (data.errors) {
                    // deal with validation errors
                    this.setState({errors: data.errors});
                } else {
                    this.props.history.push(`/questions/${data.id}`);
                }
            });
    }
    render() {
        return(
            <main>
                <h1>New Question</h1>
                <NewQuestionForm onSubmit={this.createQuestion} errors={this.state.errors} />
            </main>
        );
    }
}

export default QuestionNewPage;