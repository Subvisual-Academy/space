import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import Check from "../assets/Check.svg";
import Enter from "../assets/Enter_icon.svg";
import Ok from "../assets/okkhand.png";
import { GET, POST } from "../utils/fetch";
import Astronaut from "../assets/sadAstronaut.png";
import { useNavigate } from "react-router";

const curr = new Date();

const options = {
  month: "long",
};

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
  const navigate = useNavigate();

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
  }, [answers]);

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
    navigate(0);
  };

  return (
    <div>
      <NavBar />
      <div className="bg-cod-gray absolute h-full w-full flex items-start flex-auto">
        <div className="bg-cover bg-no-repeat bg-galaxy-pattern h-full">
          <div className="ml-32">
            <h1 className="text-white text-xl mt-8">Question of the Week</h1>
            {answered ? (
              <div className="text-white mt-36 text-xl mr-24">
                <h1>
                  Cool, thank you for sharing. Now you can go check the answers
                  of other members of the Subvisual Universe!
                </h1>
                <img
                  className="max-h-screen basis-2/5 object-cover mt-20 ml-20"
                  src={Ok}
                  alt="An astronaut giving the ok sign"
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h1 className="text-white mt-36 text-5xl">{content}</h1>
                <h1 className="text-white mt-9">
                  {((7 - curr.getDay() + 1) % 7 || 7) + " DAYS LEFT TO ANSWER"}
                </h1>
                <div className="relative mt-2">
                  <textarea
                    type="text"
                    name="answer"
                    className="no-scrollbar peer block w-2/4 border-0 bg-gray-50 py-1.5 pl-3 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 mt-12 placeholder:text-base"
                    placeholder="Type your answer here"
                  />
                  <div
                    className="absolute bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex gap-8 mt-10">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-x-2 rounded-md bg-cerulean px-3.5 py-2.5 text-base text-white shadow-sm hover:bg-cerulean focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean"
                  >
                    Answer
                    <img
                      className="pl-4 pt-1"
                      src={Check}
                      alt="Space Center Logo"
                    />
                  </button>
                  <div className="flex">
                    <div className="mt-2 text-base text-white w-20 whitespace-nowrap">
                      Press Enter
                    </div>
                    <img className="ml-2" src={Enter} alt="Enter Arrow" />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="bg-blackcurrant flex flex-col grow items-center lg:max-h-screen w-full h-full">
          <h1 className="text-white text-5xl mt-8">Answers of this week</h1>
          <form className="mt-8 gap-8 text-white flex flex-col overflow-scroll no-scrollbar">
            {answers.length === 0 ? (
              <div className="h-full w-full items-center">
                <h1 className="text-center">No answers yet</h1>
                <img
                  className="max-h-screen basis-2/5 object-cover mt-20 ml-20 relative"
                  src={Astronaut}
                  alt="Sad Astronaut sitting on a rock"
                />
                <h1 className="text-center mt-8">Be the first to answer!</h1>
              </div>
            ) : (
              answers.map((item) => (
                <div
                  className="bg-dove-gray p-4 flex flex-col rounded-3xl h-auto w-72"
                  key={item.body}
                >
                  <div className="text-xl text-center">{item.email}</div>
                  <div className="text-xs text-center">
                    {item.time
                      .toLocaleString(undefined, options)
                      .toUpperCase() +
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
