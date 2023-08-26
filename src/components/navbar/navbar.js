import React from "react";
import style from "./navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({src, alt, username, link}) =>{
    src = "https://tr.rbxcdn.com/449bd812e14a5bd26d24ddc5197cfc94/150/150/AvatarHeadshot/Png"
    alt = "alttext"
    username = "Vdelaide"
    link = "google.com"

    return(
        <header>

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

                    <a id={style["headshot"]} href={link}>

                        <img src={src} alt={alt} />
                        <p>@{username}</p>

                    </a>

                    <i id={style["setting"]}></i>

                </div>

            </nav>

        </header>
    );
};

export default NavBar;