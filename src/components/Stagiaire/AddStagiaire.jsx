import React, { useState } from "react";
import "./Stagiaire.css";
import { useDispatch } from "react-redux";
import { AjouterStagiaire } from "./../../redux/StagiaireSlice";
function AddStagiaire() {
  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    filiere: "",
    image: "",
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    console.log(userData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(AjouterStagiaire(userData));
    // Reset form after submission
    setUserData({ nom: "", prenom: "", filiere: "", image: "" });
  }
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Ajouter un stagiaire</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-elem">
            <label htmlFor="nom">Nom : </label>

            <input
              value={userData.nom}
              onChange={handleChange}
              type="text"
              name="nom"
              id="nom"
            />
          </div>
          <div className="form-elem">
            <label htmlFor="prenon">Prenon : </label>
            <input
              onChange={handleChange}
              value={userData.prenom}
              type="text"
              name="prenom"
              id="prenom"
            />
          </div>
          <div className="form-elem">
            <label htmlFor="filiere">filiere : </label>
            <input
              onChange={handleChange}
              value={userData.filiere}
              type="text"
              name="filiere"
              id="filiere"
            />
          </div>
          <div className="form-elem">
            <label htmlFor="image">image : </label>

            <input
              onChange={handleChange}
              type="url"
              name="image"
              id="image"
              placeholder="write the url of your image "
            />
          </div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddStagiaire;
