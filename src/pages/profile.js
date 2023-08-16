import Avatar from "../assets/avatar-profile.png";
import NavBar from "../components/navBar";
import Pencil from "../assets/pencil-icon.png";
import Suitcase from "../assets/role_icon.png";
import Pin from "../assets/location_icon.png";
import Discord from "../assets/discord_icon.png";
import Envelope from "../assets/email_icon.png";
import InvisibleLab from "../assets/invisible_lab_icon.png";
import Onda from "../assets/onda_logo.png";
import Sub from "../assets/sub_logo.png";
import PinkRoom from "../assets/pink_room_logo.png";
import Universe from "../assets/universe.jpg";

import List from "../components/list";
import Info from "../components/info";
import {
  getAnswers,
  getSkills,
  getHobbies,
  getUserData,
  getQuestion,
} from "../utils/getters";
import { useState, useEffect } from "react";

const current_user_id = localStorage.getItem("current");

const companyLogos = {
  Subvisual: Sub,
  "Invisible lab": InvisibleLab,
  Onda: Onda,
  "Pink Room": PinkRoom,
  Universe: Universe,
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit" };
  return date.toLocaleString("en-US", options);
};

function Profile() {
  const [answers, setAnswers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [company, setCompany] = useState([]);
  const [companyLogo, setCompanyLogo] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getUserData(current_user_id).then((response) => {
      setUserData(response);
      setCompany(response.company_name);
      setCompanyLogo(companyLogos[company]);
    });
  }, [userData, company]);

  useEffect(() => {
    getSkills(current_user_id).then((response) => setSkills(response));
  }, []);

  useEffect(() => {
    getHobbies(current_user_id).then((response) => setHobbies(response));
  }, []);

  useEffect(() => {
    getAnswers(current_user_id).then(async (response) => {
      setAnswers(response);
      const questionPromises = response.map((answer) =>
        getQuestion(answer.question_id)
      );
      const questionResponses = await Promise.all(questionPromises);
      const questions = questionResponses.map((response) => response["body"]);
      setQuestions(questions);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="flex-none w-2/5">
          <div className="flex-col ml-32 mt-16">
            <img className="h-60 w-60" src={Avatar} alt="AvatarProfile" />

            <div className="mt-8 mb-8 text-white text-3xl">{userData.name}</div>

            <Info text={company} icon={companyLogo} alt={"Company Logo"} />
            <Info text={userData.role} icon={Suitcase} alt={"Role icon"} />
            <Info text={userData.location} icon={Pin} alt={"Location icon"} />
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
          <div className="flex-none flex-col w-11/12">
            <div className="mt-16 bg-lilac p-8 rounded-[20px] text-5xl">
              <div className="flex items-center">
                <div className="flex-none w-11/12 text-white text-xl">
                  Skills
                </div>
                <div className="w-1/12 text-white text-base">Edit</div>
                <img className="h-6 w-6" src={Pencil} alt="Pencil Icon" />
              </div>

              <List items={skills} />

              <div class="my-8 border-t-2 border-white"></div>

              <div className="flex items-center">
                <div className="flex-none w-11/12 text-white text-xl">
                  Hobbies
                </div>
                <div className="w-1/12 text-white text-base">Edit</div>
                <img className="h-6 w-6" src={Pencil} alt="Pencil Icon" />
              </div>

              <List items={hobbies} />
            </div>

            <div className="mt-10 mb-6 text-white text-xl">Weekly Answers</div>

            {answers.map((answer, index) => (
              <div key={index}>
                <div className="bg-dark-cyan text-white mb-4 p-4 rounded-[20px]">
                  <p className="text-base"> {questions[index]} </p>
                  <p className="text-xs">{formatDate(answer.updated_at)} </p>
                  <div className="text-base break-all"> {answer.body} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
