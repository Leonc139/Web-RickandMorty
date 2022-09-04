import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const [locationData, setLocationData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let tempData = [];
    const sessionLocations = JSON.parse(
      sessionStorage.getItem("charLocations")
    );
    sessionLocations.forEach((item) => {
      if(tempData.indexOf(item.locations) < 0) {
        tempData.push(item.locations);
      }
    });
    setLocationData(tempData);
  }, []);

  const clickLocation = (location) => {
    let encoded = encodeURI(location);
    navigate("/location-detail?location="+ encoded);
  }

  return (
    <div className="d-flex" style={{ flexDirection: "column", alignItems: "center"  }}>
      <h2 className="mt-2">Locations</h2>
      {locationData.map((location, index) => {
        return (
          <div key={index} className="card col-6 col-sm-4" onClick={() => clickLocation(location)} style={{ width: "18rem", margin: "5px" }}>
            <div className="card-body">
              <div className="card-text" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                <div
                  className="col-6 col-sm-4"
                >
                  {location}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
