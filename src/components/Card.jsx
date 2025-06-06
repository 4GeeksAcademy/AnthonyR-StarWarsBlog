import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = (value) => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const isFavorite = store.favorites.some(
    (favorite) => favorite.name === value.name
  );

  return (
    <div
      className="card mx-2 text-white border border-secondary rounded "
      style={{
        minWidth: "18rem",
        background: "#1D1E1F",
        minHeight: value.minHeight || "21rem",
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/${value.imagePage}/${value.uid}.jpg`}
        className="card-img-top"
        alt={`Imagen de ${value.name}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755";
        }}
        onClick={() => navigate(`/${value.page}/${value.idx}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body rounded" style={{ background: "#1D1E1F" }}>
        <div className="d-flex justify-content-between align-items-center mb-3 mt-1">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/${value.page}/${value.idx}`)}
          >
            <strong>{value.name}</strong>
          </span>
          <i
            className="fa-solid fa-heart"
            style={{
              cursor: "pointer",
              color: isFavorite ? "#FF1744" : "white",
            }}
            onClick={() => {
              const favoriteEle = {
                name: value.name,
                page: value.page,
                idx: value.idx,
              };

              return dispatch({
                type: "set_Favorites",
                payload: favoriteEle,
              });
            }}
          ></i>
        </div>
        <div className="d-flex flex-column">
          {value.data1 && <span>{value.data1.toUpperCase()}</span>}
          {value.data2 && <span>{value.data2.toUpperCase()}</span>}
          {value.data3 && <span>{value.data3.toUpperCase()}</span>}
        </div>
      </div>
    </div>
  );
};
