import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CreateButton = (props) => {
    return ( 
        <div className="button-container" >
            <Link className="button" to="/create"><Button className='footerButton'><h1 id="specialButton">Wobbe up an item</h1></Button></Link>
        </div>
     );
     
}
 
export default CreateButton;