import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Listing from './Listing';

const Searchbar = (props) => {
    const [category,setCategory] = useState('Category')
    const handleClick = (e) =>{
        console.log(e.target.outerText)
        setCategory(e.target.outerText);
    }

    // const handleSearch = () =>{
    //     props.setState(false)
    // }
    return ( 

        <div className="search">
            <div className="dropdown">  
                <div className="category">{category}</div>
                <div className="dropdown-content">
                    <a onClick={handleClick} value='Automobile'>Automobile</a><br/>
                    <a onClick={handleClick} value='Electronics'>Electronics</a><br/>   
                    <a onClick={handleClick} value="Toys">Toys</a>
                </div>
            </div>
            <div className="search-box">
                <input/>
            </div>
            <Link className="wobbe-up" to='/listing'/*onClick={handleSearch}*/>Wobbe Up!</Link>
        </div> 




    );
}
 
export default Searchbar;