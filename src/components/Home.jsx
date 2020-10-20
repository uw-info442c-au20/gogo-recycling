import { Context } from "../Context";
import logo from "../resources/logo.svg";
import React, { useContext } from "react";
import { firebase, fireauth } from "../config/firebase";

const Home = () => {
    const { user } = useContext(Context);

    return (
        <main>
            <h1>Gogo Recycling</h1>
            {user ? <button onClick={() => fireauth.signOut()}>Hello {user.displayName}</button> :
            <button onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>Sign in</button>}
            <p>Empowering society to make sustainable decisions ♻</p>
            <p>Using Firebase and React</p>
            <img className="App-logo" src={logo} alt="React Logo"/>
        </main>
    );
};

export default Home;