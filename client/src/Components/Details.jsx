import React,{ useEffect, } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { buscarimg } from "../Functions aux/buscarimg"
import {buscardiets} from "../Functions aux/buscardiets"
import {getById} from '../Actions/Actions';
import { useParams, Link } from 'react-router-dom';
import {createMarkup} from "../Functions aux/createMarkup"
import './estilos/details.css'


function Details (){
    const dispatch = useDispatch();
    let found = useSelector(state =>  state.Details);
    useEffect(() => {
        dispatch(getById(id))
    },[dispatch]);
    let {id} = useParams();
    if (!found){
        return (<div>
            
        </div>)
    }else 
    return(<div className="details">
        <Link className='link' to={`/home`}>Back to Home</Link>
         {buscarimg(found.image)}
        <h>{found.title}</h>
        <p dangerouslySetInnerHTML={createMarkup(found.summary)}/>
        <p>healthScore: {found.healthScore}</p>
        <p>Points: {found.weightWatcherSmartPoints}</p>
        {buscardiets(found.diets)}
        <p dangerouslySetInnerHTML={createMarkup(found.summary)}/>
    </div>)
}

export default Details;