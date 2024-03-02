import React from "react";
import "./Stagiaire.css";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "./../Header/Header.css";

function Stagiaire({ stagiere }) {
 // const { nom } = useParams();
  // function handleClick() {
  //   return console.log("i'm clicked", nom);
  // }
  return (
    <div className="person-card">
      <Link to={`/${stagiere.nom}`} className="linkscolors">
        <img src={stagiere.image} alt="" />
        <h3 className="card-title">
          {stagiere.nom} &nbsp;
          {stagiere.prenom}
        </h3>
      </Link>
    </div>
  );
}

export default Stagiaire;
