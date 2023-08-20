import React from "react";
import style from "./navbar.module.css";
import image from "../../images/something.jpg";

const NavBar = ({src, alt, username, link}) =>{
    src = image
    alt = "alttext"
    username = "username123"
    link = "google.com"

    return(
        <header>

            <nav id={style["navbar"]}>

                <div id={style["left"]}>

                    <button id={style["nav-menu-button"]}>
                        {/* Use fontawesome to put a slide drawer nav icon */}
                    </button>

                    <a href="google.com">Discover</a>
                    <a href="google.com">Develop</a>
                    <a href="google.com">Market</a>
                    <a href="google.com">Robux</a>

                </div>

                <div id={style["right"]}>

                    <a id={style["headshot"]} href={link}>

                        <img src={src} alt={alt} />
                        <p>{username}</p>

                    </a>

                    {/* Use fontawesome to put a settings icon */}

                </div>

            </nav>

        </header>
    );
};

export default NavBar;