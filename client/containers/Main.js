import React,{useEffect,useState} from 'react';
import Listing from '../components/Listing';
import Searchbar from '../components/Searchbar';

const Main = (props) => {
    const [state, setState] = useState(true)
    return ( 
        <div className="main">
            {state
             ? <Searchbar {...{state,setState}}/>
             : <Listing/>
            }
        </div>
     );
}
 
export default Main;