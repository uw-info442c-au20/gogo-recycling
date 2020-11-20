import React, { useState } from "react";
import { useEffect } from "react";

import useSearch from "../hooks/useSearch";

const Find = () => {
    const [ options, setOptions ] = useState({});

    const { locations } = useSearch(options);

    // Set default options
    useEffect(() => {
        setOptions({
            zip: "98275"
        });
    }, []);

    const updateZip = event => {
        let zip = event.target.value;
        if (zip.length === 5) {
            setOptions(options => {
                let newOptions = { ...options };
                newOptions.zip = zip;
                return newOptions;
            });
        }
    }

    return (
        <main>
            <h1>Find a Recycling Center</h1>
            You will be able to search up nearby recycling places here
            <br/>
            <label>
                Zip Code
                <input
                    type="text" pattern="[0-9]*" defaultValue={options.zip} onChange={updateZip}
                />
            </label>
            <br/>
            <ol>
                {locations.length > 0 ? locations.map(location => {
                    return (
                        <>
                            <li>
                                Provider: {location.provider_name}
                                <br/>
                                Address: {location.provider_address}
                                <br/>
                                URL: {location.provider_url ? location.provider_url.url : "No URL"}
                            </li>
                            <hr/>
                        </>
                    );
                }) : <li>No Locations Found</li>}
            </ol>
        </main>
    );
};

export default Find;