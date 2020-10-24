
import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import { Link, useLocation } from "react-router-dom";
import { fireauth, firebase } from "../config/firebase";

const Navigation = () => {
    const { user } = useContext(Context);
    const rootPath = useLocation().pathname.split("/")[1];

    const login = () => {
        fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };

    const logout = () => {
        fireauth.signOut();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                <ul className="navbar-nav mr-auto">
                    <li className={"nav-item " + (rootPath === "" ? "active" : "")}>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className={"nav-item " + (rootPath === "create" ? "active" : "")}>
                        <Link className="nav-link" to="/create">
                            Create
                        </Link>
                    </li>
                    <li className={"nav-item " + (rootPath === "posts" ? "active" : "")}>
                        <Link className="nav-link" to="/posts">
                            Posts
                        </Link>
                    </li>
                    <li className={"nav-item " + (rootPath === "test" ? "active" : "")}>
                        <Link className="nav-link" to="/test">
                            Test
                        </Link>
                    </li>
                </ul>
                <div className="nav-item active">
                    <button
                        className="btn btn-light"
                        onClick={() => (user ? logout() : login())}
                    >
                        {user ? `Hi ${user.displayName}` : "Sign in"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;