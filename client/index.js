import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import style from './style/style.scss'
import {Provider} from 'react-redux'
import {store} from './actions/store'

ReactDom.render(
<Provider store={store} >
    <App />
</Provider>, 
document.getElementById('app'));




