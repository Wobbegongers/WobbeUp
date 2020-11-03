import axios from 'axios';
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

const initialFormState = {
    name: '',
    price: 0,
    description: '',
    category: 'All'
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
    //let params = [req.body.name, req.body.price, req.body.user_id, req.body.location, req.body.category_id, req.body.description]
    console.log(props)
    const submitForm = (e) => {
        e.preventDefault();
        console.log(itemInfo)
        axios.post(url + 'listing/create', {
            params :{
                name :itemInfo.name.toLowerCase().trim(),
                price : itemInfo.price,
                user_id: props.user_id,
                location: props.location,
                category_id : itemInfo.category,
                description: itemInfo.description,
            }
        }).then(()=>{
            changePath()
        }).catch(err => console.log(err))
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
        <div>
            <h1 className="createlistingtext">List New Wobbe Item:</h1>
        </div>
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
                <select onChange={updateText}
                value = {itemInfo.category}
                 className="item-dropdown listinginput" name='category'>
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

const mapStateToProps = (state) =>({
    user_id : state.wobbeReducer.user_id,
    username: state.wobbeReducer.username,
    location: state.wobbeReducer.location
})
 
export default connect(mapStateToProps)(CreateListing);