import { useState, useEffect } from "react";

/*
This search is powered by:
https://data.kingcounty.gov/Environment-Waste-Management/What-do-I-do-with-Recycling-options-in-King-County/zqwi-c5q3

API Endpoint: https://data.kingcounty.gov/resource/zqwi-c5q3.json
*/

const useSearch = options => {
    const [ locations, setLocations ] = useState([]);

    const apiEndpoint = "https://data.kingcounty.gov/resource/zqwi-c5q3.json";

    useEffect(() => {
        const updateSearch = async () => {
            console.log("Updating Search");

            let queries = {
                queryString: "?$$app_token=FvCSHEWqYptoOHMOprKBxoksc",
                add: function(type, value) {
                    this.queryString += `&${type}=${value}`;
                },
            }

            // Logic for any filtering of the queries
            if (options) {
                if (options.limit) {
                    queries.add("$limit", options.limit);
                } else {
                    // If no limit is set, default to 10 locations at a time
                    queries.add("$limit", 10);
                }

                if (options.zip) {
                    queries.add("$zip", options.zip);
                }
            }

            let data = await fetch(apiEndpoint + queries.queryString);
            data = await data.json();
            console.log(data);
            setLocations(data);
        }

        updateSearch();
    }, [ options ]);

    return locations;
};

export default useSearch;