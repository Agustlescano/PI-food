import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import orders from "../Functions aux/orderby";
import filterby from "../Functions aux/filterby";
import ConteinersRecipes from "./ConteinerRecipes";
import { allRecipes, allKinds, reset } from "../Actions/Actions";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loanding";
import "./estilos/Home.css";
//Importamos las funciones necesarias para el funcionamiento del componente

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let recetas = useSelector((state) => state.recipes);
  let kinds = useSelector((state) => state.kinds);
  let [recipes, setRecipes] = useState(recetas);
  let [filtrados, setfiltrados] = useState(recetas);
  const [current, setcurrent] = useState(0);
  const [search, setsearch] = useState("");
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
  //establecemos variables que miren al estado global y establecemos estados locales para el componente

  useEffect(() => {
    dispatch(allRecipes());
    dispatch(allKinds());
  }, [dispatch]);
  //useEffect que se ejecuta al cargar el componente y al cambiar dispatch
  let arr = [];
  //Arreglo que posteriormente usara para establecer los items a mostrar
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
  //Esta funcion carga de items al arreglo
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
  //Establecemos una funcion para el paginado
  const order = (e) => {
    if (filtrados.length) {
      setRecipes(orders(filtrados, e.target.value));
    }
    let ordenado = orders(recetas, e.target.value);
    setRecipes(ordenado);
  };
  //Funcion de ordenado, que llama a una funcion modularizada para que el codigo este mas limpio

  const filterbytype = ({ value }) => {
    let filter;
    filter = filterby(recetas, value);
    console.log(filter);
    return setfiltrados(filter);
  };
  //Funcion de filtrado, que llama a una funcion modularizada para que el codigo este mas limpio

  const searcher = () => {
    console.log(search);
    dispatch(reset());
    navigate(`/search/${search}`, { replace: true, search: search });
  };
  //En la funcion searcher nos redirigimos al componente 'search' y reseteamos el estado global

  //mientras no haya recetas cargadas, mostramos el componente 'loading'
  if (!recetas.length) {
    return (
      <div className="conteiner-home">
        <Loading></Loading>
      </div>
    );
  }
   else if (items().length) {
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
              disabled={!search.length}
              onClick={searcher}
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

export default Home;
