import React from "react";
import Background from "../assets/beautiful-shining-stars-night-sky 1.png";
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

const getFriendEmail = async () => {
  const current_user = localStorage.getItem("current");
  var friend_email = await GET("users/" + current_user + "/friends").then(
    (response) => response["email"]
  );
  return friend_email;
};

function Friend() {
  const [friendEmail, setFriendEmail] = useState("");
  useEffect(() => {
    getFriendEmail().then((response) => setFriendEmail(response));
  }, []);

  console.log(friendEmail);

  return (
    <div className="relative h-screen">
      <bkg className="absolute inset-0 z-0">
        <img
          className="relative z-10 h-full w-full object-cover"
          src={Background}
          alt="Universe Background"
        />
      </bkg>
      
      <div className="relative z-10">
        <NavBar />
        <div className="flex h-screen">
          <left>
            <div className="w-[50%] text-white ml-48 mt-24 text-5xl font-bold">
              Your friend this week is...
            </div>

            <div className="text-white ml-48 mt-48 text-3xl font-bold">
              {friendEmail}!
            </div>
            
            <desc className="w-[50%] text-white mr-52 mb-64 text-base">
              Contact your friend of the week and choose together a quick
              activity you’d like to do together. It can be just a 15 min online
              coffee chat or any other entertainment to your taste. For
              inspiration, we prepared a list of cool quick games you could try.
              Go check it out!{" "}
            </desc>

            <button className="w-16 h-12 bg-back-gray text-white mb-28 ml-28 rounded-[7px]">
              Go back
            </button>
          </left>

          <right className="w-2/3 bg-bkg-purple">
            <div className="text-white mt-32 text-center text-3xl">
              Suggested Activities
            </div>

            <div className="grid gap-8 justify-center mt-16">
              {activity.map((activity) => (
                <button class="w-60 h-16 bg-button-gray text-white rounded-[27px] shadow-md">
                  {activity}
                </button>
              ))}
            </div>
          </right>
        </div>
      </div>
    </div>
  );
}

export default Friend;
