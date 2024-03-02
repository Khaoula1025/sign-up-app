import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function DetailStagiaire() {
  const stagieres = useSelector((state) => state.stagiaires);
  const { nom } = useParams();
  const findStagiaire = stagieres.find((student) => student.nom === nom);
  return (
    <div>
      {!findStagiaire ? (
        <h2>no info found about {nom} </h2>
      ) : (
        <div className="person-card">
          <img src={findStagiaire.image} alt="" />
          <h3 className="card-title">
            {findStagiaire.nom} &nbsp;
            {findStagiaire.prenom}
          </h3>
          <p>filiere : {findStagiaire.filiere}</p>
        </div>
      )}
    </div>
  );
}

export default DetailStagiaire;
