import { Box } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Listing = (props) => {
    return ( 
        <div>
            LISTING
            {/* <Box>BOX</Box> */}
            <button><Link to={`/monkeyboner/car`} > button </Link> </button>
        </div>
     );
}
 
export default Listing;