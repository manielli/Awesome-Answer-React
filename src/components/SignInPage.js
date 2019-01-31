import React, { Component } from "react";
import { Session } from "../requests";

class SignInPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: []
        };

        this.createSession = this.createSession.bind(this);
    }

    createSession(event) {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        Session.create({
            email: formData.get("email"),
            password: formData.get("password")
        }).then( data => {
            // console.log(data);
            const { onSignIn = () => {} } = this.props;

            if (typeof data.id === "number") {
                this.props.history.push("/");
                
                onSignIn();
            } else {
                this.setState({errors: [{message: "Wrong email or password"}]})
            }
            
            // The `history` prop is passed to components rendered by the
            // <Route> component. This `history` allows us to manipulate
            // the history of the browser including simulating redirects,
            // pressing back or forward, etc.
        });
    }
    
    render() {
        // console.log(this.props);

        const { errors } = this.state;
        return (
            <main>
                <h1>Sign In</h1>
                <form onSubmit={this.createSession} >
                    { errors.length > 0 ? (
                        <div className="FormErrors">{
                            errors.map(e => e.message).join(", ")}
                        </div>
                    ) : null
                    }
                    <div>
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <input type="submit" value="Sign In" />
                </form>
            </main>
        )
    }
}

export default SignInPage;