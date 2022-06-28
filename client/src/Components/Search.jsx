import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import orders from "../Functions aux/orderby";
import filterby from "../Functions aux/filterby";
import ConteinersRecipes from "./ConteinerRecipes";
import {allKinds, searchbyname } from "../Actions/Actions";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "./Loanding";
import "./estilos/Home.css";

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let recetas = useSelector((state) => state.search);
  let kinds = useSelector((state) => state.kinds);
  let [recipes, setRecipes] = useState(recetas);
  let [filtrados, setfiltrados] = useState(recetas);
  const [current, setcurrent] = useState(0);
  const [search, setsearch] = useState("");
  let { name } = useParams();
  let options = [
    { value: "All Recipes", label: "All recipes" },
    { value: "creados", label: "Creados" },
  ];
  kinds.map((kind) =>
    options.push({
      value: kind.Name,
      label: kind.Name,
    })
  );

  useEffect(() => {
    dispatch(searchbyname(name));
    dispatch(allKinds());
  }, [dispatch, name]);
  let arr = [];
  let items = () => {
    if (filtrados.length) {
      if (current > 0 && filtrados.length < 9) {
        setcurrent(0);
      }
      arr = filtrados;
    } else if (recipes.length) {
      arr = recipes;
    } else {
      arr = recetas;
    }
    return arr.slice(current, current + 9);
  };
  const next = () => {
    if (arr.length > current + 9) {
      setcurrent(current + 9);
    } else return;
  };
  const prev = () => {
    if (!current <= 0) {
      setcurrent(current - 9);
    }
  };

  const order = (e) => {
    if (filtrados.length) {
      setRecipes(orders(filtrados, e.target.value));
    }
    let ordenado = orders(recetas, e.target.value);
    setRecipes(ordenado);
  };

  const filterbytype = ({ value }) => {
    let filter = filterby(recetas, value);
    return setfiltrados(filter);
  };

  const searcher = () => {
    navigate(`/search/${search}`);
  };
  const reset = () => {
    navigate("/home");
  };

  if (!recetas.length) {
    return (
      <div className="conteiner-home">
        <Loading></Loading>
      </div>
    );
  } else if (items().length) {
    return (
      <div className="conteiner-home" key={5}>
        <div className="filtros" key={6}>
          <button className="boton" onClick={() => prev()}>
            <span>Prev</span>
          </button>
          <button className="boton" onClick={() => next()}>
            <span>Next</span>
          </button>

          <input
            className="input"
            type="submit"
            value="name ascent"
            onClick={order}
          />
          <input
            className="input"
            type="submit"
            value="name descent"
            onClick={order}
          />
          <input
            className="input"
            type="submit"
            value="healthScore ascent"
            onClick={order}
          />
          <input
            className="input"
            type="submit"
            value="healthScore descent"
            onClick={order}
          />
          <div>
            <input
              value={search}
              type="text"
              onChange={(e) => setsearch(e.target.value)}
            />
            <input
              className="input"
              type="submit"
              value="search"
              onClick={searcher}
            />
            <input
              className="input"
              type="submit"
              value="Back to Home"
              onClick={() => reset()}
            />
          </div>

          <select className="select" onChange={(e) => filterbytype(e.target)}>
            {options.map((k) => {
              return (
                <>
                  <option value={k.value}>{k.label} </option>
                </>
              );
            })}
          </select>
          <Link className="link" to={"/create"}>
            Add Recipe
          </Link>
        </div>
        <div>
          <ConteinersRecipes recipes={items()} />
        </div>
      </div>
    );
  }
}

export default Search;
