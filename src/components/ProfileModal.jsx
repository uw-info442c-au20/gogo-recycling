import React from "react";
import { fireauth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import levelIcons  from "./LevelIcons";

const ProfileModal = ({ user }) => {
    const history = useHistory();

    return (
        <section className="modal fade" id="profileModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title mx-auto">Hello {user.displayName}</h3>
                    </div>
                    <div className="modal-body">
                        <h6>
                            You have {user.points} points
                            <br/>
                            Level: {user.level}
                            <br/>
                            <img
                                src={levelIcons[user.level]} alt="Icon represents level of user"
                                className="icon"
                            />
                        </h6>
                        <button
                            className="btn btn-main mb-2"
                            onClick={() => history.push(`/profile/${user.local.uid}`)}
                            data-toggle="modal" data-target="#profileModal"
                        >
                            Profile
                        </button>
                        <br/>
                        <button
                            className="btn btn-danger"
                            onClick={() => fireauth.signOut()}
                            data-toggle="modal" data-target="#profileModal"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileModal;