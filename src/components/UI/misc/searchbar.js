import React from "react";
import style from "./searchbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Searchbar = () =>{
    return(
        <div id={style["input-group"]}>

            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search..." id={style["searchbar"]}></input>

        </div>
    );
};

export default Searchbar;