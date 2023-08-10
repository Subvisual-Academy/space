import Avatar from "../assets/avatar-profile.png";
import NavBar from "../components/navBar";
import Pencil from "../assets/pencil-icon.png";
import Suitcase from "../assets/role_icon.png";
import Pin from "../assets/location_icon.png";
import Discord from "../assets/discord_icon.png";
import Envelope from "../assets/email_icon.png";
import InvisibleLab from "../assets/invisible_lab_icon.png";

import List from "../components/list";
import Info from "../components/info";
import { GET } from "../utils/fetch";
import { useState, useEffect } from "react";

const current_user_id = 6; //localStorage.getItem("current");

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit" };
  return date.toLocaleString("en-US", options);
};

const getAnswers = async () => {
  var response = await GET("users/" + current_user_id + "/answers");
  return response;
};

const getQuestion = async (question_id) => {
  var response = await GET("questions/" + question_id);
  return response;
};

const getUserData = async () => {
  var response = await GET("users/" + current_user_id);
  return response;
};

const getSkills = async () => {
  var response = await GET("users/" + current_user_id + "/skills");
  return response.map((skill) => skill["name"]);
};

const getHobbies = async () => {
  var response = await GET("users/" + current_user_id + "/hobbies");
  return response.map((hobby) => hobby["name"]);
};

function Profile() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userData, setUserData] = useState({});
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    getAnswers().then((response) => {
      setAnswers(response);
    });
  }, []);

  useEffect(() => {
    getUserData().then((response) => setUserData(response));
  }, []);

  useEffect(() => {
    getSkills().then((response) => setSkills(response));
  }, [skills]);

  useEffect(() => {
    getHobbies().then((response) => setHobbies(response));
  }, [hobbies]);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="flex-none w-1/3">
          <div className="flex-col ml-32 mt-16">
            <img className="h-60 w-60" src={Avatar} alt="AvatarProfile" />

            <div className="mt-8 mb-8 text-white text-3xl">{userData.name}</div>

            <Info
              text="Company"
              icon={InvisibleLab}
              alt={"Invisible Lab icon"}
            />
            <Info text={userData.role} icon={Suitcase} alt={"Role icon"} />
            <Info
              text={userData.base_office}
              icon={Pin}
              alt={"Location icon"}
            />
            <Info text={userData.discord} icon={Discord} alt={"Discord icon"} />
            <Info text={userData.email} icon={Envelope} alt={"Email icon"} />

            <div className="text-white text-base mt-10 w-60">
              {" "}
              {userData.bio}{" "}
            </div>

            <button className="mt-10 w-40 h-9 bg-cerulean text-white text-base rounded-[6px]">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex">
            <div className="flex-none w-4/5">
              <div className="mt-16 w-full bg-lilac p-8 rounded-[20px] text-5xl">
                <div className="text-white text-xl">Skills</div>

                <List things={skills} />

                <div class="my-8 border-t-2 border-white"></div>

                <div className="text-white text-xl">Hobbies</div>

                <List things={hobbies} />
              </div>

              <div className="mt-10 mb-6 text-white text-xl">
                Weekly Answers
              </div>

              <div className="space-y-4">
                {answers.map((answer, index) => (
                  <div key={index}>
                    <div className="bg-dark-cyan text-white p-4 rounded-[20px]">
                      <p className="text-base"> {answer.question_id} </p>
                      <p className="text-xs">
                        {formatDate(answer.updated_at)}{" "}
                      </p>
                      <p className="text-base"> {answer.body} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
