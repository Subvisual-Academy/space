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

function Question() {
  const [content, setContent] = useState("");
  var noAnswers = false;
  let navigate = useNavigate();

  const [answers, setAnswers] = useState([]);

  async function getAll() {
    const answers = await getAPIData("answers");

    await Promise.all(
      answers.map((answer) => {
        return new Promise((res) => {
          getAPIData("users/" + answer["user_id"].toString()).then((user) =>
            res({ user, body: answer.body })
          );
        });
      })
    ).then((values) => {
      console.log(values);
      const data = values.map((value) => {
        return {
          email: value.user.email,
          body: value.body,
        };
      });
      setAnswers(data);
    });
  }

  useEffect(() => {
    getQuestion().then((response) => setContent(response));
    getAll();
  }, []);

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
          <form className="mt-12 gap-8 text-white flex flex-col overflow-scroll no-scrollbar">
            {noAnswers ? (
              <h1> There's no answers</h1>
            ) : (
              answers.map((item) => (
                <div className="bg-dove-gray p-4 flex flex-col rounded-3xl h-auto w-72 items-center"  key={item.email}>
                  <div className="text-xl">
                    {item.email}
                  </div>
                  <div className="text-base pt-4">
                    {item.body}
                  </div>
                </div>
              ))
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Question;
