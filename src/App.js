import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";

class App extends Component {
    render(){
        return(

            <Home />

        );
    };
};

export default App;