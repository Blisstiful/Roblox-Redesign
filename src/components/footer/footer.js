import React from "react";
import style from "./footer.module.css";

import Languages from "../UI/menus/languages";

const Footer = () =>{
    return(
        <footer>

            <ul id={style["footer-list"]}>
                <li><a href="/Roblox-Redesign/interest">About Us</a></li>
                <li><a href="/Roblox-Redesign/interest">Jobs</a></li>

                <li><a href="/Roblox-Redesign/interest">Blog</a></li>
                <li><a href="/Roblox-Redesign/interest">Parents</a></li>

                <li><a href="/Roblox-Redesign/interest">Gift Cards</a></li>
                <li><a href="/Roblox-Redesign/interest">Help</a></li>

                <li><a href="/Roblox-Redesign/interest">Terms</a></li>
                <li><a href="/Roblox-Redesign/interest">Accessibility</a></li>

                <li><a href="/Roblox-Redesign/interest">Privacy</a></li>

            </ul>

            <hr />

            <div id={style["disclaimer"]}>

                <Languages />

                <p>This is an UNOFFICIAL redesign of Roblox Corporation's homepage.
                    This is in no way affiliated with Roblox. Please don't think that it is.
                </p>

            </div>

        </footer>
    );
};

export default Footer;