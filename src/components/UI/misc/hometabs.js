import React from "react";
import style from "./hometabs.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Hometabs = ({type, header}) =>{
	return(

		<a id={style[type]} href="/Roblox-Redesign/interest">

			<FontAwesomeIcon icon={faNewspaper} />
			<h4>{header}</h4>

		</a>
		
	);
};

export default Hometabs;