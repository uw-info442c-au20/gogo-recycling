import React from "react";
import useUser from "../hooks/useUser";
import levelIcons  from "./LevelIcons";
import usePosts from "../hooks/usePosts";
import { useLocation } from "react-router-dom";
import calculateLevel from "../helpers/levelHelper";

const Profile = () => {
    const userID = useLocation().pathname.split("/")[2];
    const user = useUser(userID);
    const posts = usePosts(userID);

    return (user && posts ?
        <main style={{ marginTop: "7rem" }}>
            <div className="p-4 profile-info">
                <div className="profile-img">
                    <img
                        className="pb-1 rounded-circle"
                        src={levelIcons[calculateLevel(user.points)]}
                        alt="An illustrated green leaf"
                    />
                    <p>Level: {calculateLevel(user.points)}</p>
                </div>
                <div className="profile-text pl-5">
                    <div className="profile-text2">
                        <h1 className="mb-1">{user.displayName}</h1>
                    </div>
                    <p className="mb-0">
                        <span className="post-amount">{user.points}</span> points
                        | <span className="post-amount">{posts.length}</span> post(s)
                    </p>
                </div>
            </div>
            {posts.length > 0 &&
            <>
                <h2 className="pt-2">Posts</h2>
                <div className="profile-posts">
                    {posts.map(post =>
                        <div className="m-3 shadow" key={post.id}>
                            {post.images && <img className="pb-2" src={post.images[0]} alt="Post preview"/>}
                            <p className="px-2 m-0">{post.description}</p>
                            <p className="m-2">{post.likes.length} like(s)</p>
                        </div>
                    )}
                </div>
            </>}
        </main>
    : <main><h1>Loading...</h1></main>);
};

export default Profile;