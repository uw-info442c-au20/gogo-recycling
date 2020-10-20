import { Context } from "../Context";
import logo from "../resources/logo.svg";
import React, { useContext } from "react";

const Home = () => {
    const { user } = useContext(Context);

    return (
        <main>
            <h1>Gogo Recycling</h1>
            {user ? `Hello ${user.username}` : "No one is logged in"}
            <p>Empowering society to make sustainable decisions ♻</p>
            <p>Using Firebase and React</p>
            <img className="App-logo" src={logo} alt="React Logo"/>
        </main>
    );
};

export default Home;