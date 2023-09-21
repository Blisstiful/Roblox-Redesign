import {React } from "react";
import style from "./navbar.module.css";

import Searchbar from "../UI/misc/searchbar";

import UserData from "../../user-data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () =>{
    //Userdata
    const Username = UserData.username;
    const Src = UserData["profile-picture"];
    const Avatarlink = UserData["avatar-link"];

    //Toggling sidebar

    return(
        <nav id={style["navbar"]}>

            <div id={style["left"]}>

                <button id={style["nav-menu-button"]}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <a href="/Roblox-Redesign/interest">Discover</a>
                <a href="/Roblox-Redesign/interest">Develop</a>
                
                <a href="/Roblox-Redesign/interest">Market</a>
                <a href="/Roblox-Redesign/interest">Robux</a>

            </div>

            <div id={style["right"]}>

                <Searchbar hasSearchNav={false}/>

                <a id={style["headshot"]} href={Avatarlink}>

                    <img src={Src} alt="" />
                    <p><i>@</i>{Username}</p>

                </a>

                <i id={style["setting"]}></i>

            </div>

        </nav>

    );
};

export default NavBar;