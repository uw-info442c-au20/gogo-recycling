import React from 'react';
import { Link } from "react-router-dom";

import recyclePromo from '../resources/home-banner/recycle-promo.jpg';
import cycleEconomy from "../resources/home-banner/cycle-economy.png";

export default function CenteredGrid() {
    return (
        <React.Fragment> 
            <div id="stat-1" className="shadow my-5">
                {/* inspiring quote emphasizing buyers impact the movement of business */}
                <div className="p-3">
                    <h1>“Recycling, packaging, businesses are changing all of those things because that’s what consumers want.”</h1>
                    <h2>&mdash;Jerry Greenfield, Co-founder of Ben &amp; Jerry’s Ice Cream&mdash;</h2>
                </div>
            </div>
            <div id="info-container">
                <div id="stat-2" className="shadow p-4">
                    <h2>First Step: Proper Recycling</h2>
                    <img id="stat2" src={recyclePromo} alt="People advertising proper recycling" />
                    <p className="px-3">INTRODUCE BUSINESS THAT PRACTICE CIRCULAR ECONOMY. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,.looked up one of the more obscure Latin words, consectetur, e of classical Latin literature. from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,.looked up one of the more obscure Latin words, consectetur.</p>
                    <Link to="/"><button className="btn btn-main">Easy Recycling Guide</button></Link>
                </div>
                <div id="stat-3" className="shadow p-4">
                    <h2>Beyond Recycling</h2>
                    <img id="stat3" src={cycleEconomy} alt="Circular Economy" />
                    <p className="px-3">INTRODUCE BUSINESS THAT PRACTICE CIRCULAR ECONOMY. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,.looked up one of the more obscure Latin words, consectetur, e of classical Latin literature. from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,.looked up one of the more obscure Latin words, consectetur.</p>
                    <Link to="/"><button className="btn btn-main">Explore Business with Circular Economy</button></Link>
                </div>
            </div>
        </React.Fragment> 
    );
}
