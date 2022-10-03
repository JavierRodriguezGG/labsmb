import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitalize, padNumber } from "../helpers/utils";
import axios from "axios";

export const Card = ({ url }) => {
  const [body, setBody] = useState({ id: null, name: null, image: null });

  useEffect(() => {
    getPokemonInfo(url);
  }, []);

  const getPokemonInfo = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setBody({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {body.id ? (
        <div className="card text-center bg-dark my-2">
          <div className="overflow">
            <img
              src={body.image}
              alt=""
              className="img-fluid "
              width="150"
            />
          </div>
          <div className="card-body text-light">
            <h4 className="card-title">{capitalize(body.name)}</h4>
            <p className="card-text text-secondary">#{padNumber(body.id, 3)}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Card;
