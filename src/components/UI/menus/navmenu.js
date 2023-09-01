import React from "react";
import style from "./navmenu.module.css";

const NavMenu = () =>{
    return(
        <aside id={style["nav-menu"]}>

            {/* OVERVIEW */}
            <div>

                <h4>Overview</h4>
                <hr />

                <a href="google.com">
                    <span className={style["house-icon"]}></span>
                    Home
                </a>

                <a href="google.com">
                    <span className={style["profile-icon"]}></span>
                    Profile
                </a>

            </div>

            {/* SOCIAL */}
            <div>

                <h4>Social</h4>
                <hr />

                <a href="google.com">
                    <span className={style["messages-icon"]}></span>
                    Messages
                </a>

                <a href="google.com">
                    <span className={style["friends-icon"]}></span>
                    Friends
                </a>

                <a href="google.com">
                    <span className={style["groups-icon"]}></span>
                    Groups
                </a>

            </div>

            {/* ACCOUNT */}
            <div>

                <h4>Account</h4>
                <hr />

                <a href="google.com">
                    <span className={style["avatar-icon"]}></span>
                    Avatar
                </a>

                <a href="google.com">
                    <span className={style["inventory-icon"]}></span>
                    Inventory
                </a>

                <a href="google.com">
                    <span className={style["trade-icon"]}></span>
                    Trade
                </a>

                <a href="google.com">
                    <span className={style["transactions-icon"]}></span>
                    Transactions
                </a>

            </div>

            {/* OFFICIAL */}
            <div>

                <h4>Official</h4>
                <hr />

                <a href="google.com">
                    <span className={style["blog-icon"]}></span>
                    Blog
                </a>

                <a href="google.com">
                    <span className={style["store-icon"]}></span>
                    Store
                </a>

                <a href="google.com">
                    <span className={style["giftcard-icon"]}></span>
                    Giftcards
                </a>

            </div>

        </aside>
    );
};

export default NavMenu;