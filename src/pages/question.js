import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import Vector from "../assets/Vector.svg";
import Enter from "../assets/Enter_icon.svg";
import { useNavigate } from "react-router-dom";

async function getAPIData(url) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    credentials: "same-origin",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const json = await response.json();
  return json;
}

async function post(url, body) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const json = await response.json();
  return json;
}

const getQuestion = async () => {
  var question_id = await getAPIData("weekly_question").then(
    (response) => response["question_id"]
  );
  var content = await getAPIData("questions/" + question_id.toString()).then(
    (response) => response["content"]
  );
  return content;
};

const getAnswers = async () => {
  var answers = await getAPIData("answers").then((response) => {
    var ret = []
    for(let i=0;i<response.length;i++){
      ret.push({
        email: response[i]["email"]
      })
    }
    return ret;
  });
  return answers;
};

function Question() {

  const [content, setContent] = useState("");
  //const [content, setContent] = useState("");
  var noAnswers = true;
  let navigate = useNavigate();

  getQuestion().then((response) => setContent(response));
  //getAnswers().then((response) => setAnswers(response));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const answer = data.get("answer");
    var question_id = await getAPIData(
      process.env.REACT_APP_API_URL + "weekly_question"
    ).then((response) => response["question_id"]);
    const user = localStorage.getItem("current");
    await post("answers", {
      body: answer,
      user_id: user,
      question_id: question_id,
    });
  };

  const renderAnswer = (body, email) => (
    <div className="bg-dove-gray p-4 flex flex-col rounded-3xl h-auto w-72">
      <div className="text-2xl">{email}</div>
      <div className="text-base pt-4">{body}</div>
    </div>
  );

  return (
    <div className="audio">
      <NavBar />
      <div className="bg-cod-gray absolute h-full w-full flex items-start flex-auto">
        <div>
          <h1 className="text-white m-32 text-5xl">{content}</h1>
          <form className="ml-32 open-s" onSubmit={handleSubmit}>
            <input
              name="answer"
              className="bg-transparent border-none outline-0 placeholder:text-dove-gray max-w-xl text-gray text-2xl w-full"
              placeholder="Type your answer here"
            />
            <div className="bg-white h-1 max-w-xl min-w-min mt-2" />
            <div className="flex gap-8 mt-8">
              <button
                className="bg-cornflower-blue rounded-lg p-4 flex text-white"
                type="submit"
              >
                OK
                <img
                  className="pl-4 pt-1"
                  src={Vector}
                  alt="Space Center Logo"
                />
              </button>
              <div className="flex">
                <div className="mt-2 text-2xl text-dove-gray">press </div>
                <img className="ml-2" src={Enter} alt="Space Center Logo" />
              </div>
            </div>
            <button
              className="bg-dove-gray p-2 mt-80 rounded-lg text-white text-sm"
              onClick={() => navigate("/home")}
            >
              Go Back
            </button>
          </form>
        </div>
        <div className="bg-blackcurrant flex flex-col grow items-center lg:max-h-screen xl:ml-28 h-full open-s">
          <form className="mt-12 gap-8 text-white flex flex-col">
            {noAnswers ? (
              <div> There is no answers</div>
            ) : (
              renderAnswer()
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Question;
