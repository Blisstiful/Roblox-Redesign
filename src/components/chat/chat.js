import React from "react";
import style from "./chat.module.css";
import UserData from "../../user-data.json";

const Chat = () =>{
    const ChatData = UserData.chat;
    const NotificationsData = UserData["chat-notifications"];

    return(
        <div id={style["chat"]}>

            <h4>Chats: <span>({NotificationsData} unread)</span></h4>
            
            <ul id={style["chat-list"]}>

                <li>
                    <a href="/Roblox-Redesign/interest">

                        <img src="idkman"alt=""/>
                        <p>Empire:</p>

                        <p>Want to join my group?</p>

                    </a>
                </li>

            </ul>

        </div>
    );
};

export default Chat;