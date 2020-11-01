import React,{useState} from 'react';

const initialInputValue = {
    input: ''
}

const ChatInput = (props) => {
    const [values , setValues] = useState (initialInputValue)

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSend(values.input)
        setValues(initialInputValue)
    }
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    return ( 
        <form autoComplete='off' className="chat-input" onSubmit={handleSubmit}>
            <input type='text'
            onChange={handleChange}
            name='input'
            value={values.input}
            placeholder="Send a message..."
            id = 'textInput'
            />
        </form>
    );
}
 
export default ChatInput;