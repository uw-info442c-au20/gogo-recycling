
import { Context } from "../Context";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import SignInModal from "./SignInModal";
import ProfileModal from "./ProfileModal";

const Navigation = () => {
    const { user } = useContext(Context);
    const rootPath = useLocation().pathname.split("/")[1];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <Link className="navbar-brand" to="/">
                <h3 style={{ color: "#00FF1A" }}>
                    Gogo Recycling <i className="fas fa-recycle"></i>
                </h3>
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
                        data-toggle="modal" data-target={user ? "#profileModal" : "#signInModal"}
                    >
                        {user ? `Hi ${user.displayName}` : "Sign in"}
                    </button>
                    <SignInModal/>
                    {user && <ProfileModal user={ user }/>}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;