import {React } from "react";
import style from "./navbar.module.css";

import Searchbar from "../UI/misc/searchbar";

import UserData from "../../user-data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import MediaQuery from "react-responsive";

const NavBar = () =>{
    //Userdata
    const Username = UserData.username;
    const Src = UserData["profile-picture"];
    const Avatarlink = UserData["avatar-link"];

    return(
        <nav id={style["navbar"]}>

            <div id={style["left"]}>

                <button id={style["nav-menu-button"]}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul id={style["quick-nav"]}>

                    <li>
                        <a href="/Roblox-Redesign/interest">Discover</a>
                    </li>

                    <li>
                        <a href="/Roblox-Redesign/interest">Develop</a>
                    </li>

                    <li>
                        <a href="/Roblox-Redesign/interest">Market</a>
                    </li>

                    <li>
                        <a href="/Roblox-Redesign/interest">Robux</a>
                    </li>

                </ul>

            </div>

            <MediaQuery minWidth={1080}>

                <div id={style["middle"]}>

                    <Searchbar hasSearchNav={false}/>

                </div>
                
            </MediaQuery>

            <div id={style["right"]}>

                <a id={style["headshot"]} href={Avatarlink}>

                    <img src={Src} alt="" />

                    <MediaQuery minWidth={530}>
                        <p><i>@</i>{Username}</p>
                    </MediaQuery>
                    
                </a>

                <MediaQuery minWidth={768}>
                    <i id={style["setting"]}></i>
                </MediaQuery>

            </div>
                
        </nav>

    );
};

export default NavBar;