import React from "react";
import useFectch from "../hooks/useFectch";

const CardResident = ({ url }) => {
  const resident = useFectch(url);

  console.log(resident);

  return (
    <article className="card">
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className={`status-card status-${resident?.status}`}>{resident?.status}</div>
      </header>
      <div>
        <h3>{resident?.name}</h3>
        <div className="card-resident">
          <span>Species: {resident?.species}</span>
          <span>Origin: {resident?.origin.name}</span>
          <span>Eppisodes where appear: {resident?.episode.length}</span>
        </div>
      </div>
    </article>
  );
};

export default CardResident;
