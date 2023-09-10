import React from "react";
import style from "./games.module.css";

const Games = () =>{
	return(
		<section id={style["games"]}>

			<h2>Games</h2>

			<ul id={style["games-nav"]}>

				<li className={style["current"]}><button>Continue</button></li>
				<li><button>Favorites</button></li>
				<li><button>Recommended</button></li>
				<li><button>More </button></li>

			</ul>

			<ul id={style["games-list"]}>

				{/*Maybe if the screen size is large then the categories could just be displayed
				instead of having a button up top. like what roblox does rn but with favorites,
				recommended, etc. etc.*/}

				<Game
				title="Phantom Forces"
				thumbnail="https://tr.rbxcdn.com/f7b2d115353bd891c7613d84741565fc/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="92%"
				playing="5.2k"
				/>

				<Game
				title="Dingus"
				thumbnail="https://tr.rbxcdn.com/b8da030dbc5591691f34b1aa134bb1b5/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="89%"
				playing="2.9k"
				/>

				
				<Game
				title="Apocalypse Rising 2"
				thumbnail="https://tr.rbxcdn.com/64698343fd5865efa5b9ce6379d233c3/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="88%"
				playing="3.5k"
				/>

				
				<Game
				title="Blood & Iron"
				thumbnail="https://tr.rbxcdn.com/c4b841cc67b18df8de8ff368ad9182ac/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="86%"
				playing="578"
				/>

				
				<Game
				title="Verdant Moon"
				thumbnail="https://tr.rbxcdn.com/db3b8b7e909857f468e2366198f38be6/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="74%"
				playing="19"
				/>

				<Game
				title="DEAD AHEAD"
				thumbnail="https://tr.rbxcdn.com/e9bb1baa1f2607d9a37a330e6595838a/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="86%"
				playing="68"
				/>

				<Game
				title="[ALPHA] The Scorch"
				thumbnail="https://tr.rbxcdn.com/ae8073c1d15cb38b4139c37a4a67ee86/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="70%"
				playing="55"
				/>

				<Game
				title="Anime Last Stand"
				thumbnail="https://tr.rbxcdn.com/8e019a60828b147e7aab9e37caf21336/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="1%"
				playing="0"
				/>

				<Game
				title="(200m) obby but you're a bird"
				thumbnail="https://tr.rbxcdn.com/87953f5627eea759a8aabde310bc8d73/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="77%"
				playing="4.4k"
				/>

				<Game
				title="eat drywall"
				thumbnail="https://tr.rbxcdn.com/0b41ac3888d8bde4d4e5cbc98c20c40b/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="83%"
				playing="153"
				/>

				<Game
				title="Evade"
				thumbnail="https://tr.rbxcdn.com/e7fa8ab70cd4454b5cf8bd781284ca7b/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="94%"
				playing="39.6k"
				/>

				<Game
				title="Natural Disaster Survival"
				thumbnail="https://tr.rbxcdn.com/0ae67ae1039583a9750be9a14886c471/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="90%"
				playing="11.6k"
				/>
				
				<Game
				title="get divorced at 3am"
				thumbnail="https://tr.rbxcdn.com/9fbb3025e3d94831e4059ce9d948d4e7/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="86%"
				playing="1.3k"
				/>
				
				<Game
				title="Theme Park Tycoon 2"
				thumbnail="https://tr.rbxcdn.com/fb51d6471e222f6203b5940132d82938/512/512/Image/Png"
				alt="Logo for Phantom Forces"
				likes="88%"
				playing="12.9k"
				/>

				<Game
				title="The Stalker: Reborn"
				thumbnail="https://tr.rbxcdn.com/e6df58f526566f34d76ba3606518f5bf/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="90%"
				playing="27"
				/>

				<Game
				title="Mad Paintball [FPS]"
				thumbnail="https://tr.rbxcdn.com/88fa23444db0a910abfa9ab48297caa7/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="81%"
				playing="90"
				/>

				<Game
				title="Framed!"
				thumbnail="https://tr.rbxcdn.com/a9b8a245e706f2ba7411627967e906bc/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="78%"
				playing="58"
				/>

				<Game
				title="Zombies are Attacking McDonalds!"
				thumbnail="https://tr.rbxcdn.com/d53bebecc3dc8389de829168b43bcf77/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="85%"
				playing="30"
				/>
				
				<Game
				title="Energy Assault"
				thumbnail="https://tr.rbxcdn.com/0eda963c9e0b2f6df8bb8cba7083866b/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="91%"
				playing="112"
				/>

				<Game
				title="Emergency Reponse: Liberty County"
				thumbnail="https://tr.rbxcdn.com/6302617c3ea32ed69beb4c2ff041f32a/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="89%"
				playing="14.7k"
				/>
				
				<Game
				title="Become Forklift Certified Obby"
				thumbnail="https://tr.rbxcdn.com/90d8482f23cefdb3e1040e064ea171f4/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="39%"
				playing="640"
				/>

				<Game
				title="Write a Letter"
				thumbnail="https://tr.rbxcdn.com/e62e2dae0020516e7c8a56ec8d4d9052/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="95%"
				playing="1.1k"
				/>

				<Game
				title="Work at a Pizza Place"
				thumbnail="https://tr.rbxcdn.com/eb147449869e1b35f0daf0177a71185d/512/512/Image/Png"
				alt="Logo for Phantom Forces"
				likes="87%"
				playing="560"
				/>

				<Game
				title="Witching Hour"
				thumbnail="https://tr.rbxcdn.com/1cc7c2d278f1a6c0865b55346bf01d1c/150/150/Image/Png"
				alt="Logo for Phantom Forces"
				likes="83%"
				playing="29"
				/>

			</ul>

		</section>
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

export default Games;