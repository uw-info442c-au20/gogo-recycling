import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";

const usePosts = userID => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        console.log("Updating Posts");
        let query = firestore.collection("posts")

        // Logic for any filtering of the queries
        if (userID) {
            query = query.where(
                "user",
                "==",
                firestore.collection("users").doc(userID)
            );
        }

        // Storing in unsubscribe to prevent a memory leak
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
    }, [ userID ]);

    return posts;
};

export default usePosts;