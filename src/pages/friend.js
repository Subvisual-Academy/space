import React from "react";
import Background from "../assets/beautiful-shining-stars-night-sky 1.png";
import AstronautPointing from "../assets/astronaut pointing 1.png";
import AstronautChilling from "../assets/astronaut-chilling.png";
import Avatar from "../assets/Avatar profile.png"
import { useEffect } from "react";
import NavBar from "../components/navBar";
import { GET } from "../utils/fetch";
import { useState } from "react";

const activity = [
  "Doodle Race",
  "Cards Against Humanity",
  "Trivia Games",
  "Chess",
  "Code Names",
  "Hangman",
  "Checkers",
];

const current_user_id = 1; //localStorage.getItem("current");

const getFriend = async () => {
  var response = await GET("/friends/" + current_user_id);
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
      {notPaired ? (
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
              <div className="w-2/3 h-full">
                <div className="text-white ml-72 mt-20 text-5xl font-bold">
                  Vacation week!
                </div>

                <div className="w-[50%] ml-72 mt-16 text-base text-white">
                  Yey, look at you! So lucky, this week you’ve got a little
                  vacation from this task. Now, when you have more time, make
                  sure you answer the question of this week and relax. See you
                  next week, we’ve got someone very cool in store for you.{" "}
                </div>
                
                <img
                  className="ml-96 mt-12 h-3/5 relative z-10"
                  src={AstronautChilling}
                  alt="AstronautChilling"
                />
              </div>

              <div className="w-1/3 h-[1080px] bg-bkg-purple flex-shrink-0">
                <div className="text-white mt-[30px] text-center text-[32px] font-bold">
                  Suggested Activities
                </div>

                <div className="grid gap-8 justify-center mt-12">
                  {activity.map((activity) => (
                    <button class="w-72 h-16 bg-button-gray text-white font-bold rounded-[27px] shadow-md">
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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

                  <div className="w-[35%] text-base text-white">
                      Contact your friend of the week and choose together a quick activity
                      you’d like to do together. It can be just a 15 min online coffee chat
                      or any other entertainment to your taste. For inspiration, we prepared
                      a list of cool quick games you could try. Go check it out!{" "}
                  </div>
                </div>
              </div>

              <div className="w-1/3 h-[1080px] bg-bkg-purple flex-shrink-0">
                <div className="text-white mt-[30px] text-center text-[32px] font-bold">
                  Suggested Activities
                </div>

                <div className="grid gap-8 justify-center mt-12">
                  {activity.map((activity) => (
                    <button class="w-72 h-16 bg-button-gray text-white font-bold rounded-[27px] shadow-md">
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Friend;