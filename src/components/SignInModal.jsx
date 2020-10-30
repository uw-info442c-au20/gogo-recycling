import React from "react";
import { fireauth, firebase } from "../config/firebase";

const SignInModal = () => {
    const signIn = provider => {
        switch (provider) {
            case "google":
                provider = new firebase.auth.GoogleAuthProvider();
                break;
            case "facebook":
                provider = new firebase.auth.FacebookAuthProvider();
                break;
            case "twitter":
                provider = new firebase.auth.TwitterAuthProvider();
                break;
            default:
                // Default to Google
                provider = new firebase.auth.GoogleAuthProvider();
        }
        fireauth.signInWithPopup(provider);
    };

    return (
        <section className="modal fade" id="signInModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title mx-auto">Sign In</h3>
                    </div>
                    <div className="modal-body">
                        <button
                            className="btn btn-info mb-2"
                            onClick={() => signIn("twitter")}
                            data-toggle="modal" data-target="#signInModal"
                        >
                            With Twitter
                        </button>
                        <br/>
                        <button
                            className="btn btn-success mb-2"
                            onClick={() => signIn("google")}
                            data-toggle="modal" data-target="#signInModal"
                        >
                            With Google
                        </button>
                        <br/>
                        <button
                            className="btn btn-primary mb-2"
                            onClick={() => signIn("facebook")}
                            data-toggle="modal" data-target="#signInModal"
                        >
                            With Facebook
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInModal;