import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";

class App extends Component {
    render(){
        return(

            <Router>

                <Routes>

                    <Route path="/Roblox-Redesign" element={<Home />}></Route>
                    {/* Only one page but this is just easier for me to structure */}

                </Routes>

            </Router>

        );
    };
};

export default App;