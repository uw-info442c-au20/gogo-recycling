import React from 'react';
import { Link } from "react-router-dom";

import recyclePromo from '../resources/home-banner/recycle-promo.jpg';
import sustainableLiving from "../resources/home-banner/sustainable-living.png";

export default function CenteredGrid() {
    return (
        <React.Fragment>
            <div id="stat-1" className="shadow my-5">
                {/* inspiring quote about the importance of individual contributions to sustainable living */}
                <div className="p-3">
                    <h1>“Each one of us has the moral responsibility to do the absolute best that we can.”</h1>
                    <h2>&mdash;Christiana Figueres, Executive Secretary, UNFCCC&mdash;</h2>
                </div>
            </div>

            <div id="stat-1" className="shadow my-5">
                {/* video on the connection between COVID and sustainable living */}
                <div className="p-3">
                <h2>Sustainable Living During COVID</h2>
                    <iframe width="500" height="320" src="https://www.youtube.com/embed/R1h1L6vj3BI"></iframe>
                </div>
            </div>

            <div id="info-container">
                <div id="stat-2" className="shadow p-4">
                    <h2>Proper Recycling</h2>
                    <img id="stat2" src={recyclePromo} alt="People advertising proper recycling" />
                    <p className="px-3">
                        <ul>
                        <li>Make recycling a collaborative effort where everyone in the family participates, enabling the most recycling of the right materials.</li>
                        <li>Recycling arrows on a container don’t necessarily mean it’s recyclable. Check with local program guidelines.</li>
                        <li>Make sure containers are clean enough when recycling them to avoid contaminating other materials.</li>
                        <li>Not all types of glass bottles and jars are recyclable. Make sure to check your jurisdiction and community’s recycling guidelines.</li>
                        <li>Don’t recycle items if you’re not sure, they won’t get sorted and will contaminate recyclable materials.</li>
                        </ul>
                    </p>
                    {/* <Link to="/"><button className="btn btn-main">Easy Recycling Guide</button></Link> */}
                </div>
                <div id="stat-3" className="shadow p-4">
                    <h2>Beyond Recycling</h2>
                    <img id="stat3" src={sustainableLiving} alt="Sustainable Living" />
                    <p className="px-3">
                        <ul>
                        <li>Get educated and stay updated on the latest news to make more informed decisions.</li>
                        <li>Limit waste by using reusable, eco-friendly products and reducing packaging.</li>
                        <li>Conserve water and energy at home during daily use.</li>
                        <li>Advocate for change and promote sustainable living in your personal and professional networks.</li>
                        <li>Use more eco-friendly methods of transportation such as walking, biking, public transportation or carpooling.</li>
                        </ul>
                    </p>
                    {/* <Link to="/"><button className="btn btn-main">Explore Business with Circular Economy</button></Link> */}
                </div>
            </div>
        </React.Fragment>
    );
}
