
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import PostPreview from "./PostPreview";

const Posts = postID => {
    const posts = usePosts();
    const [ users, setUsers ] = useState({});
    console.log(posts)

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
            <section className="posts w-50 mx-auto">
                {posts.length > 0 && posts.map(post =>
                    <PostPreview key={post.id} post={ post } users={ users }/>
                )}
            </section>
        </main>
    );
};

export default Posts;