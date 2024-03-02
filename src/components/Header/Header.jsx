import React from "react";
import { Link } from "react-router-dom";
import ListStagiaire from "../Stagiaire/ListStagiaire";
import AddStagiaire from "../Stagiaire/AddStagiaire";
import "./Header.css";
function Header() {
  return (
    <div className="navbar">
      <div className="elem">
        <Link to="/" className="links">
          liste des Stagiaires
        </Link>
      </div>
      <div className="elem">
        <Link to="/add" className="links">
          Ajouter un Stagiaire
        </Link>
      </div>
    </div>
  );
}

export default Header;
