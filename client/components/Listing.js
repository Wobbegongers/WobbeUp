
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CardList from './CardList';
import axios from 'axios';

const url = 'http://localhost:3000/'

const Listing = (props) => {
    //create and array of cards
    const [library, setLibrary] = useState([]);

    useEffect(()=>{
        axios.get(url+'listing/all')
        .then(res =>{
            // console.log(res.data)
            setLibrary(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const cardList = library.map(( el,index) => {
       return <CardList key={index} {...el} />
    })
    
    return ( 
        <div>
            {cardList}
        </div>
     );
}
 
export default Listing;