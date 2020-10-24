import { Context } from "../Context";
import useStorage from "../hooks/useStorage";
import { useHistory } from "react-router-dom";
import { firestore, firebase } from "../config/firebase";
import React, { useEffect, useState, useContext } from "react";

const CreatePost = () => {
    const [ title, setTitle ] = useState("");
    const [ files, setFiles ] = useState([]);
    const [ progress, setProgress ] = useState(0);
    const [ state, setState ] = useState("SELECT");
    const [ selected, setSelected ] = useState([]);
    const [ description, setDescription ] = useState("");
    const { progresses, urls } = useStorage(files);
    const [ isAnonymous, setIsAnonymous ] = useState(false);

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

    // Set how far the uploading has progressed
    useEffect(() => {
        if (progresses.length > 0) {
            setProgress(progresses.reduce(
                (total, value) => { return total + value / files.length }, 0)
            );
        }
    }, [ files, progresses ]);

    // Handle different states
    useEffect(() => {
        const createPost = async () => {
            await firestore.collection("posts").add({
                title,
                description,
                images: urls,
                isAnonymous,
                likes: [],
                comments: [],
                timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
                user: firestore.collection("users").doc(user.local.uid)
            });
        };

        if (state === "FINISH") {
            createPost();
            history.push("/");
        }
    }, [ state, urls, user, history, title, description, isAnonymous ]);

    // Handle when an upload finishes
    useEffect(() => {
        // Reduce is required b/c something weird w/ firebase :(
        // urls.length === files.length doesn't work
        if (progress >= 100 && urls.reduce(total => { return total + 1 }, 0) === files.length) {
            setState("FINISH");
        }
    }, [ progress, urls, files ]);

    return (
        <main>
            <h1>Create a post</h1>
            <form onSubmit={submitPost} style={{ width: "70%" }} className="mx-auto">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text" className="form-control"
                        id="title" placeholder="Type your title"
                        value={title} onChange={event => {
                            setTitle(event.target.value);
                        }} required
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
                        }} required
                    />
                </div>
                <div className="input-group">
                    <div className="custom-file">
                        <input
                            className="custom-file-input"
                            id="fileInput" type="file"
                            onChange={selectFiles}
                            accept="image/*" multiple
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
                            value={isAnonymous} onChange={event => {
                                setIsAnonymous(event.target.value);
                            }}
                        />
                        <label className="form-check-label" htmlFor="isAnonymous">
                            Post Anonymously
                        </label>
                    </div>
                </div>
                <button
                    type="submit" className="btn btn-primary mt-4"
                    disabled={state !== "SELECT"}
                >
                    Create Your Post!
                </button>
                {state === "UPLOAD" &&
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
            </form>
        </main>
    );
};

export default CreatePost;