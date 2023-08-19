import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

import image from "../images/something.jpg";

const Home = () =>{
    return(

        <React.Fragment>

            <All.NavBar />

            <main>

                <aside id={style["nav-menu"]}>

                    <p>navmenu</p>

                </aside>

                <section id={style["middle"]}>

                    <div id={style["top"]}>

                        <h1>Home</h1>

                        <input type="text" placeholder="placeholder" id={style["searchbar"]}></input>

                    </div>

                    <div id={style["games"]}>

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
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Phantom Forces long title long title long title long title"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Phantom Forces"
                            thumbnail={image}
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                        </ul>

                    </div>

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

            <p className={style["temp-one"]}>{title}</p>

            <img src={thumbnail} alt={alt}/>

            <div>

                <p className={style["temp-two"]}>{likes}</p>
                <p className={style["temp-two"]}>{playing}</p>

            </div>

        </li>

    );
};

export default Home;