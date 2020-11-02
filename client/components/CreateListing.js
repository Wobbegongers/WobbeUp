import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'

const initialFormState = {
    name: '',
    price: 0,
    description: ''
}

const CreateListing = (props) => {
    const [itemInfo, setItemInfo] = useState(initialFormState)
    const [redirect,setRedirect] = useState(false);

    const updateText = (e) =>{
        const {name, value} = e.target
        setItemInfo({
            ...itemInfo,
            [name] : value
        })
        // console.log('item Info: ', itemInfo)
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(itemInfo)
        changePath()
    }
    const changePath = ()=>{
        setRedirect(true)
    }

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect to='/listing' />
        }
      }
    

    return ( 
    <div className="create-listing-container">
        {/* 
            USER NAME
            ITEM NAME
            ITEM PRICE
            ITEM DESCRIPTION
            ITEM LOCATION         
        */}
        <form autoComplete='off' onSubmit={submitForm} className='form' >
            <label >Item Name:</label>
            <input 
                onChange={updateText}
                name='name'
                value={itemInfo.name}
                type="text" 
                id="itemname" 
                placeholder="Item Name"
            /><br/>
            <label >Item Price:</label>
            <input 
                onChange={updateText}
                name='price'
                value={`${itemInfo.price}`}
                type="number" 
                id="itemprice" 
                placeholder="Item Price"
            /><br/>
            <label >Item Description:</label><br/>
            <textarea 
              onChange={updateText}
              value={itemInfo.description}
                name="description" 
                cols="40" 
                rows="5">
            </textarea><br/>
            <input type="submit" value="Submit"/>
            {renderRedirect()}
        </form>
    </div> 
    );
}
 
export default CreateListing;