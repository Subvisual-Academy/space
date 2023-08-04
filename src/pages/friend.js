import React from "react";
import Background from "../assets/beautiful-shining-stars-night-sky 1.png";
import AstronautPointing from "../assets/astronaut pointing 1.png";
import AstronautChilling from "../assets/astronaut-chilling.png";
import Avatar from "../assets/Avatar profile.png";

import Skriblio from "../assets/skriblio.png";
import CardGames from "../assets/card_games.png";
import Battleship from "../assets/battleship.png";
import OnlineMiniGames from "../assets/online_mini_games.png";
import Chess from "../assets/chess.png";
import TriviaGames from "../assets/trivia_games.png";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/navBar";
import { GET } from "../utils/fetch";
import { useState } from "react";

const current_user_id = 10//localStorage.getItem("current");

const getFriend = async () => {
  var response = await GET("weekly_friends/" + current_user_id);
  return response;
};

function Friend() {
  const [friendData, setFriendData] = useState({ email: "", id: "" });
  const [notPaired, setNotPaired] = useState(false);

  useEffect(() => {
    getFriend().then((response) => setFriendData(response));
  }, [notPaired]);

  useEffect(() => {
    if (friendData.id === parseInt(current_user_id)) {
      setNotPaired(true);
    }
  }, [notPaired, friendData]);

  return (
    <div>
      <div className="absolute inset-0 z-0">
        <img
          className="relative z-10 h-1/1 w-full object-cover"
          src={Background}
          alt="Universe Background"
        />
      </div>

      <div className="relative z-10">
        <NavBar />
        <div className="flex">
          {notPaired ? (
            <div className="w-2/3 h-full">
              <div className="text-white ml-72 mt-20 text-5xl font-bold">
                Vacation week!
              </div>

              <div className="w-[50%] ml-72 mt-16 text-base text-white">
                Yey, look at you! So lucky, this week you've got a little
                vacation from this task. Now, when you have more time, make sure
                you answer the question of this week and relax. See you next
                week, we've got someone very cool in store for you.{" "}
              </div>

              <img
                className="ml-96 mt-12 h-3/5 relative z-10"
                src={AstronautChilling}
                alt="AstronautChilling"
              />
            </div>
          ) : (
            <div>
              <div className="w-2/3 h-full">
                <div className="text-white ml-[7.5rem] mt-[2.19rem] text-5xl font-bold">
                  Your friend this week is...
                </div>

                <div className="flex items-center mt-[4.31rem] ml-[24.25rem]">
                  <img
                    className="w-[6rem] h-[6rem] h-3/5"
                    src={Avatar}
                    alt="AvatarProfile"
                  />

                  <div className="ml-[1rem] text-[1.25rem] text-white"> Name </div>
                </div>

                <div className="flex">
                  <img
                    className="ml-12 w-[25.5rem] h-[34.5rem]"
                    src={AstronautPointing}
                    alt="AstronautPointing"
                  />

                  <div className="items-center ml-2 flex">
                    
                    <div className="flex-col items-center">
                      
                      <div className="flex text-[1rem]">
                        <div className="text-white"> Email: </div>
                        <div className="ml-2 text-highlighted-button-blue"> example </div>
                      </div>

                      <div className="flex text-[1rem] text-white">
                        <div className="text-white"> Discord: </div>
                        <div className="ml-2 text-highlighted-button-blue"> example </div>
                      </div>

                      <div className="mt-[1rem] text-[1rem] text-white">
                        Contact your friend of the week and choose together a quick
                        activity you’d like to do together. It can be just a 15 min
                        online coffee chat or any other entertainment to your taste.
                        For inspiration, we prepared a list of cool quick games you
                        could try. Go check it out!{" "}
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>
          )}

          <div className="w-1/3 h-[1080px] bg-bkg-purple flex-shrink-0">
            <div className="text-white mt-[2.19rem] text-center text-[1.25rem] font-bold">
              Suggested Activities to do with Name
            </div>

            <div className="grid gap-[3.5rem] justify-center mt-[2.5rem]">
              <Link to="https://skribbl.io">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Skriblio})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Draw and guess what your friends are drawing";
                    e.target.style.fontSize = "1rem"; 
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Skribl.io";
                    e.target.style.fontSize = "1.25rem"
                  }}
                >
                  Skribl.io
                </button>
              </Link>

              <Link to="https://playingcards.io/">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${CardGames})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Play from a selection of card games!";
                    e.target.style.fontSize = "1rem";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Cards Games";
                    e.target.style.fontSize = "1.25rem";
                  }}
                >
                  Cards Games
                </button>
              </Link>

              <Link to="http://en.battleship-game.org/">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Battleship})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Play the online version of the classic battleship game";
                    e.target.style.fontSize = "1rem";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Battleship";
                    e.target.style.fontSize = "1.25rem";
                  }}
                >
                  Battleship
                </button>
              </Link>

              <Link to="https://toughlovearena.com/">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${OnlineMiniGames})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Play a fun mini-game with your friend!";
                    e.target.style.fontSize = "1rem";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Online mini-games";
                    e.target.style.fontSize = "1.25rem";
                  }}
                >
                  Online mini-games
                </button>
              </Link>

              <Link to="https://www.chess.com">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Chess})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Play the classic chess game with your friend";
                    e.target.style.fontSize = "1rem";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Chess";
                    e.target.style.fontSize = "1.25rem";
                  }}
                >
                  Chess
                </button>
              </Link>

              <Link to="https://www.trivianerd.com/">
                <button
                  className="relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${TriviaGames})` }}
                  onMouseOver={(e) => {
                    e.target.innerText = "Answer questions about any topic!";
                    e.target.style.fontSize = "1.25rem"
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "Trivia Games";
                    e.target.style.fontSize = "1rem";
                  }}
                >
                  Trivia Games
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
