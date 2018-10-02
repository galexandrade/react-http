import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    //EDIT REQUEST
    return request;
},
//Only errors related to the request (internet ussues, etc)
error => {
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    console.log(response);
    //EDIT RESPONSE
    return response;
},
//Only errors related to the request (internet ussues, etc)
error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
