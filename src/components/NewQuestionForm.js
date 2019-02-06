import React from "react";
import FormErrors from "./FormErrors";

const NewQuestionForm = props => {
  const { errors = [] } = props;
    const handleSubmit = event => {
        event.preventDefault();
    
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
    
        props.onSubmit({
            title: formData.get("title"),
            body: formData.get("body")
        });

        // currentTarget.reset();
    };

    return (
        <form className="QuestionForm" onSubmit={handleSubmit}>
        {/* <p>
          {errors.map(e => e.message).join(", ")}
        </p> */}
        <div>
          <label htmlFor="title">Title</label> <br />
          <FormErrors noField forField="title" errors={errors} />
          <input name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label> <br />
          <FormErrors noField forField="body" errors={errors} />
          <textarea name="body" id="body" cols="60" rows="4" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
};

export default NewQuestionForm;