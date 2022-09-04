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
          const charLocation = JSON.parse(
            sessionStorage.getItem("charLocations")
          );
          const charData = charLocation.find((character) => {
            return character.charDetail.id === data.data.id;
          });
          data.data.locationChar = charData
            ? charData.locations
            : "Tidak ada location";
          setCharDetails(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  const save = () => {
    const locationChar = document.getElementById("inputLocation").value;
    if (locationChar === "") {
      alert("Input Kosong");
    }

    let charLocation = sessionStorage.getItem("charLocations");
    if (charLocation === null) {
      // console.log("masuk if");
      charLocation = [
        {
          charDetail: charDetails,
          locations: locationChar,
        },
      ];
    } else {
      // console.log("masuk else");
      charLocation = JSON.parse(charLocation);
      const characterData = charLocation.find((character) => {
        return character.charDetail.id === charDetails.id;
      });
      if (!!characterData) {
        characterData.locations = locationChar;
      } else {
        charLocation.push({
          charDetail: charDetails,
          locations: locationChar,
        });
      }
    }
    sessionStorage.setItem("charLocations", JSON.stringify(charLocation));
    window.location.reload();
    console.log("location:", charLocation);
  };

  let { image, origin, species, gender, status, name, locationChar } =
    charDetails || {};
  // console.log(charDetails);
  return (
    <div className="container">
      <br />
      <Link to="/characters">
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "100px", fontSize: "18px" }}
        >
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
              <li className="list-group-item">
                <strong>Species:</strong> {species}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {gender}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {status}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong>
                <p>{locationChar}</p>
                <input type="text" id="inputLocation" />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ marginLeft: "10px", marginTop: "-3px" }}
                  onClick={save}
                >
                  Save
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterDetails;
