import React from 'react';
import Nav from '../components/Nav';
import Searchbar from '../components/Searchbar'
import Main from './Main';


const Home = () => {
    return ( 
        <div className="body">
            <Nav />
            <Main/>
        </div>
     );
}
 
export default Home;