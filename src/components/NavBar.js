import React from 'react';
import { NavLink, /* Link */ } from 'react-router-dom';
import CurrentDateTime from './CurrentDateTime';

const NavBar = props => {
    return (
        <nav>
            {/* We use NavLink now instead of <a></a> to navigate within
            our app.
            NavLink takes a prop `to` which is a path to navigate to */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/questions">Questions</NavLink>
            <CurrentDateTime onlyTime={true} />
        </nav>
    )
}

export default NavBar;