import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import Vector from "../assets/Vector.svg";
import Enter from "../assets/Enter_icon.svg";
import { Link } from "react-router-dom";
import { GET, POST } from "../utils/fetch";

const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const curr = new Date();

function Refresh() {
  window.parent.location = window.parent.location.href;
}

const getQuestion = async () => {
  var questionId = await GET("weekly_question").then(
    (response) => response["question_id"]
  );
  var content = await GET("questions/" + questionId.toString()).then(
    (response) => response["body"]
  );
  return {
    question: content,
    id: questionId,
  };
};

function Question() {
  const [content, setContent] = useState("");
  const [questionId, setQuestionId] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  async function getAll(questionId) {
    const answers = await GET("questions/" + questionId + "/answers");
    await Promise.all(
      answers.map((answer) => {
        return new Promise((res) => {
          GET("users/" + answer["user_id"].toString()).then((user) =>
            res({ user, body: answer.body, time: new Date(answer.created_at) })
          );
        });
      })
    ).then((values) => {
      const data = values.map((value) => {
        return {
          email: value.user.email,
          body: value.body,
          time: value.time,
          user: value.user.id,
        };
      });
      setAnswers(data);
    });
  }

  useEffect(() => {
    getQuestion().then((response) => {
      setContent(response.question);
      setQuestionId(response.id);
    });
    getAll(questionId);
  }, [questionId]);

  useEffect(() => {
    answers.forEach((item) => {
      if (item.user === parseInt(localStorage.getItem("current"))) {
        setAnswered(true);
      }
    });
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const answer = data.get("answer");
    const user = localStorage.getItem("current");
    await POST("answers", {
      body: answer,
      user_id: user,
      question_id: questionId,
    });
    Refresh();
  };

  return (
    <div className="font-audioWide">
      <NavBar />
      <div className="bg-cod-gray absolute h-full w-full flex items-start flex-auto">
        <div>
          <h1 className="text-white m-32 text-5xl">{content}</h1>
          <h1 className="text-white m-32">
            {7 - curr.getDay() + " Days Left"}
          </h1>
          {answered ? (
            <h1 className="text-white ml-32"> Already answered</h1>
          ) : (
            <form className="ml-32 font-[OpenSans]" onSubmit={handleSubmit}>
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
            </form>
          )}
          <Link to="/home">
            <button className="bg-dove-gray p-2 m-32 lg:mt-40 mt-80 rounded-lg text-white text-sm">
              Go Back
            </button>
          </Link>
        </div>
        <div className="bg-blackcurrant flex flex-col grow items-center lg:max-h-screen w-full h-full font-[IBMPlexSans]">
          <form className="mt-12 gap-8 text-white flex flex-col overflow-scroll no-scrollbar">
            {answers.length === 0 ? (
              <h1> There's no answers</h1>
            ) : (
              answers.map((item) => (
                <div
                  className="bg-dove-gray p-4 flex flex-col rounded-3xl h-auto w-72"
                  key={item.body}
                >
                  <div className="text-xl text-center">{item.email}</div>
                  <div className="text-xs text-center">
                    {monthNames[item.time.getMonth()] +
                      " " +
                      item.time.getUTCDate()}
                  </div>
                  <div className="text-base pt-4">{item.body}</div>
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
