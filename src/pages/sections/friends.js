import React from "react";
import style from "./friends.module.css";

import image from "../../images/something.jpg";

const Friends = () =>{
    let amountoffriends = 32;

    return(
        <section id={style["friends"]}>

            <h2>Friends 
                <span>({amountoffriends})</span>
            </h2>

            <ul id={style["friends-categories"]}>
                <li><button className={style["current"]}>All</button></li>
                <li><button>Online</button></li>
                <li><button>Starred</button></li>

            </ul>

            <ul id={style["friends-list"]}> 

                <Friend 
                headshot={image}
                name="friend123"
                link="google.com"
                />
                
                <Friend 
                headshot={image}
                name="friend123"
                link="google.com"
                />

                {/*Redesign this so that it's not as annoying to look at */}

            </ul>

        </section>
    );
};

// Will need to add activity/starred status here as well, maybe as a pseudo element
const Friend = ({headshot, name, link}) =>{
    return(
        <li>
            <a href={link}>

                <img src={headshot} alt={name}/>
                <span>{name}</span>

            </a>
        </li>
    );
};

export default Friends;