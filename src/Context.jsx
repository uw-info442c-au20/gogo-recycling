import React, { useState, createContext, useEffect } from "react";
import { firebase, fireauth, firestore } from "./config/firebase";

const Context = createContext();

const ContextProvider = props => {
    const [ user, setUser ] = useState();

    useEffect(() => {
        let unsubscribe = () => {};

        fireauth.onAuthStateChanged(async localUserData => {
            unsubscribe();
            if (localUserData) {
                const userRef = firestore.collection("users").doc(localUserData.uid);

                (await userRef.get()).exists || await userRef.set({
                    displayName: localUserData.displayName,
                    email: localUserData.email,
                    timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
                    admin: false,
                    points: 0,
                });

                unsubscribe = userRef.onSnapshot(snapshot => {
                    setUser({
                        ...snapshot.data(),
                        local: { ...localUserData }
                    });
                });
            } else {
                unsubscribe = () => {};
                setUser(localUserData);
            }
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const updatePoints = async () => {
            if (user) {
                const userRef = firestore.collection("users").doc(user.local.uid);
                const unsubscribe = firestore.collection("posts")
                    .where("user", "==", userRef)
                    .onSnapshot(snapshot => {
                        let newPoints = 0;
                        if (!snapshot.empty) {
                            snapshot.forEach(post => {
                                post = post.data();
                                newPoints += (post.likes.length + 1);
                            });
                        }

                        userRef.update({ points: newPoints });
                    });

                return unsubscribe;
            }
        }

        updatePoints();
    }, [ user ]);

    return <Context.Provider value={{user}}>
        {props.children}
    </Context.Provider>;
};

export { Context, ContextProvider };