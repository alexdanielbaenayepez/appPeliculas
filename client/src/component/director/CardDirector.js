import React from "react";
import {UseFetch} from "../../fetch/fetch";

export const CardDirector = (props) => {
  const {data} = UseFetch('http://localhost:3001/director');
  const director = data;

  return (
      <div>
        {data?.map((data) =>
        <div className="card" style={{width: "18rem;"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Director: {data.nombre}</h5>
            <p className="card-text">Created: {data.fechaCreacion}</p>
            <p className="card-text">Updated: {data.fechaActualizacion}</p>
            <ul>

            </ul>
            <a href="#" className="btn btn-primary">mas...</a>
          </div>
        </div>
          )}
      </div>
  )
}