import React from "react";
import { Route, Redirect } from "react-router-dom";

// <AuthRoute path="/questions/new" component={QuestionNewPage} />
const AuthRoute = props => {
    const { isAuth, component: Component, restProps } = props;
    return(
        <Route 
            {...restProps} 
            render={routeProps => {
                if (isAuth) {
                    return <Component {...routeProps} />;
                    // return React.createElement(Component, routeProps); 
                } else {
                    return <Redirect to="/sign_in" />;
                }
            }} 
        />
    );
}

export default AuthRoute;