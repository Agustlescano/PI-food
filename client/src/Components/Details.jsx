import React,{ useEffect, } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getById} from '../Actions/Actions';
import { useParams, Link } from 'react-router-dom';


function Details (){
    const dispatch = useDispatch();
    let found = useSelector(state =>  state.details);
    useEffect(() => {
        dispatch(getById(id))
    },[dispatch]);
    let {id} = useParams();
    console.log(useParams());
    console.log('aca estoy')
    if (!found){
        return (<div>Loading...</div>)
    }
    return(<div>
        <Link to={`/home`}>home</Link>
        <h>{found.title}</h>
    </div>)
}

export default Details;