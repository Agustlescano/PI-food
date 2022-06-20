import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import orders from "../Functions aux/orderby";
import filterby from "../Functions aux/filterby";
import objetnofound from "../Functions aux/objnofound";
import ConteinersRecipes from "./ConteinerRecipes";
import { allRecipes, allKinds, searchbyname } from "../Actions/Actions";
import { NavLink } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  let recetas = useSelector((state) => state.recipes);
  let founds = useSelector((state) => state.search);
  let kinds = useSelector((state) => state.kinds);
  let [encontrados, setEncontrados] = useState([1,2]);
  let [recipes, setRecipes] = useState([]);
  let [filtrados, setfiltrados] = useState(recetas);
  const [current, setcurrent] = useState(0);
  const [search, setsearch] = useState("");

  useEffect(() => {
    dispatch(allRecipes());
    dispatch(allKinds());
  }, [dispatch]);
  let arr = [];
  let items = () => {
    if (!encontrados.length & !founds.length){
      console.log('aca entro')
         arr=[objetnofound]}
     else if (filtrados.length) {
      console.log('filtrados')
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

  const filterbytype = (e) => {
   
    if (founds.length) {
      console.log("founds");
      let filter = filterby(founds, e.target.value);
      console.log(filter);
      if (!filter.length) {
        setfiltrados([objetnofound]);
      }else(
      setfiltrados(filter));
    }else if(!founds.length) {
    let filter = filterby(recetas, e.target.value);
    if (!filter.length) {
      setfiltrados([objetnofound]);
    }else{setfiltrados(filter)}
    }else {setfiltrados([objetnofound])}
  };
  useEffect(() => {setfiltrados(founds)}, [founds]);
  const searcher = async () => {
   dispatch(searchbyname(search))
   setEncontrados(founds)

    

    
  };

  if (!recetas.length) {
    return <div>cargando</div>;
  } else if (items().length) {
    return (
      <div className="container" key={5}>
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
            <input value={search} type="text" onChange={(e) =>setsearch(e.target.value)} />
            <input className="input" type="submit" value="search" onClick={searcher} />
          </div>
          <select className="input" name="typos" id="" onChange={filterbytype}>
            <option value="all">All recipes</option>
            <option value="creados">Creados</option>
            {kinds.map((type) => (
              <option value={type.Name}>{type.Name}</option>
            ))}
          </select>

          <NavLink className="link" to={"/create"}>
            Add Recipe
          </NavLink>
        </div>

        <ConteinersRecipes recipes={items()} />
      </div>
    );
  }
}

export default Home;
