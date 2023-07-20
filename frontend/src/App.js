import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import HomePage from './Homepage/Homepage';
import About from './About/About';


const App = () => {
    return (
        <>
        <head>
          <script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
        </head>
        <HomePage></HomePage>
        </>
    );
}

export default App;
