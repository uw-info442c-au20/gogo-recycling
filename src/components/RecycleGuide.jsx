import React, { useState } from "react";
import { useEffect } from "react";

import useSearch from "../hooks/useSearch";
import Copyright from "./Copyright";

const RecycleGuide = () => {
  const [options, setOptions] = useState({});

  const { locations } = useSearch(options);

  const materialSet = new Set();

  let filteredLocations = locations.slice();

  // Set default options
  useEffect(() => {
    setOptions({
      zip: "",
      city: "",
      material: "",
    });
  }, []);

  const updateZipOrCity = (event) => {
    let input = event.target.value;
    if (input.length === 5 && !isNaN(input)) {
      setOptions((options) => {
        let newOptions = { ...options };
        newOptions.zip = input;
        newOptions.city = "";
        newOptions.material = "";
        return newOptions;
      });
    } else {
      setOptions((options) => {
        let newOptions = { ...options };
        newOptions.city = input;
        newOptions.zip = "";
        newOptions.material = "";
        return newOptions;
      });
    }
  };

  const updateMaterialSet = () => {
    materialSet.clear();
    locations.forEach((location) => {
      if (!materialSet.has(location.material_handled)) {
        materialSet.add(location.material_handled);
      }
    });
  };

  const onDropdownSelected = (event) => {
    let input = event.target.value;
    setOptions((options) => {
      let newOptions = { ...options };
      newOptions.material = input;
      return newOptions;
    });
  };

  const filterLocations = () => {
    if (options.material) {
      filteredLocations = locations.filter(
        (location) => location.material_handled === options.material
      );
    }
  };

  return (
    <main id="recycling-guide">
      <div>
        <h1 className="p-4">Recycling Guide</h1>
        <div className="search p-3 px-4">
          <span className="pr-3">I want to recycle at</span>
          <input
            type="text"
            className="input-item"
            placeholder="Zipcode or City"
            onChange={updateZipOrCity}
          />
          <img
            className="pl-2 mb-1"
            src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg"
            alt="tilted magnifying glass"
          />
        </div>
        {locations.length > 0 && (options.zip !== "" || options.city !== "") && (
          <div className="search p-3 px-4">
            <span className="pr-3">Filter by material </span>
            {updateMaterialSet()}
            <select onChange={onDropdownSelected}>
              <option value="">All materials</option>
              {Array.from(materialSet)
                .sort()
                .map((material, key) => {
                  return (
                    <option key={key} value={material}>
                      {material}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
        <div className="results pb-5">
          <h1 className="pt-5 pb-3">Recycling Locations</h1>
          {filterLocations()}
          {filteredLocations.length > 0 &&
          (options.zip !== "" || options.city !== "") ? (
            filteredLocations.map((location, index) => {
              const {
                provider_name,
                provider_address,
                provider_url,
                phone,
                providerid,
              } = location;
              return (
                <div
                  className="recycle-result p-3 mt-3"
                  key={`${providerid} - ${index}`}
                >
                  <div id="info-1" className="text-left">
                    <h2>{provider_name}</h2>
                    {provider_url ? (
                      <a
                        href={provider_url.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {provider_url.url}
                        <span role="img" aria-label="up-right arrow">
                          {" "}
                          ↗
                        </span>
                      </a>
                    ) : (
                      <p>No URL :(</p>
                    )}
                  </div>
                  <div id="info-2">
                    <p className="mb-1">{phone}</p>
                    <p className="mb-1">{provider_address}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Locations Found</p>
          )}
        </div>
      </div>
      <Copyright />
    </main>
  );
};

export default RecycleGuide;
