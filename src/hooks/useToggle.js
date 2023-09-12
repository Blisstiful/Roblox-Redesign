/*
TASKS:
*Whatever clicked element is, make the target element open/close based on whatever its state is
*/

import { useState } from "react";

const sidebarToggle = document.querySelector("navbar_nav-menu-button__1w7dY");
const sidebar = document.querySelector("navmenu_nav-menu__jq2GA");

const useToggle = (clickedElement) =>{

	console.log("Clicked Element is: " + clickedElement.id);
}

export default useToggle;