import React from "react";
import { useState } from "react";
import useStorage from "../hooks/useStorage";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const CreatePost = () => {
    const [ state, setState ] = useState("SELECT");
    const [ progress, setProgress ] = useState(0);
    const [ files, setFiles ] = useState([]);
    const [ selected, setSelected ] = useState([]);
    const { progresses, urls, error } = useStorage(files);

    const history = useHistory();

    // Set how far the uploading has progressed
    useEffect(() => {
        if (progresses.length > 0) {
            setProgress(progresses.reduce(
                (total, value) => { return total + value / files.length }, 0)
            );
        }
    }, [ files, progresses ])

    // Handle when an upload finishes
    useEffect(() => {
        if (progress >= 100) {
            setState("FINISH");
            // Do something to create post then redirect here
        }
    }, [ progress ]);

    // Handle an upload error
    useEffect(() => {
        if (error) {
            // If there's an error in uploading
            throw error;
        }
    })

    const selectFiles = event => {
        let selected = event.target.files;
        if (selected && selected.length > 0) {
            setSelected(selected);
        } else {
            // Error message or something
        }
    };

    const submitPost = event => {
        event.preventDefault();
        try {
            setFiles(selected);
            setState("UPLOAD");
        } catch (error) {

        }
    };

    return (
        <main>
            <h1>Create a post</h1>
            {state === "UPLOAD" && <h2>{progress}%</h2>}
            {state === "FINISH" && <h2>Finished Uploading</h2>}
            <form onSubmit={submitPost} style={{ width: "70%" }} className="mx-auto">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input
                            className="custom-file-input"
                            id="fileInput" type="file"
                            onChange={selectFiles}
                            accept="image/*" multiple
                        />
                        <label className="custom-file-label" htmlFor="fileInput">Choose files</label>
                    </div>
                </div>
                <button
                    type="submit" className="btn btn-primary"
                    disabled={(state !== "UPLOAD").toString()}
                >
                    Post
                </button>
            </form>
        </main>
    );
};

export default CreatePost;