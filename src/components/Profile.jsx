import React from "react";

import { useLocation } from "react-router-dom";
import usePosts from "../hooks/usePosts";

import useUser from "../hooks/useUser";
import anon from "../resources/anon.png";

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
                </div>
                <div className="profile-text pl-5">
                    <div className="profile-text2">
                        <h1 className="mb-1">{user.displayName}</h1>
                    </div>
                    <p className="mb-0">
                        <span className="post-amount">{user.points}</span> points
                        | <span className="post-amount">{posts.length}</span> posts
                    </p>
                </div>
            </div>
            <div className="profile-posts">
                {posts.length > 0 && posts.map(post =>
                    <div className="m-3 shadow">
                        <img className="pb-2" src={post.images}/>
                        <p className="px-2 m-0">{post.description}</p>
                        <p className="m-2">{post.likes.length} like(s)</p>
                    </div>
                )}
            </div>
        </main>
    : <main><h1>Loading...</h1></main>);
};

export default Profile;