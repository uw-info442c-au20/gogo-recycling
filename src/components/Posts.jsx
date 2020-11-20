
import React from "react";
import { useState, useEffect, useRef } from "react";

import usePosts from "../hooks/usePosts";

import PostModal from "./PostModal";
import PostPreview from "./PostPreview";
import CreatePostModal from "./CreatePostModal";

const Posts = postID => {
    // Allows for modal to be programmatically toggled
    const modalButton = useRef();
    const toggleModal = () => {
        modalButton.current.click();
    }

    // Post information
    const posts = usePosts();
    // Every user that correlate to the posts
    const [users, setUsers] = useState({});

    // Contains information about the current selected post
    const [activePost, setActivePost] = useState();

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
    }, [posts]);

    return (
        <main>
            <h1 className="p-4">Posts</h1>
            <i
                ref={modalButton} className="fas fa-plus-circle fa-3x"
                data-toggle="modal" data-target="#createPostModal"
                style={{ position: "fixed", right: "2%", bottom: "2%", cursor: "pointer" }}
            >
            </i>
            <section className="posts w-50 mx-auto">
                {posts.length > 0 && posts.map(post =>
                    <PostPreview
                        key={post.id} post={post}
                        users={users} setActivePost={setActivePost}
                    />
                )}
            </section>
            <PostModal post={activePost} />
            <CreatePostModal toggleModal={toggleModal} />
        </main>
    );
};

export default Posts;