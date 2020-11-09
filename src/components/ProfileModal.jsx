import React from "react";
import { fireauth } from "../config/firebase";
import { useHistory } from "react-router-dom";

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
                        <button
                            className="btn btn-info mb-2"
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