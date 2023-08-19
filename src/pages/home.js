import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

const Home = () =>{
    return(

        <React.Fragment>

            <All.NavBar />

            <main>

                <aside id={style["nav-menu"]}>

                    <p>navmenu</p>

                </aside>

                <section id={style["games"]}>

                    <div id={style["games-nav"]}>

                        <p>Games</p>

                        <ul>

                            <li className={style["current"]}>Continue</li>
                            <li>Favorites</li>
                            <li>Recommended</li>
                            <li>More</li>

                        </ul>

                    </div>

                    <ul id={style["games-list"]}>

                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                        
                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                        
                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                        
                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                        <Game
                        title="Phantom Forces"
                        thumbnail="something.jpg"
                        alt="Logo for Phantom Forces"
                        likes="80%"
                        playing="5k"
                        />

                    </ul>

                </section>

                <section id={style["friends"]}>

                    <p>friends</p>

                </section>

            </main>

            {/* FOOTER GOES HERE */}

        </React.Fragment>

    );
};

const Game = ({title, thumbnail, alt, likes, playing}) =>{
    return(

        <li>

            <p>{title}</p>

            <img src={thumbnail} alt={alt}/>

            <div>

                <p>{likes}</p>
                <p>{playing}</p>

            </div>

        </li>

    );
};

export default Home;