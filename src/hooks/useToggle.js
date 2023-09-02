/*
TASKS:
*Whatever clicked element is, make the target element open/close based on whatever its state is
*/
import { useState, useEffect } from "react";

const useToggle = (clickedElement, targetElement) =>{
	//complicated way of just setting state, setState, to true and 
	//"recording" that
	let [state, setState] = useState(true);

	useEffect(() =>{
		if (state === false){
			//insert code to show element here
			setState(true) //set state to true
		}else if(state === true){
			//insert code to hide element here
			setState(false) //set state to false
		};
	});

}

export default useToggle;