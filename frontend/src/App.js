import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './Homepage/Homepage';
import About from './About/About';
import Signin from "./Homepage/Login/Signin";
import NextStep from "./Homepage/Login/NextStep";
import * as PropTypes from "prop-types";



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
