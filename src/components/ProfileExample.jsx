import React from "react";
import manRecycling from '../resources/man-recycling.jpg';

const ProfileExample = () => {
    return (
        <main>
            <div className="p-4 profile-info">
                <div className="profile-img">
                    <img className="pb-1" src="https://www.flaticon.com/svg/static/icons/svg/3700/3700566.svg" alt="diagonal mark over the word 'GMO'" />
                    {/* Potential Badge */}
                    <p>Busy Battling GMOs</p>
                </div>
                <div className="profile-text pl-5">
                    <div className="profile-text2">
                        <h1 className="mb-1">Person's username</h1>
                        {/* Follow button if possible*/}
                        <button className="btn ml-3"><img src="https://www.flaticon.com/svg/static/icons/svg/983/983886.svg" alt="person behind a plus sign" aria-label="Follow"></img></button>
                    </div>
                    <p className="mb-1">Hi this is an example short bio</p>
                    <p className="mb-0"><span className="post-amount">66</span> posts</p>
                </div>
            </div>
            {/* Use modal to display extra info */}
            <div className="profile-posts pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={manRecycling} />
                        </div>
                        <div className="col-sm">
                            <img src={manRecycling} />
                        </div>
                        <div className="col-sm">
                            <img src={manRecycling} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfileExample;