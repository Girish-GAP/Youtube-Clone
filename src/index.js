import React from 'react';
import ReactDOM from 'react-dom/client';    // as per version react version 18+ 

import App from './App'
import './index.css'

// here we are featching from DOM we are getting the div with id of root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)