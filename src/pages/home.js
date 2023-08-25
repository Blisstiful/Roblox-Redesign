import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

import image from "../images/something.jpg";

import Friends from "./sections/friends";

const Home = () =>{
    return(

        <React.Fragment>

            <All.NavBar />

            <main>

                <All.NavMenu />

                <section id={style["middle"]}>

                    <div id={style["top"]}>

                        <h1>Home</h1>

                        <All.Searchbar />

                    </div>

                    <div id={style["games"]}>

                        <div id={style["games-nav"]}>

                            <h2>Games</h2>

                            <ul>

                                <li className={style["current"]}><button>Continue</button></li>
                                <li><button>Favorites</button></li>
                                <li><button>Recommended</button></li>
                                <li><button>More </button></li>

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

                        </ul>

                    </div>

                </section>

                <Friends />

            </main>

            {/* FOOTER GOES HERE */}

        </React.Fragment>

    );
};

//wrap all of this in an anchor tag and make sure to fix the styles when that happens 
const Game = ({title, thumbnail, alt, likes, playing}) =>{
    return(

        <li>

            <img src={thumbnail} alt={alt}/>
            <p className={style["game-title"]}>{title}</p>

            <div>

                
                <p className={style["temp-two"]}>
                    <span className={style["likes-icon"]}></span>
                    {likes}
                </p>

                <p className={style["temp-two"]}>
                    <span className={style["players-icon"]}></span>
                    {playing}    
                </p>

            </div>

        </li>

    );
};

export default Home;