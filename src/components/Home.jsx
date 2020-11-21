import React from "react";
import HomepageHeading from "../components/HomeBanner";

import recycle from '../resources/recycle.png';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <main>
            <div id="landing-page">
                <div id="home">
                    <div id="home-caption">
                        <h1>Reduce. Reuse. Recycle.</h1>
                        <p>Gogo Recycling empowers society to make sustainable decisions. We offer a community board of <Link to="/posts" className="highlight">DIY recycling ideas</Link> posted by our users and a <Link to="recycle-guide" className="highlight">recycling guide</Link> that helps people properly recycle their items!</p>
                        <Link to="/posts"><button className="btn btn-main">Explore Community</button></Link>
                    </div>
                    <div id="home-img">
                        <img src={recycle} alt="A person planting a seed on earth, a person watering the earth, and a person throwing away trash." />
                    </div>
                </div>
                <div className="pb-3">Read more about recycling <span role="img" aria-label="down arrow">↓</span></div>
            </div>
            <HomepageHeading mobile="false"></HomepageHeading>
        </main>
    );
};

export default Home;