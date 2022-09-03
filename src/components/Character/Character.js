import React from "react";
import "./Character.css";
import { useNavigate } from "react-router-dom";

const Character = ({ character }) => {
  const { name, image, id } = character;
  const navigate = useNavigate();
  // const { url } = useLocation();
  return (
    <div className="card mb-3" onClick={() => navigate(`/characters/${id}`)}>
      <img className="card-img-top" src={image} alt={name} style={{ width: "100%", height: "100%" }} />
      <div className="card-block">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Character;
