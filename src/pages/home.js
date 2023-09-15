import React from "react";
import style from "./home.module.css";
import * as All from "../components/index";

import Friends from "./sections/friends";
import Games from "./sections/games";

const Home = () =>{
    return(

        <React.Fragment>

            <All.NavBar />

            <main id={style["main"]}>

                <All.NavMenu />

                <section id={style["content"]}>

                    <h1 id={style["home-title"]}>Home</h1>

                    <section id={style["home-tab"]}>

                        <All.Searchbar hasSearchNav={true}/>

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