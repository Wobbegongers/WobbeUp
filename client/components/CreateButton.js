import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CreateButton = (props) => {
    return ( 
        <Link to="/create"><Button>Wobbe up an item</Button></Link>
     );
}
 
export default CreateButton;