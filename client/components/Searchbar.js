import React,{useState} from 'react';

const Searchbar = (props) => {
    const [category,setCategory] = useState('Catagory')
    const handleClick = (e) =>{
        console.log(e.target.outerText)
        setCategory(e.target.outerText);
    }

    const handleSearch = () =>{
        props.setState(false)
    }
    return ( 
    // <div className='search-container' ></div>
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
            <div className="wobbe-up" onClick={handleSearch}>Wobbe Up!</div>
        </div> 
    // </div>
    );
}
 
export default Searchbar;