import React from "react";
import style from "./news.module.css";

const News = () =>{
	return(
		<div id={style["news"]}>

			<h4>News:</h4>

			<article>

				<a href="/Roblox-Redesign/interest">

					<hgroup>

						<h5>The Scorch Dev Update</h5>
						<h6>by @<cite>Silentude</cite></h6>
					
					</hgroup>

					<p>Hey all, I've decided to completely rework the game to go from the tired old system to one I believe will be better for the community.</p>

				</a>

			</article>

		</div>
	);
};

export default News;