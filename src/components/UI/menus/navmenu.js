import React from "react";
import style from "./navmenu.module.css";

const NavMenu = () =>{
    return(
        <aside id={style["nav-menu"]}>

            {/* OVERVIEW */}
            <div>

                <p>Overview</p>

                <a href="google.com">
                    <span class={style["house-icon"]}></span>
                    Home
                </a>

                <a href="google.com">
                    <span class={style["profile-icon"]}></span>
                    Profile
                </a>

            </div>

            {/* SOCIAL */}
            <div>

                <p>Social</p>

                <a href="google.com">
                    <span class={style["messages-icon"]}></span>
                    Messages
                </a>

                <a href="google.com">
                    <span class={style["friends-icon"]}></span>
                    Friends
                </a>

                <a href="google.com">
                    <span class={style["groups-icon"]}></span>
                    Groups
                </a>

            </div>

            {/* ACCOUNT */}
            <div>

                <p>Account</p>

                <a href="google.com">
                    <span class={style["avatar-icon"]}></span>
                    Avatar
                </a>

                <a href="google.com">
                    <span class={style["inventory-icon"]}></span>
                    Inventory
                </a>

                <a href="google.com">
                    <span class={style["trade-icon"]}></span>
                    Trade
                </a>
                <a href="google.com">Transactions</a>

            </div>

            {/* OFFICIAL */}
            <div>

                <p>Official</p>

                <a href="google.com">
                    <span class={style["blog-icon"]}></span>
                    Blog
                </a>

                <a href="google.com">
                    <span class={style["store-icon"]}></span>
                    Official Store
                </a>
                
                <a href="google.com">
                    <span class={style["giftcard-icon"]}></span>
                    Giftcards
                </a>

            </div>

        </aside>
    );
};

export default NavMenu;