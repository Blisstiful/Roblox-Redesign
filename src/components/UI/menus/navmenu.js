import { React } from "react";
import style from "./navmenu.module.css";

const NavMenu = ({showNav}) =>{
    return(
        <>{showNav && 
            <nav id={style["nav-menu"]}>

                {/* OVERVIEW */}
                <section>

                    <h4>Overview</h4>
                    <hr />

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["house-icon"]}></span>
                        Home
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["profile-icon"]}></span>
                        Profile
                    </a>

                </section>

                {/* SOCIAL */}
                <section>

                    <h4>Social</h4>
                    <hr />

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["messages-icon"]}></span>
                        Messages
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["friends-icon"]}></span>
                        Friends
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["groups-icon"]}></span>
                        Groups
                    </a>

                </section>

                {/* ACCOUNT */}
                <section>

                    <h4>Account</h4>
                    <hr />

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["avatar-icon"]}></span>
                        Avatar
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["inventory-icon"]}></span>
                        Inventory
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["trade-icon"]}></span>
                        Trade
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["transactions-icon"]}></span>
                        Transactions
                    </a>

                </section>

                {/* OFFICIAL */}
                <section>

                    <h4>Official</h4>
                    <hr />

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["blog-icon"]}></span>
                        Blog
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["store-icon"]}></span>
                        Store
                    </a>

                    <a href="/Roblox-Redesign/interest">
                        <span className={style["giftcard-icon"]}></span>
                        Giftcards
                    </a>

                </section>

            </nav>
        }</>
    );
};

export default NavMenu;