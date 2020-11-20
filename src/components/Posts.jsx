
import { firestore, firebase } from "../config/firebase";
import React, { useState, useEffect, useRef, useContext } from "react";

import { Context } from "../Context";
import usePosts from "../hooks/usePosts";

import PostModal from "./PostModal";
import PostPreview from "./PostPreview";
import CreatePostModal from "./CreatePostModal";

const Posts = () => {
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

    const { user } = useContext(Context);
    // Toggle a like given the mode
    // mode (String) ["like", "dislike"]: Determines what action is taken
    // post (Post): Information on the post wanting to be liked (Must contain id)
    const toggleLike = async (mode, post) => {
        const userRef = firestore.collection("users").doc(user.local.uid);
        const postRef = firestore.collection("posts").doc(post.id);
        await postRef.update({
            likes: mode === "like" ?
                firebase.firestore.FieldValue.arrayUnion(userRef) :
                firebase.firestore.FieldValue.arrayRemove(userRef)
        });
    };

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
                style={{
                    position: "fixed", right: "2%", bottom: "2%", cursor: "pointer", zIndex: 99
                }}
            >
            </i>
            <section className="posts container mx-auto">
                {posts.length > 0 && posts.map(post =>
                    <PostPreview
                        key={post.id} post={post}
                        users={users} setActivePost={setActivePost}
                        toggleLike={toggleLike} loggedIn={!!user}
                        isLiked={function () {
                            for (let like of post.likes) {
                                if (user && user.local.uid === like.id) {
                                    return true;
                                }
                            }
                            return false;
                        }()}
                    />
                )}
            </section>
            <PostModal post={activePost} />
            <CreatePostModal toggleModal={toggleModal} />
        </main>
    );
};

export default Posts;