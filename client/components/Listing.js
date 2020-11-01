
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
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    })


    let cardList = []
    for (let i = 0; i< 10; i++){
        cardList.push(
            <CardList key={i} item={i}/>
        )
    }
    
    return ( 
        <div>
            {cardList}
        </div>
     );
}
 
export default Listing;