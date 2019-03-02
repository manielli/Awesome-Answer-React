import "../styles/FormErrors.css";
import React from "react";

const FormErrors = props => {
    const { errors = [], forField, noField = false } = props;

    let filteredErrors = errors;
    if (forField) {
        filteredErrors = errors.filter(
            e => e.field.toLowerCase() === forField.toLowerCase()
        );
    }

    return filteredErrors.length > 0 ? (
        <ul className="FormErrors" >
            {
                filteredErrors.map((error, i) => (
                    <li key={i} >
                        {/* {!noField && error.field} {error.message} */}
                        {!noField ? error.field : null} {error.message}
                        {/* {error.message} */}
                    </li>
                ))
            }
        </ul>
    ) : null ;
};

export default FormErrors;