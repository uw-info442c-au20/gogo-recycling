import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";

const useUser = userID => {
    const [ user, setUser ] = useState();

    useEffect(() => {
        console.log("Updating User");

        const unsubscribe = firestore
            .collection("users")
            .doc(userID)
            .onSnapshot(snapshot => {
                setUser(snapshot.data());
            });

        return unsubscribe;
    }, [ userID ]);

    return user;
};

export default useUser;