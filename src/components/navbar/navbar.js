import {React, useEffect, useState } from "react";
import style from "./navbar.module.css";

import UserData from "../../user-data.json";

import SkipToMain from "../accessibility/skiptomain";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () =>{
    //Userdata
    const Username = UserData.username;
    const Src = UserData["profile-picture"];
    const Avatarlink = UserData["avatar-link"];

    //Toggling sidebar
    let [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        console.log("clicked :3")
        console.log(toggle)

        if (toggle === true){
            setToggle(false)
        } else if (toggle === false){
            setToggle(true)
        }

    };

    useEffect(() =>{
        const navmenuToggle = document.querySelector(`#${style["nav-menu-button"]}`)
        navmenuToggle.addEventListener("click", handleToggle)
    });

    return(
        <header>

            <SkipToMain />

            <nav id={style["navbar"]}>

                <div id={style["left"]}>

                    <button id={style["nav-menu-button"]}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <a href="google.com">Discover</a>
                    <a href="google.com">Develop</a>
                    
                    <a href="google.com">Market</a>
                    <a href="google.com">Robux</a>

                </div>

                <div id={style["right"]}>

                    <a id={style["headshot"]} href={Avatarlink}>

                        <img src={Src} alt="" />
                        <p><i>@</i>{Username}</p>

                    </a>

                    <i id={style["setting"]}></i>

                </div>

            </nav>

        </header>
    );
};

export default NavBar;