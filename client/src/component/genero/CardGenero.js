import React from "react";

export const CardGenero = (props) => {


  return (

      <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Genero: {props.genero}</h5>
          <p class="card-text">Detalles: {props.detalles}</p>
          <a href="#" class="btn btn-primary">Ver mas...</a>
        </div>
      </div>
  )
}