import { useState, useEffect } from "react";
import { storage } from "../config/firebase";

// This hook should only be used on a temporary modal that can be destroyed
const useStorage = files => {
    const [ progresses, setProgresses ] = useState(0);
    const [ error, setError ] = useState(null);
    const [ urls, setUrls ] = useState([]);

    useEffect(() => {
        if (files.length > 0) {
            for (let [i, file] of files.entries()) {
                const storageRef = storage.ref(`images/${file.name}`);
                storageRef
                    .put(file, { contentType: file.type })
                    .on("state_changed", snap => {
                        setProgresses(progresses => {
                            progresses[i] = (snap.bytesTransferred / snap.totalBytes) * 100;
                            return progresses;
                        });
                    }, (err) => {
                        setError(err);
                    }, async () => {
                        const url = await storageRef.getDownloadURL();
                        setUrls(urls => {
                            urls[i] = url;
                            return urls;
                        });
                    });
            }
        }
    }, [ files ]);

    return { progresses, urls, error };
}

export default useStorage;