import React from "react";
import style from "./home.module.css";

const Home = () =>{
    return(

        <React.Fragment>

            {/* NAVBAR GOES HERE */}

            <main>

                <section id={style["nav-menu"]}>

                    <p>navmenu</p>

                </section>

                <section id={style["games"]}>

                    <div id={style["games-nav"]}>

                        <p>Games</p>

                        <ul>

                            <li>Continue</li>
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

const Game = (title, thumbnail, alt, likes, playing) =>{
    return(

        <li>

            <p>{title}</p>

            <img src={thumbnail} alt={alt}/>

            <p>{likes}</p>
            <p>{playing}</p>

        </li>

    );
};

export default Home;