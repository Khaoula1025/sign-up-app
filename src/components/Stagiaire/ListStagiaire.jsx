import React, { useEffect, useState } from "react";
import Stagiaire from "./Stagiaire";
import "./ListStagiaire.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./../../redux/StagiaireSlice";

function ListStagiaire() {
  const [students, setStudents] = useState([]);
  const stagieres = useSelector((state) => state.stagiaires);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data only if it hasn't been fetched yet
    if (stagieres.length === 0) {
      dispatch(fetchData());
    }
    setStudents(stagieres);
  }, [dispatch, stagieres]);

  return (
    <div className="cards-container">
      {students.length > 0 ? (
        students.map((student) => {
          return <Stagiaire stagiere={student} key={student.id} />;
        })
      ) : (
        <h3>no data found</h3>
      )}
    </div>
  );
}

export default ListStagiaire;
