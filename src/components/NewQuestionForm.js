import React from "react";



const NewQuestionForm = props => {
    const handleSubmit = event => {
        event.preventDefault();
    
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
    
        props.onSubmit({
            title: formData.get("title"),
            body: formData.get("body")
        });

        currentTarget.reset();
    };

    return (
        <form className="QuestionForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label> <br />
          <textarea name="body" id="body" cols="60" rows="4" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
};

export default NewQuestionForm;