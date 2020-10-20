
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            Navigation
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/test">Test</Link>
        </nav>
    );
};

export default Navigation;