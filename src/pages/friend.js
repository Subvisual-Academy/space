import React from "react";
import Background from "../assets/beautiful-shining-stars-night-sky.png";
import AstronautPointing from "../assets/astronaut pointing 1.png";
import AstronautChilling from "../assets/astronaut-chilling.png";
import Avatar from "../assets/avatar-profile.png";

import Skriblio from "../assets/skriblio.png";
import CardGames from "../assets/card_games.png";
import Battleship from "../assets/battleship.png";
import OnlineMiniGames from "../assets/online_mini_games.png";
import Chess from "../assets/chess.png";
import TriviaGames from "../assets/trivia_games.png";

import { useEffect } from "react";
import NavBar from "../components/navBar";
import ActivityCard from "../components/activity";
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
    getFriend().then((response) => {
      if (response.error) {
        setNotPaired(true);
      } else {
        setFriendData(response);
      }
    });
  }, [notPaired]);

  return (
    <div className="font-medium">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <NavBar />

        <div className="flex">
          {notPaired ? (
            <div className="w-2/3 h-full">
              <div className="ml-32">
                <div className="text-white mt-9 text-5xl font-bold">
                  Vacation week!
                </div>

                <div className="w-7/12 mt-6 text-base text-white">
                  Well, there ain't one week like the other, right?
                  <br />
                  <br /> This time you haven't got anyone, no worries. Maybe,
                  it's just a sign from the Universe to have some me-time, get a
                  nice drink and devote 15 min to yourself. Don't forget to
                  answer the question of the week and get back next week!{" "}
                </div>

                <img
                  className="mt-8 h-2/3 relative z-10"
                  src={AstronautChilling}
                  alt="AstronautChilling"
                />
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="text-white ml-32 mt-9 text-5xl font-bold">
                  Your friend this week is...
                </div>

                <div className="flex items-center mt-16 ml-96">
                  <img className="w-24 h-24" src={Avatar} alt="AvatarProfile" />

                  <div className="ml-4 text-xl text-white">
                    {" "}
                    {friendData.name}{" "}
                  </div>
                </div>

                <div className="flex">
                  <div className="w-5/12 ml-18 h-3/4">
                    <img src={AstronautPointing} alt="AstronautPointing" />
                  </div>

                  <div className="w-1/2 items-center mt-36">
                    <div className="items-center">
                      <div className="flex text-base">
                        <div className="text-white"> Email: </div>
                        <div className="ml-2 text-highlighted-button-blue">
                          {" "}
                          {friendData.email}{" "}
                        </div>
                      </div>

                      <div className="flex text-base text-white">
                        <div className="text-white"> Discord: </div>
                        <div className="ml-2 text-highlighted-button-blue">
                          {" "}
                          {friendData.discord}{" "}
                        </div>
                      </div>

                      <div className="mt-4 w-1/1 text-base text-white">
                        Contact your friend of the week and choose together a
                        quick activity you’d like to do together. It can be just
                        a 15 min online coffee chat or any other entertainment
                        to your taste. For inspiration, we prepared a list of
                        cool quick games you could try. Go check it out!{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

          <div className="w-1/3 h-1/1 bg-bkg-purple flex-shrink-0">
            {notPaired ? (
              <div className="text-white mt-10 text-center text-2xl font-bold">
                Suggested Activities for next week
              </div>
            ) : (
              <div className="text-white mt-10 text-center text-2xl font-bold">
                Suggested Activities to do with {friendData.name}
              </div>
            )}

            <div className="grid gap-14 justify-center mt-10">
              <ActivityCard
                url="https://skribbl.io"
                image={`url(${Skriblio})`}
                defaultText="Skribl.io"
                hoverText="Draw and guess what your friends are drawing"
              />

              <ActivityCard
                url="https://playingcards.io/"
                image={`url(${CardGames})`}
                defaultText="Card Games"
                hoverText="Play from a selection of card games!"
              />

              <ActivityCard
                url="http://en.battleship-game.org/"
                image={`url(${Battleship})`}
                defaultText="Battleship"
                hoverText="Play the online version of the classic battleship game"
              />

              <ActivityCard
                url="https://toughlovearena.com/"
                image={`url(${OnlineMiniGames})`}
                defaultText="Online mini-games"
                hoverText="Play a fun mini-game with your friend!"
              />

              <ActivityCard
                url="https://www.chess.com"
                image={`url(${Chess})`}
                defaultText="Chess"
                hoverText="Play the classic chess game with your friend"
              />

              <ActivityCard
                url="https://www.trivianerd.com/"
                image={`url(${TriviaGames})`}
                defaultText="Trivia Games"
                hoverText="Answer questions about any topic!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
