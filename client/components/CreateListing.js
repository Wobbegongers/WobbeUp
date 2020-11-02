import axios from 'axios';
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'

const initialFormState = {
    name: '',
    price: 0,
    description: ''
}
const url = 'http://localhost:3000/'

const CreateListing = (props) => {
    const [itemInfo, setItemInfo] = useState(initialFormState)
    const [redirect,setRedirect] = useState(false);

    const updateText = (e) =>{
        const {name, value} = e.target
        setItemInfo({
            ...itemInfo,
            [name] : value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(itemInfo)
        axios.post(url + 'listing/create', {
            params :{
                
            }
        })
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
        <form className="itemform" autoComplete='off' onSubmit={submitForm} className='form' >
            <label className="listinglabel">Item Name:</label>
            <input className="itemname listinginput"
                onChange={updateText}
                name='name'
                value={itemInfo.name}
                type="text" 
                id="itemname" 
                placeholder="Item Name"
            /><br/>
            <label className="listinglabel">Category:</label>
                <select className="item-dropdown listinginput" name='category'>
                    <option value='All'>All</option>
                    <option value='Cars'>Cars</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Video Games'>Video Games</option>
                    <option value='Others'>Others</option>
                </select> <br/>
            <label className="listinglabel">Item Price:</label>
            <input className="itemprice listinginput"
                onChange={updateText}
                name='price'
                value={`${itemInfo.price}`}
                type="number" 
                id="itemprice" 
                placeholder="Item Price"
            /><br/>
            <label className="listinglabel">Item Description:</label><br/>
            <textarea className="itemdescrip " 
              onChange={updateText}
              value={itemInfo.description}
                name="description" 
                cols="40" 
                rows="5">
            </textarea><br/>
            <input className="itemsubmit" type="submit" value="Submit"/>
            {renderRedirect()}
        </form>
    </div> 
    );
}
 
export default CreateListing;