import React, { useState } from "react";
import { useEffect } from "react";

import useSearch from "../hooks/useSearch";
import Copyright from "./Copyright";

const RecycleGuide = () => {
    const [options, setOptions] = useState({});

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
    };

    return (
        <main id="recycling-guide">
            <div>
                <h1 className="p-4">Recycling Guide</h1>
                <div className="search p-3 px-4">
                    <span className="pr-3">I want to recycle at</span>
                    <input type="text" className="input-item" placeholder="Zipcode" defaultValue={options.zip} onChange={updateZip} />
                    <img className="pl-2 mb-1" src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg" alt="tilted magnifying glass"></img>
                </div>
                <div className="results pb-5">
                    <h1 className="pt-5 pb-3">Recycling Locations</h1>
                    {locations.length > 0 ? locations.map((location, index) => {
                        const {
                            provider_name, provider_address, provider_url, phone, providerid
                        } = location;

                        return (
                            <div className="recycle-result p-3 mt-3" key={`${providerid} - ${index}`}>
                                <div id="info-1">
                                    <h2>{provider_name}</h2>
                                    <a
                                        href={provider_url ? provider_url.url : ""}
                                        target="_blank" rel="noreferrer"
                                    >
                                        {provider_url ? provider_url.url : "No Url :("}
                                        <span role="img" aria-label="up-right arrow"> ↗</span>
                                    </a>
                                </div>
                                <div id="info-2">
                                    <p className="mb-1">{phone}</p>
                                    <p className="mb-1">{provider_address}</p>
                                </div>
                            </div>
                        );
                    }) : <p>No Locations Found</p>}
                </div>
            </div>

            <Copyright />
        </main>
    );
};

export default RecycleGuide;