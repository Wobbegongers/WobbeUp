import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Listing from './Listing';
const initialSearchInput = {
    searchValue : ''
}
const Searchbar = (props) => {
    const [category,setCategory] = useState('Category')
    const [searchInput, setSearchInput] = useState(initialSearchInput);
    const handleClick = (e) =>{
        console.log(e.target.outerText)
        setCategory(e.target.outerText);
    }

    const handleSearchInput = (e) =>{
        const {name, value} = e.target;
        console.log(value)
        setSearchInput({
            ...searchInput,
            [name]: value
        })
        // console.log(value)
    }
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
                <input className='searchInput-box'
                name ='searchValue'
                value = {searchInput.seachValue}
                placeholder='Wobbe are you looking for?'
                onChange={handleSearchInput} />
            </div>
            <Link className="wobbe-up" to='/listing'/*onClick={handleSearch}*/>Wobbe Up!</Link>
        </div> 




    );
}
 
export default Searchbar;