import { Context } from "../Context";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import SignInModal from "./SignInModal";
import ProfileModal from "./ProfileModal";

import Headroom from "react-headroom";

const Navigation = () => {
    const { user } = useContext(Context);
    const rootPath = useLocation().pathname.split("/")[1];

    return (
        <div>
            <Headroom>
                <div className="sticky nav-bg pt-3 pb-3">
                    <nav className="navbar navbar-expand-xl navbar-light p-0">
                        <Link className="navbar-brand" to="/">
                            <h3 className="mb-0">GOGO RECYCLING</h3>
                            <img className="pl-2" src="https://www.flaticon.com/svg/static/icons/svg/3696/3696954.svg" alt="recycle symbol" />
                        </Link>
                        <button
                            className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className={"nav-item " + (rootPath === "" ? "active" : "")}>
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <li className={"nav-item " + (rootPath === "recycle-guide" ? "active" : "")}>
                                    <Link className="nav-link" to="/recycle-guide">RECYCLE GUIDE</Link>
                                </li>
                                <li className={"nav-item " + (rootPath === "posts" ? "active" : "")}>
                                    <Link className="nav-link" to="/posts">COMMUNITY POSTS</Link>
                                </li>
                            </ul>
                            <div className="nav-item active">
                                <button
                                    className="btn btn-styled"
                                    data-toggle="modal" data-target={user ? "#profileModal" : "#signInModal"}
                                >
                                    {user ? `Hi ${user.displayName}` : "SIGN IN"}
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </Headroom>
            <SignInModal />
            {user && <ProfileModal user={user} />}
        </div>
    );
};

export default Navigation;