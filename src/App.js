import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Interest from "./pages/interest";

class App extends Component {
    render(){
        return(

            <Router>

                <Routes>

                    <Route exact path="/Roblox-Redesign" element={ <Home /> } />
                    <Route path="/Roblox-Redesign/interest" element={ <Interest /> } />

                </Routes>

            </Router>

        );
    };
};

export default App;