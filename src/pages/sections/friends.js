import React from "react";
import style from "./friends.module.css";

import UserData from "../../user-data.json";

const Friends = () =>{
    const AmountOfFriends = UserData["amount-of-friends"];
    const FriendsData = UserData.friends;

    let displayFriends = [];
    let friendCounter = 0;

    const handleFriendsData = (friend) =>{
        
        friendCounter += 1;

        //Make a react component for each friend in #friends-list
        displayFriends.push(
            <Friend
            status={friend["friend-status"]}
            headshot={friend["friend-headshot"]}

            name={friend["friend-username"]}
            link="https://google.com"

            activity={friend["friend-activity"]}
            key={friendCounter} /*Used for react to update a singular elem instead of the whole list*/
            />
        )

        return displayFriends;
    }

    FriendsData.forEach(handleFriendsData)

    //mobile code for displaying friends
    if (window.innerWidth < 768){

        if (displayFriends.length > 4){

            displayFriends.length = 4;

        }

    }

    return(
        <section id={style["friends"]}>

            <h2>Friends 
                <span>({AmountOfFriends})</span>
            </h2>

            <ul id={style["friends-categories"]}>

                <li><button className={style["current"]}>All</button></li>
                <li><button>Online</button></li>
                <li><button>Starred</button></li>

            </ul>

            <ul id={style["friends-list"]}> 

                {displayFriends}

            </ul>

        </section>
    );
};

const Friend = ({status, headshot, name, activity}) =>{
    return(
        <li>
            <a href="/Roblox-Redesign/interest">
                
                <span className={style[status]}> {/*Work around to ::after not working on imgs*/}
                    
                    <img src={headshot} alt={name}/>

                </span>

                <div>

                    <p className={style["username"]}>
                        <i>@</i>{name}
                    </p>
                    
                    <p className={style["activity"]}>
                        <i>{status}: </i>{activity}
                    </p>

                </div>

            </a>
        </li>
    );
};

export default Friends;