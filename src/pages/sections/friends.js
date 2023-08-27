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
                status="Playing"
                headshot="https://tr.rbxcdn.com/cc94269d588e2c14dd97bd598b67972f/150/150/AvatarHeadshot/Png"
                name="MapleAtMorning"
                link="google.com"
                activity="eat drywall"
                />
                
                <Friend
                status="Developing"
                headshot="https://tr.rbxcdn.com/c87b00c9cb51d3dc42271ba42fef6aba/150/150/AvatarHeadshot/Png"
                name="Async"
                link="google.com"
                activity="test_world1"
                />

                <Friend
                status="Online"
                headshot="https://tr.rbxcdn.com/96e323f546e613b63ef9d7211eef48da/150/150/AvatarHeadshot/Png"
                name="Nura"
                link="google.com"
                activity=""
                />

                <Friend
                status="Offline"
                headshot="https://tr.rbxcdn.com/1b44ae1e8d8d61e07453e967b841e1f2/150/150/AvatarHeadshot/Png"
                name="Willow"
                link="google.com"
                activity=""
                />

                <Friend
                status="Online"
                headshot="https://tr.rbxcdn.com/ccf999660bc35b2a9d956afa5dfb4775/150/150/AvatarHeadshot/Png"
                name="Doggo"
                link="google.com"
                activity=""
                />

                {/*Redesign this so that it's not as annoying to look at */}

            </ul>

        </section>
    );
};

// Will need to add activity/starred status here as well, maybe as a pseudo element
const Friend = ({link, status, headshot, name, activity}) =>{
    return(
        <li>
            <a href={link}>
                
                <span className={style[status]}> {/*Work around to ::after not working on imgs*/}
                    
                    <img src={headshot} alt={name}/>

                </span>

                <div>

                    <p className={style["username"]}>
                        <i>@</i>{name}
                    </p>

                    {/*if status/activity is offline this should be
                    invisible*/}
                    <p className={style["activity"]}>
                        <i>{status}: </i>{activity}
                    </p>

                </div>

            </a>
        </li>
    );
};

export default Friends;