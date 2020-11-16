
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";

import PostModal from "./PostModal";
import PostPreview from "./PostPreview";
import CreatePostModal from "./CreatePostModal";

const Posts = postID => {
    // Post information
    const posts = usePosts();
    // Every user that correlate to the posts
    const [ users, setUsers ] = useState({});

    // Contains information about the current selected post
    const [ activePost, setActivePost ] = useState();

    // Retrieve users that correspond with the posts
    useEffect(() => {
        const getUsers = async () => {
            const newUsers = {};
            for (let post of posts) {
                let data = (await post.user.get()).data()
                newUsers[post.user.id] = data;
            }
            setUsers(newUsers);
        };

        getUsers();
    }, [ posts ]);

    return (
        <main>
            <h1>Posts</h1>
            <button
                className="btn btn-primary my-2"
                data-toggle="modal" data-target="#createPostModal"
            >
                <i
                    className="fas fa-plus-circle fa-2x"
                ></i>
            </button>
            <section className="posts w-50 mx-auto">
                {posts.length > 0 && posts.map(post =>
                    <PostPreview
                        key={post.id} post={ post }
                        users={ users } setActivePost={ setActivePost }
                    />
                )}
            </section>
            <PostModal post={activePost}/>
            <CreatePostModal/>
        </main>
    );
};

export default Posts;