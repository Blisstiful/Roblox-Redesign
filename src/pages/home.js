import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

import Friends from "./sections/friends";
import Games from "./sections/games";

const Home = () =>{
    return(

        <React.Fragment>

            <All.Header />

            <main id={style["main"]}>

                <section id={style["content"]}>

                    <h1 id={style["home-title"]}>Home</h1>

                    <section id={style["home-tab"]}>

                        <All.News />
                        <All.Searchbar hasSearchNav={true}/>
                        <All.Chat />

                    </section>

                    <Games />

                    <Friends />

                </section>

            </main>

            <All.Footer />

        </React.Fragment>

    );
};

export default Home;