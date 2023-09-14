import React from "react";
import style from "./skiptomain.module.css";

const SkipToMain = () =>{
    return(
        <a href="#main" id={style["skip"]} tabIndex="1">Skip to Main Content</a>
    );
};

export default SkipToMain;