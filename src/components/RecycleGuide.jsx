import React from "react";

const RecycleGuide = () => {
    return (
        <main>
            <h1 className="p-4">Recycling Guide</h1>
            <div className="search py-3 px-4">
                <span className="pr-3">I want to recycle</span>
                <input type="text" className="input-item" placeholder="shampoo bottles" />
                <img className="pl-2 mb-1" src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg" alt="tilted magnifying glass"></img>
            </div>
            <div className="results p-5">
                <h1 className="pb-2">Recycling Locations</h1>
                <div className="recycle-result p-3">
                    <div id="info-1">
                        <h2>Bob's Recycling</h2>
                        <a href="">bobrecyling.com<span role="img" aria-label="up-right arrow"> ↗</span></a>
                    </div>
                    <div id="info-2">
                        <p className="mb-1">(354)-242-4222</p>
                        <p className="mb-1">1242st SW Ave Lane</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RecycleGuide;