import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
    <h1>Actors Page</h1>
    {actors.map((actor) => 
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <li>
          {actor.movies}
          </li>
      </div>
    )}
  </div>;
}

export default Actors;
