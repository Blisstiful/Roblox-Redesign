import React from "react";
import style from "./languages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Languages = () =>{
    return(
        <div id={style["languages"]}>

            <ul>

                <li>English</li>
                <li>Español</li>
                <li>Deutsch</li>
                <li>Français</li>
                <li>Italiano</li>

            </ul>

            <span id={style["languages-btn"]}>

                <button></button>

                <i className={style["world-icon"]}></i>

                <p>English</p>

                <FontAwesomeIcon icon={faAngleDown}/>

            </span>

        </div>
    );
};

export default Languages;