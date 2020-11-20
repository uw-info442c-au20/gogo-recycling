import React from 'react';
import { Link } from "react-router-dom";

import recyclePromo from '../resources/home-banner/recycle-promo.jpg';
import cycleEconomy from "../resources/home-banner/cycle-economy.png";

export default function CenteredGrid() {
    return (
        <main>
            {/* <h1 id="banner" className="display-1 font-weight-bold">Who We Are</h1> */}
            <div className="container-lg">
                {/* <div className="row">
                    <div className="m-auto shadow my-4" style={{ minWidth: "250px" }}>
                        <div>
                            <img style={{ width: "100%" }} src={mask} alt="masks covering the land of Switzerland"/>
                        </div>
                    </div>
                    <div className="col my-4">
                        <p style={{ minWidth: "310px" }} className="shadow p-2 mx-auto">
                            BACK GROUND INFO WHAT IS happening due to covid
                            Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                            Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                            Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                            line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col shadow my-4">
                        {/* inspiring quote emphasizing buyers impact the movement of business */}
                        <blockquote>
                            <h2>
                                “Recycling, packaging, businesses are changing all of those things because that’s what consumers want.”
                            </h2>
                            <h4>&mdash;Jerry Greenfield, Co-founder of Ben & Jerry’s Ice Cream&mdash;</h4>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col my-4">
                        <div className="shadow p-4">
                            <h2>First Step: Proper Recycling</h2>
                            <img style={{ minWidth: "250px", width: "85%" }} id="stat2" src={recyclePromo} alt="People advertising proper recycling" />
                            <p className="px-3">
                                TALK ABOUT IMPORTANCE ABOUT RECYCLING
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                                in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10
                                32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                                book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
                                is reproduced below for those interested. Sections 1.10.32 and 1.10 33 from "de Finibus Bonorum et Malorum" by Cicero
                                are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
                                Rackham.
                            </p>
                            <Link className="btn btn-warning btn-effect" to="/">
                                Easy Recycling Guide
                            </Link>
                        </div>
                    </div>
                    <div className="col my-4">
                        <div className="shadow p-4">
                            <h2>Beyond Recycling</h2>
                            <img style={{ minWidth: "250px", width: "85%" }} id="stat3" src={cycleEconomy} alt="Circular Economy" />
                            <p className="px-3">
                                INTRODUCE BUSINESS THAT PRACTICE CIRCULAR ECONOMY
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                                Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.
                                33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English
                                versions from the 1914 translation by H. Rackham.
                            </p>
                            <Link className="btn btn-warning btn-effect" to="/">
                                Explore Business with Circular Economy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
