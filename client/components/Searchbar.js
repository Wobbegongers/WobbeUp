import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Listing from './Listing';
const initialSearchInput = {
    searchValue : '',
    category:'All'
}
const Searchbar = (props) => {
    // const [category,setCategory] = useState('Category')
    const [searchInput, setSearchInput] = useState(initialSearchInput);
    const handleClick = (e) =>{
        console.log(e.target)
    }

    const handleSearchInput = (e) =>{
        const {name, value} = e.target;
        console.log(value)
        setSearchInput({
            ...searchInput,
            [name]: value
        })
    }
    console.log(searchInput)
    return ( 

        <div className="search">
            <div className="dropdown"> 
                <select name='category' onChange={handleSearchInput} value={searchInput.category} >
                    <option value='All'>All</option>
                    <option value='Automobile'>Automobile</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Video Games'>Video Games</option>
                    <option value='Others'>Others</option>
                </select>
            </div>
            <div className="search-box">
                <input className='searchInput-box'
                name ='searchValue'
                value = {searchInput.seachValue}
                placeholder='Wobbe are you looking for?'
                onChange={handleSearchInput} />
            </div>
            <Link className="wobbe-up" to='/listing'/*onClick={handleSearch}*/><button>Wobbe Up!</button></Link>
        </div> 




    );
}
 
export default Searchbar;