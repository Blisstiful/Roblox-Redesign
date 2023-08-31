import React from "react";
import style from "./searchbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({hasSearchNav}) =>{
    return(
        <div id={style["container-fr-fr"]}>

            <div id={style["input-group"]}>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search..." id={style["searchbar"]}></input>

            </div>

            {
                hasSearchNav ? 
                (
                <ul id={style["search-nav"]}>

                    <li><button>Games</button></li>
                    <li><button>Groups</button></li>

                    <li><button>Players</button></li>
                    <li><button>Market</button></li>

                </ul>)
                : (<div></div>)
            }

        </div>
    );
};

export default Searchbar;