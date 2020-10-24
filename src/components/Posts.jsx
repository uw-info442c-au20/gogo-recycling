
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";

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

    const postPreview = post => {
        return (
            <div key={post.id} className="card bg-info mb-3">
                <img
                    src={post.images[0]} alt=""
                    className="card-img-top"
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {post.title}
                    </h4>
                    <h6>By {users[post.user.id] && users[post.user.id].displayName}</h6>
                    <p className="mb-0">Description: {post.description}</p>
                    <p><em>
                        {post.timeCreated && post.timeCreated.toDate().toLocaleString()}
                    </em></p>
                </div>
            </div>
        );
    };

    return (
        <main>
            <h1>Posts</h1>
            <section className="posts w-50 mx-auto">
                {posts.length > 0 && posts.map(post => postPreview(post))}
            </section>
        </main>
    );
};

export default Posts;