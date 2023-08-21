import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

import image from "../images/something.jpg";

const Home = () =>{
    let amountoffriends = 32;

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

                <section id={style["friends"]}>

                    <h2>Friends ({amountoffriends})</h2>

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

                    </ul>

                </section>

            </main>

            {/* FOOTER GOES HERE */}

        </React.Fragment>

    );
};

//wrap all of this in an anchor tag and make sure to fix the styles when that happens 
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

// Will need to add activity status here as well, maybe as a pseudo element
const Friend = ({headshot, name, link}) =>{
    return(
        <li>
            <a href={link}>

                <img src={headshot} alt={name}/>
                {name}

            </a>
        </li>
    );
};

export default Home;