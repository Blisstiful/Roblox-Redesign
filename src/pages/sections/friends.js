import React from "react";
import style from "./friends.module.css";

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
                status="playing"
                headshot="https://tr.rbxcdn.com/cc94269d588e2c14dd97bd598b67972f/150/150/AvatarHeadshot/Png"
                name="MapleAtMorning"
                link="google.com"
                />
                
                <Friend
                status="develop"
                headshot="https://tr.rbxcdn.com/c87b00c9cb51d3dc42271ba42fef6aba/150/150/AvatarHeadshot/Png"
                name="Async"
                link="google.com"
                />

                <Friend
                status="online"
                headshot="https://tr.rbxcdn.com/96e323f546e613b63ef9d7211eef48da/150/150/AvatarHeadshot/Png"
                name="Nura"
                link="google.com"
                />

                <Friend
                status="offline"
                headshot="https://tr.rbxcdn.com/1b44ae1e8d8d61e07453e967b841e1f2/150/150/AvatarHeadshot/Png"
                name="Willow"
                link="google.com"
                />

                <Friend
                status="online"
                headshot="https://tr.rbxcdn.com/ccf999660bc35b2a9d956afa5dfb4775/150/150/AvatarHeadshot/Png"
                name="Doggo"
                link="google.com"
                />

                {/*Redesign this so that it's not as annoying to look at */}

            </ul>

        </section>
    );
};

// Will need to add activity/starred status here as well, maybe as a pseudo element
const Friend = ({status, headshot, name, link}) =>{
    return(
        <li>
            <a href={link}>
                
                <span className={style[status]}> {/*Work around to ::after not working on imgs*/}
                    <img src={headshot} alt={name}/>
                </span>
                <p><i>@</i>{name}</p>

            </a>
        </li>
    );
};

export default Friends;