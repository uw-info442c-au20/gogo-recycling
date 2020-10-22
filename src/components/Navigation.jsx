
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation().pathname.split("/")[1];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Gogo Recycling
            </Link>
            <button
                className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={"nav-item " + (location === "" ? "active" : "")}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={"nav-item " + (location === "test" ? "active" : "")}>
                        <Link className="nav-link" to="/test">Test</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;