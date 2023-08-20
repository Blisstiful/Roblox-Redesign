import React from "react";
import style from "./navmenu.module.css";

const NavMenu = () =>{
    return(
        <aside id={style["nav-menu"]}>

            {/* something navigationy or something */}
            <div>

                <p>Placeholder</p>
                <a href="google.com">Home</a>
                <a href="google.com">Profile</a>

            </div>

            {/* SOCIAL */}
            <div>

                <p>Social</p>
                <a href="google.com">Messages</a>
                <a href="google.com">Friends</a>
                <a href="google.com">Groups</a>

            </div>

            {/* ITEMS AND CUSTOMIZATION */}
            <div>

                <p>Items</p>
                <a href="google.com">Avatar</a>
                <a href="google.com">Inventory</a>
                <a href="google.com">Trade</a>
                <a href="google.com">Transactions</a>

            </div>

            {/* OFFICIAL */}
            <div>

                <p>Official</p>
                <a href="google.com">Blog</a>
                <a href="google.com">Official Store</a>
                <a href="google.com">Giftcards</a>

            </div>

        </aside>
    );
};

export default NavMenu;