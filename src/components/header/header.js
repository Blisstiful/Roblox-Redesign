import { React, useState, useEffect } from "react";
import navBarStyle from "./navbar.module.css";

import SkipToMain from "../accessibility/skiptomain";
import NavBar from "./navbar";
import NavMenu from "../UI/menus/navmenu";

const Header = () =>{
	//lifting states up
	let [toggle, setToggle] = useState(false);

	useEffect(() =>{
        const navmenuToggle = document.querySelector(`#${navBarStyle["nav-menu-button"]}`);

        const handleToggle = () =>{
            console.log(toggle);
    
            if (toggle === false){
                setToggle(true)
            } else if (toggle === true){
                setToggle(false)
            };
    
        };

        navmenuToggle.addEventListener("click", handleToggle);

        //cleans up the eventlistener so no doubling
        return () => {
            navmenuToggle.removeEventListener("click", handleToggle);
        };
    }, [toggle]);

	return(
		<header>

			<SkipToMain />
			<NavBar />
			<NavMenu showNav={toggle} />

		</header>
	);
};

export default Header;