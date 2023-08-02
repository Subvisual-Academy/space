import React from "react";
import Background from "../assets/beautiful-shining-stars-night-sky 1.png";
import AstronautPointing from "../assets/astronaut pointing 1.png";
import AstronautChilling from "../assets/astronaut-chilling.png";
import Avatar from "../assets/avatar-profile.png";

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

const current_user_id = localStorage.getItem("current");

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
    if (friendData.id === current_user_id) {
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
                Yey, look at you! So lucky, this week you’ve got a little
                vacation from this task. Now, when you have more time, make sure
                you answer the question of this week and relax. See you next
                week, we’ve got someone very cool in store for you.{" "}
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
                <div className="text-white ml-72 mt-20 text-5xl font-bold">
                  Your friend this week is...
                </div>

                <div className="items-center mt-28 p-4 flex gap-8">
                  <img
                    className="ml-96 h-3/5"
                    src={Avatar}
                    alt="AvatarProfile"
                  />

                  <div className="text-white text-3xl font-bold">
                    {friendData.email}!
                  </div>
                </div>

                <div className="items-center mt-2 flex">
                  <img
                    className="h-3/5"
                    src={AstronautPointing}
                    alt="AstronautPointing"
                  />

                  <div className="w-[45%] text-base text-white">
                    Contact your friend of the week and choose together a quick
                    activity you’d like to do together. It can be just a 15 min
                    online coffee chat or any other entertainment to your taste.
                    For inspiration, we prepared a list of cool quick games you
                    could try. Go check it out!{" "}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-1/3 h-[1080px] bg-bkg-purple flex-shrink-0">
            <div className="text-white mt-20 text-center text-[32px] font-bold">
              Suggested Activities
            </div>

            <div className="grid gap-16 justify-center mt-12">
              <Link to="https://skribbl.io">
                <button
                  className="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Skriblio})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText =
                      "Draw and guess what your friends are drawing")
                  }
                  onMouseLeave={(e) => (e.target.innerText = "Skribl.io")}
                >
                  Skribl.io
                </button>
              </Link>

              <Link to="https://playingcards.io/">
                <button
                  class="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${CardGames})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText =
                      "Play from a selection of card games!")
                  }
                  onMouseLeave={(e) => (e.target.innerText = "Cards Games")}
                >
                  Cards Games
                </button>
              </Link>

              <Link to="http://en.battleship-game.org/">
                <button
                  class="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Battleship})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText =
                      "Play the online version of the classic battleship game")
                  }
                  onMouseLeave={(e) => (e.target.innerText = "Battleship")}
                >
                  Battleship
                </button>
              </Link>

              <Link to="https://toughlovearena.com/">
                <button
                  class="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${OnlineMiniGames})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText =
                      "Play a fun mini-game with your friend!")
                  }
                  onMouseLeave={(e) =>
                    (e.target.innerText = "Online mini-games")
                  }
                >
                  Online mini-games
                </button>
              </Link>

              <Link to="https://www.chess.com">
                <button
                  class="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${Chess})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText =
                      "Play the classic chess game with your friend")
                  }
                  onMouseLeave={(e) => (e.target.innerText = "Chess")}
                >
                  Chess
                </button>
              </Link>

              <Link to="https://www.trivianerd.com/">
                <button
                  class="w-72 h-20 relative flex flex-col items-center justify-center w-72 h-20 rounded-[27px] text-white text-lg font-bold bg-cover bg-center focus:border-4 focus:border-white"
                  style={{ backgroundImage: `url(${TriviaGames})` }}
                  onMouseOver={(e) =>
                    (e.target.innerText = "Answer questions about any topic!")
                  }
                  onMouseLeave={(e) => (e.target.innerText = "Trivia Games")}
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
