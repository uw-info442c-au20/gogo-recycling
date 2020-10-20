import React from "react";
import logo from "../resources/logo.svg";

const Home = () => {
    return (
        <main>
            <h1>Gogo Recycling</h1>
            <p>Empowering society to make sustainable decisions ♻</p>
            <p>Using Firebase and React</p>
            <img className="App-logo" src={logo} alt="React Logo"/>
        </main>
    );
};

export default Home;