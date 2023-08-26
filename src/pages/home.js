import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

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
                            thumbnail="https://tr.rbxcdn.com/f7b2d115353bd891c7613d84741565fc/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Dingus"
                            thumbnail="https://tr.rbxcdn.com/b8da030dbc5591691f34b1aa134bb1b5/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Apocalypse Rising 2"
                            thumbnail="https://tr.rbxcdn.com/64698343fd5865efa5b9ce6379d233c3/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Blood & Iron"
                            thumbnail="https://tr.rbxcdn.com/c4b841cc67b18df8de8ff368ad9182ac/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            
                            <Game
                            title="Verdant Moon"
                            thumbnail="https://tr.rbxcdn.com/db3b8b7e909857f468e2366198f38be6/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="DEAD AHEAD"
                            thumbnail="https://tr.rbxcdn.com/e9bb1baa1f2607d9a37a330e6595838a/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="The Scorch"
                            thumbnail="https://tr.rbxcdn.com/ae8073c1d15cb38b4139c37a4a67ee86/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Anime Last Stand"
                            thumbnail="https://tr.rbxcdn.com/8e019a60828b147e7aab9e37caf21336/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="1%"
                            playing="1"
                            />

                            <Game
                            title="(200m) obby but you're a bird"
                            thumbnail="https://tr.rbxcdn.com/87953f5627eea759a8aabde310bc8d73/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="eat drywall"
                            thumbnail="https://tr.rbxcdn.com/0b41ac3888d8bde4d4e5cbc98c20c40b/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Evade"
                            thumbnail="https://tr.rbxcdn.com/e7fa8ab70cd4454b5cf8bd781284ca7b/150/150/Image/Png"
                            alt="Logo for Phantom Forces"
                            likes="80%"
                            playing="5k"
                            />

                            <Game
                            title="Natural Disaster Survival"
                            thumbnail="https://tr.rbxcdn.com/0ae67ae1039583a9750be9a14886c471/150/150/Image/Png"
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

                {/*This will need to be grid items */}
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