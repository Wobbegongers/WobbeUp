import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/WobbeUp.png'
import {connect} from 'react-redux';
import * as actions from '../actions/actions'

// import Listing from './Listing';
const initialSearchInput = {
    searchValue : '',
    category:'All'
}
const Searchbar = (props) => {
    // const [category,setCategory] = useState('Category')
    const [searchInput, setSearchInput] = useState(initialSearchInput);

    const handleSearch = (e) =>{
        console.log(searchInput)
        props.setSearchItem(searchInput);
    }

    const handleSearchInput = (e) =>{
        const {name, value} = e.target;
        console.log(value)
        setSearchInput({
            ...searchInput,
            [name]: value
        })
    }

    return ( 

        <div className="search">

            <div className='searchLogo'>
                <img className="logo" src={logo}></img>
            </div>
            <div className="tagline">
                <h2>Selling who knows what to God knows who</h2>
            </div>
            <div className='searchbar'>
                <div className="dropdown">
                    <select className="search-dropdown" name='category' onChange={handleSearchInput} value={searchInput.category} >
                        <option value='All'>All</option>
                        <option value='Cars'>Cars</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Video Games'>Video Games</option>
                        <option value='Others'>Others</option>
                    </select>
                </div>
                <div className="search-box">
                    <input className='searchInput-box'
                    autoComplete= 'off'
                    name ='searchValue'
                    value = {searchInput.seachValue}
                    placeholder='Wobbe are you looking for?'
                    onChange={handleSearchInput} />
                </div>
                <Link className="searchbar-link" to='/listing' onClick={handleSearch}>
                    <button className="wobbe-up">Wobbe Up!</button>
                </Link>
            </div>

        </div> 




    );
}

const mapStateToProps = (state) =>({
    item : state.wobbeReducer.item
})

const mapActionToProps = {
    setSearchItem : actions.setSearchItem,
}
export default connect(mapStateToProps, mapActionToProps)(Searchbar);