import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CHARACTERS_API } from "../utils/constants";

const CharacterDetails = () => {
  const { id } = useParams();
  const [charDetails, setCharDetails] = useState(null);

  useEffect(() => {
    // console.log(charDetails);
    try {
      axios
        .get(`${CHARACTERS_API}/${id}`)
        .then((data) => {
          // console.log("data:", data.data);
          setCharDetails(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  let { image, origin, species, gender, status, name } = charDetails || {};
  // console.log(charDetails);
  return (
    <div className="container">
      <br />
      <Link to="/characters">
        <button type="button" className="btn btn-info" style={{ width: "100px", fontSize: "18px" }}>
          Back
        </button>
      </Link>
      {charDetails ? (
        <div>
          <h2 className="mt-3">{name}</h2>
          <hr />
          <div>
            <div className="text-center">
              <img src={image} className="rounded" alt={name} />
            </div>
            <ul className="list-group mb-3 mt-3">
              <li className="list-group-item">
                <strong>Origin:</strong> {origin.name}
              </li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">
                <strong>Species:</strong> {species}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {gender}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {status}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterDetails;
