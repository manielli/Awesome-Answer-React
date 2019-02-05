import React from 'react';
import { NavLink, /* Link */ } from 'react-router-dom';
import CurrentDateTime from './CurrentDateTime';

const NavBar = props => {
    const { currentUser, onSignOut = () => {} } = props;

    const handleSignOutClick = event => {
        event.preventDefault();

        onSignOut();
    }

    return (
        <nav>
            {/* We use NavLink now instead of <a></a> to navigate within
            our app.
            NavLink takes a prop `to` which is a path to navigate to */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/questions">Questions</NavLink>
            { currentUser ? (
                <NavLink exact to="/questions/new" >Ask a Question</NavLink>
            ) : null
            }
            {
                currentUser ? (
                    <>
                     <span> Hi, {currentUser.full_name} </span>
                     <a href="#not-used" onClick={handleSignOutClick} >Sign Out</a>
                    </>
                ) : (
                    <NavLink exact to="/sign_in">Sign In</NavLink>
                )
            }
            <CurrentDateTime onlyTime={true} style={{marginLeft: "auto"}} />
        </nav>
    )
}

export default NavBar;