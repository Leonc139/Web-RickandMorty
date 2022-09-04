import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Character from "../components/Character/Character";

const CharacterLocation = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const location = searchParams.get("location");
    // console.log("params:", location);
    const sessionLocations = JSON.parse(
      sessionStorage.getItem("charLocations")
    );
    const tempData = sessionLocations.filter((item) => {
      return item.locations === location;
    });
    setCharacters(tempData);
    // console.log(tempData.length);
  }, [searchParams]);
  return (
    <div className="container">
      <Link to="/locations">
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "100px", fontSize: "18px", margin: "10px 0" }}
        >
          Back
        </button>
      </Link>
      <div className="row">
        {characters.map((character, index) => {
          return (
            <div
              className="col-6 col-sm-4"
              style={{ display: "flex" }}
              key={index}
            >
              <Character character={character.charDetail} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterLocation;
