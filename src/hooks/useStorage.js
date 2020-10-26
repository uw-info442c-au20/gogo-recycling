import { useState, useEffect } from "react";
import { storage } from "../config/firebase";

// This hook should only be used on a temporary modal that can be destroyed
const useStorage = files => {
    const [ progresses, setProgresses ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ urls, setUrls ] = useState([]);

    useEffect(() => {
        if (files && files.length > 0) {
            // We add a storage reference/listener for each file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const storageRef = storage.ref(`images/${Date.now()}-${file.name}`);
                storageRef
                    .put(file, { contentType: file.type })
                    .on("state_changed", snap => {
                        setProgresses(progresses => {
                            let newProgresses = progresses.slice();
                            newProgresses[i] = (snap.bytesTransferred / snap.totalBytes) * 100;
                            return newProgresses;
                        });
                    }, (err) => {
                        setError(err);
                    }, async () => {
                        const url = await storageRef.getDownloadURL();
                        setUrls(urls => {
                            let newURLS = urls.slice();
                            newURLS[i] = url;
                            return newURLS;
                        });
                    });
            }
        }
    }, [ files ]);

    return { progresses, urls, error };
}

export default useStorage;