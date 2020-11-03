import React,{useEffect,useState} from 'react';
import Listing from '../components/Listing';
import Searchbar from '../components/Searchbar';
import Footer from './Footer'


const Main = (props) => {
    const [state, setState] = useState(true)
    return ( 
        <div className="main">
            <Searchbar {...{state,setState}}/>
            <Footer />
        </div>
     );
}
 
export default Main;