import { Context } from "../Context";
import useStorage from "../hooks/useStorage";
import { useHistory } from "react-router-dom";
import { firestore, firebase } from "../config/firebase";
import React, { useEffect, useState, useContext } from "react";

const CreatePostModal = ({ toggleModal }) => {
    // State for form fields
    const [ title, setTitle ] = useState("");
    const [ files, setFiles ] = useState([]);
    const [ description, setDescription ] = useState("");
    const [ isAnonymous, setIsAnonymous ] = useState(false);

    // State to keep track of the current state of the upload
    const [ progress, setProgress ] = useState(0);
    // Indicates the current step of the process
    const [ state, setState ] = useState("SELECT");
    const [ selected, setSelected ] = useState([]);
    const { progresses, urls } = useStorage(files);

    const history = useHistory();
    const { user } = useContext(Context);

    const selectFiles = event => {
        let selected = event.target.files;
        if (selected && selected.length > 0) {
            setSelected(selected);
        }
    };

    const submitPost = event => {
        event.preventDefault();
        if (selected && selected.length > 0) {
            setFiles(selected);
            setState("UPLOAD");
        } else {
            setState("FINISH");
        }
    };

    const resetModal = () => {
        setIsAnonymous(false);
        setState("SELECT");
        setDescription("");
        setSelected([]);
        setProgress(0);
        setFiles([]);
        setTitle("");
    }

    // Set how far the uploading has progressed
    useEffect(() => {
        if (progresses.length > 0 && files.length > 0) {
            setProgress(progresses.reduce(
                (total, value) => { return total + value / files.length }, 0)
            );
        }
    }, [ files, progresses ]);

    // Handle different states
    useEffect(() => {
        const createPost = async () => {
            const post = {
                title,
                description,
                images: urls,
                isAnonymous,
                likes: [],
                comments: [],
                timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
                user: firestore.collection("users").doc(user.local.uid)
            };
            await firestore.collection("posts").add(post);
        };

        if (state === "FINISH") {
            createPost();
            toggleModal();
            resetModal();
        }
    }, [ state, urls, user, history, title, description, isAnonymous, toggleModal ]);

    // Handle when an upload finishes
    useEffect(() => {
        // urls.length === files.length doesn't work
        if (
            progress >= 100 &&
            urls.reduce(total => { return total + 1 }, 0) === files.length
        ) {
            setState("FINISH");
        }

    }, [ progress, urls, files ]);

    return (
        <section className="modal fade" id="createPostModal">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="mx-auto">
                            Create a post
                        </h1>
                        <i
                            className="fas fa-times-circle fa-lg text-danger"
                            style={{
                                position: "absolute", cursor: "pointer",
                                right: "15px", top: "15px"
                            }} onClick={toggleModal}
                        />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={submitPost} className="mx-auto w-75">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text" className="form-control"
                                    id="title" placeholder="Type your title"
                                    value={title} onChange={event => {
                                        setTitle(event.target.value);
                                    }} required disabled={state !== "SELECT"}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control" name="description"
                                    id="description" cols="30" rows="10"
                                    placeholder="Type your description"
                                    value={description} onChange={event => {
                                        setDescription(event.target.value);
                                    }} required disabled={state !== "SELECT"}
                                />
                            </div>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        className="custom-file-input"
                                        id="fileInput" type="file"
                                        onChange={selectFiles}
                                        accept="image/*" multiple
                                        disabled={state !== "SELECT"}
                                    />
                                    <label className="custom-file-label" htmlFor="fileInput">
                                        {selected.length > 0 ?
                                            `You have selected ${selected.length} file(s)` :
                                            "Choose files"
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input" type="checkbox" id="isAnonymous"
                                        checked={isAnonymous} onChange={event => {
                                            setIsAnonymous(event.target.checked);
                                        }} disabled={state !== "SELECT"}
                                    />
                                    <label className="form-check-label" htmlFor="isAnonymous">
                                        Post Anonymously
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit" className="btn btn-primary mt-4"
                                disabled={(state !== "SELECT") || !user}
                            >
                                Create Your Post!
                            </button>
                            {!user && <p>Please login to create a post</p>}
                        </form>
                        {state !== "SELECT" &&
                        <div className="progress mt-3">
                            <div
                                className="progress-bar progress-bar-striped
                                    progress-bar-animated bg-success"
                                role="progressbar" aria-valuenow={progress} aria-valuemin="0"
                                aria-valuemax="100" style={{ width: `${progress}%` }}
                            >
                                    {progress.toFixed(0)}%
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatePostModal;