import React from "react";
import style from "./searchbar.module.css";

const Searchbar = () =>{
    return(
        <input type="text" placeholder="Search..." id={style["searchbar"]}></input>
    );
};

export default Searchbar;