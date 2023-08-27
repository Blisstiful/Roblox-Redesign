import React from "react";
import style from "./footer.module.css";

const Footer = () =>{
    return(
        <footer>

            <ul>
                <li><a href="https://google.com">About Us</a></li>
                <li><a href="https://google.com">Jobs</a></li>

                <li><a href="https://google.com">Blog</a></li>
                <li><a href="https://google.com">Parents</a></li>

                <li><a href="https://google.com">Gift Cards</a></li>
                <li><a href="https://google.com">Help</a></li>

                <li><a href="https://google.com">Terms</a></li>
                <li><a href="https://google.com">Accessibility</a></li>

                <li><a href="https://google.com">Privacy</a></li>

            </ul>

            <hr />

            <div id={style["disclaimer"]}>

                <i>placeholder</i>

                <p>This is an UNOFFICIAL redesign of Roblox Corporation's homepage.
                    This is in no way affiliated with Roblox. Please don't think that it is.
                </p>

            </div>

        </footer>
    );
};

export default Footer;