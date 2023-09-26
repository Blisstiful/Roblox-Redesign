import { React, useState, useEffect } from "react";
import style from "./languages.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Languages = () =>{
    let [toggle, setToggle] = useState(false);

    useEffect(() =>{
        const languageToggle = document.querySelector(`#${style["interactive-button"]}`);

        const handleToggle = () =>{

            if (toggle === false){
                setToggle(true)
            } else if (toggle === true){
                setToggle(false)
            };
    
        };

        languageToggle.addEventListener("click", handleToggle);

        return () => {
            languageToggle.removeEventListener("click", handleToggle);
        };
    }, [toggle]);

    return(
        <div id={style["languages"]}>

            <ul showmenu={toggle}>

                <li>English</li>
                <li>Español</li>
                <li>Deutsch</li>
                <li>Français</li>
                <li>Italiano</li>

            </ul>

            <span id={style["languages-btn"]}>

                <button id={style["interactive-button"]}></button>

                <i className={style["world-icon"]}></i>

                <p>English</p>

                <FontAwesomeIcon icon={faAngleDown}/>

            </span>

        </div>
    );
};

export default Languages;