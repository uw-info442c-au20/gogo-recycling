import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";

const usePosts = (options = null) => {
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
            .orderBy("timeCreated", "asc")
            .onSnapshot(snapshot => {
                let newPosts = [];
                console.log("Updating Pod Messages");
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