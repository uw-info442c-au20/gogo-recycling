import React from "react";
import { useLocation } from "react-router-dom";
import usePosts from "../hooks/usePosts";

import useUser from "../hooks/useUser";
import anon from "../resources/anon.png";
import manRecycling from "../resources/man-recycling.jpg";

const Profile = () => {
    const userID = useLocation().pathname.split("/")[2];
    const user = useUser(userID);
    const posts = usePosts(userID);

    return (user && posts ?
        <main style={{ marginTop: "6rem" }}>
            <div className="p-4 profile-info">
                <div className="profile-img">
                    <img
                        className="pb-1 rounded-circle" alt="Anonymous user icon"
                        src={anon}
                    />
                    {/* Potential Badge */}
                    <p>Botanical Extraordinaire</p>
                </div>
                <div className="profile-text pl-5">
                    <div className="profile-text2">
                        <h1 className="mb-1">{user.displayName}</h1>
                        {/* Follow button if possible*/}
                        <button className="btn ml-3">
                            <img
                                src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg"
                                alt="person behind a plus sign" aria-label="Follow"
                            />
                        </button>
                    </div>
                    <p className="mb-1">Hi this is an example short bio</p>
                    <p className="mb-0">
                        <span className="post-amount">{user.points}</span> points
                        | <span className="post-amount">{posts.length}</span> posts
                    </p>
                </div>
            </div>
            {/* Use modal to display extra info */}
            <div className="profile-posts pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={manRecycling} alt="man recycling"/>
                        </div>
                        <div className="col-sm">
                            <img src={manRecycling} alt="man recycling"/>
                        </div>
                        <div className="col-sm">
                            <img src={manRecycling} alt="man recycling"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    : <main><h1>Loading...</h1></main>);
};

export default Profile;