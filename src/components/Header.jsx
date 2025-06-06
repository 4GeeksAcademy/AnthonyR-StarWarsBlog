import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { Searching } from "./Searching";

export const Header = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites;
  const [searching, setSearching] = useState(false);

  const handleOnBlur = () => {
    setSearching(false);
  };

  return (
    <>
      <header
        className="d-flex p-4"
        style={{
          height: "15%",
          width: "100%",
          borderBottom: "1px solid #48494a",
        }}
      >
        <div style={{ width: "33.33%" }}>
          <ul className="nav">
            <li className="nav-item m-2">
              <a
                className="nav-link p-0"
                href="https://www.tiktok.com/@starwars"
                target="blank"
              >
                <i
                  className="fa-brands fa-tiktok text-white fs-5"
                  style={{ fontWeight: "100" }}
                ></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link p-0"
                href="https://www.instagram.com/starwars/"
                target="blank"
              >
                <i className="fa-brands fa-instagram text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link p-0"
                href="https://twitter.com/starwars"
                target="blank"
              >
                <i className="fa-brands fa-x-twitter text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link p-0"
                href="https://www.facebook.com/StarWars"
                target="blank"
              >
                <i className="fa-brands fa-facebook text-white fs-5"></i>
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                className="nav-link p-0"
                href="https://www.youtube.com/user/starwars"
                target="blank"
              >
                <i className="fa-brands fa-youtube text-white fs-5"></i>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ width: "33.33%" }}
        >
          <a href="#">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              alt="StarWars logo"
              style={{ height: "100%", width: "100%" }}
              onClick={() => navigate("/")}
            />
          </a>
        </div>
        <div
          className="d-flex justify-content-end align-items-center text-white"
          style={{ height: "fit-content", width: "33.33%" }}
        >
          <div className="d-flex justify-content-between align-items-center m-2">
            <i
              className="fa-solid fa-magnifying-glass m-2"
              style={{ cursor: "pointer" }}
              onClick={() => setSearching(true)}
            ></i>
            {searching ? (
              <Searching handleOnBlur={handleOnBlur} />
            ) : (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setSearching(true)}
              >
                SEARCH
              </span>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <select
              className="form-select form-select-sm"
              style={{ cursor: "pointer" }}
              aria-label="Small select example"
              defaultValue="default"
              onChange={(e) => {
                const selected = favorites[e.target.value];
                if (selected) {
                  navigate(`/${selected.page}/${selected.idx}`);
                }
              }}
            >
              <option value="default">Favorites {favorites.length}</option>
              {favorites &&
                favorites.map((favorite, idx) => {
                  return (
                    <option key={idx} value={idx}>
                      {favorite.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </header>
    </>
  );
};
