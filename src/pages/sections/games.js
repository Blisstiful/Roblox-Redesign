import React from "react";
import style from "./games.module.css";

import UserData from "../../user-data.json";

const Games = () =>{
	const GamesData = UserData.games;

	const ContinueData = GamesData[0].continue;
	
	let displayGames = [];
	let gameCounter = 0;

	const formatPlayCounter = (num, digits) =>{

		const lookup = [
			{ value: 1, symbol: "" },
			{ value: 1e3, symbol: "k" },
			{ value: 1e6, symbol: "M" },
		];

		const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

		let item = lookup.slice().reverse().find(function(item){
			return num >= item.value;
		});
		
		return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
		/* https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900 */
	}
	
	//Game Data & Handling
	const handleGameData = (game) =>{
		gameCounter += 1;

		displayGames.push(
			<Game
				title={game["game-name"]}
				thumbnail={game["game-thumbnail"]}

				alt="placeholder for now"
				likes={game["game-ratio"].toString().concat("%")}

				playing={formatPlayCounter(game["game-playing"], 1)}
				key={gameCounter}
			/>
		)

		return displayGames;
	}

	ContinueData.forEach(handleGameData)

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

				{displayGames}

			</ul>

		</section>
	);
};

const Game = ({title, thumbnail, alt, likes, playing}) =>{
    return(

        <li>

			<a href="/Roblox-Redesign/interest">

				<img src={thumbnail} alt={alt}/>
				<p className={style["game-title"]}>{title}</p>

				<div>

					{/*This will need to be grid items */}
					<p className={style["players"]}>
						<span className={style["likes-icon"]}></span>
						{likes}
					</p>

					<p className={style["players"]}>
						<span className={style["players-icon"]}></span>
						{playing}    
					</p>

				</div>

			</a>

        </li>

    );
};

export default Games;