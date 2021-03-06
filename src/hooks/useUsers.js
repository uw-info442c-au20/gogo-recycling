import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";

const useUsers = (options = null) => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        console.log("Updating Users");
        let query = firestore.collection("users")

        // Logic for any type of user filtering
        if (options) {
            // Extra Options
        }

        const unsubscribe = query
            .orderBy("timeCreated", "asc")
            .onSnapshot(snapshot => {
                let newUsers = [];
                console.log("Updating Users");
                snapshot.forEach(user => {
                    newUsers.push({ id: user.id, ...user.data()});
                });
                setUsers(newUsers);
            });

        return unsubscribe;
    }, [ options ]);

    return users;
};

export default useUsers;