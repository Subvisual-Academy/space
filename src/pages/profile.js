import Avatar from "../assets/avatar-profile.png";
import NavBar from "../components/navBar";
import Pencil from "../assets/pencil-icon.png";
import List from "../components/list";
import { GET } from "../utils/fetch";
import { useState, useEffect } from "react";

const skills = [
  "Frontend dev",
  "Java",
  "Web Dev",
  "Python",
  "Backend dev",
  "React",
  "Ruby",
  "CSS",
  "HTML",
  "JavaScript",
  "TypeScript",
  "Git/Github",
  "Node.js",
  "Branding",
  "Creative Coding",
  "NextJS",
  "Interface Design",
  "Graphic Design",
  "Database",
  "Usability testing",
  "Figma",
  "Blender",
  "Elixir",
  "User research",
  "Phoenix",
  "Adobe Creative Cloud",
];

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
  var response = await GET("question/" + question_id);
  return response;
};

const getUserData = async () => {
  var response = await GET("users/" + current_user_id);
  return response;
};

function Profile() {
  const [answers, setAnswers] = useState([]);
  const [answersFetched, setAnswersFetched] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsFetched, setQuestionsFetched] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getAnswers().then((response) => {
      setAnswers(response);
      setAnswersFetched(true);
    });
  }, []);

  useEffect(() => {
    getUserData().then((response) => setUserData(response));
  }, []);

  useEffect(() => {
    Promise.all(answers.map((answer) => getQuestion(answer.question_id))).then(
      (questionsData) => {
        setQuestions(questionsData);
        setQuestionsFetched(true);
        console.log(questionsData);
      }
    );
  }, [answers]);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="flex-none w-1/3">
          <div className="flex-col ml-32 mt-16">
            <img
              className="h-[243px] w-[243px]"
              src={Avatar}
              alt="AvatarProfile"
            />

            <div className="text-white text-xl mt-[34px]">
              {" "}
              {userData.company}{" "}
            </div>

            <div className="text-white text-xl mt-4"> {userData.role} </div>

            <div className="text-white text-xl mt-4"> {userData.email} </div>

            <div className="text-white text-xl mt-4"> {userData.discord} </div>

            <div className="text-white text-xl mt-4">
              {" "}
              {userData.base_office}{" "}
            </div>

            <div className="text-white text-base mt-8 w-[245px]">
              {" "}
              {userData.bio}{" "}
            </div>

            <button className="mt-10 w-[157px] h-[36px] bg-cerulean text-white text-base rounded-[6px]">
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

                <List things={skills} />
              </div>

              <div className="mt-10 mb-6 text-white text-xl">
                Weekly Answers
              </div>

              <div className="space-y-4">
                {answersFetched && questionsFetched ? (
                  answers.map((answer, index) => (
                    <div key={index}>
                      <div className="bg-dark-cyan text-white p-4 rounded-[20px]">
                        <p className="text-base"> {answer.question_id} </p>
                        <p className="text-xs">
                          {" "}
                          {formatDate(answer.updated_at)}{" "}
                        </p>
                        <p className="text-base"> {answer.body} </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-white">Loading answers...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
