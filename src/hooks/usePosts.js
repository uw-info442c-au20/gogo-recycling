import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";

const usePosts = options => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        console.log("Updating Posts");
        let query = firestore.collection("posts")

        if (options) {
            if (options.userID) {
                query = query.where(
                    "user",
                    "==",
                    firestore.collection("users").doc(options.userID)
                );
            }
        }

        const unsubscribe = query
            .orderBy("timeCreated", "desc")
            .onSnapshot(snapshot => {
                let newPosts = [];
                console.log("Updating Post Information");
                snapshot.forEach(post => {
                    newPosts.push({ id: post.id, ...post.data()});
                });
                setPosts(newPosts);
            });

        return unsubscribe;
    }, [ options ]);

    return posts;
};

export default usePosts;