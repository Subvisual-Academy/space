import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import Check from "../assets/Check.svg";
import Ok from "../assets/okkhand.png";
import { GET, POST } from "../utils/fetch";
import Astronaut from "../assets/sadAstronaut.png";
import { useNavigate, Link } from "react-router-dom";

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
          body: value.body,
          time: value.time,
          user: value.user.id,
          image: value.user.profile_pic,
          name: value.user.name,
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
      <div className="bg-cod-gray absolute min-h-screen w-full flex flex-shrink items-start flex-auto font-medium">
        <div className="bg-cover bg-no-repeat bg-galaxy-pattern basis-2/3 min-h-screen">
          <div className="ml-32">
            <h1 className="text-white text-xl mt-8">Weekly Question</h1>
            <h1 className="text-white mt-20 text-3xl">{content}</h1>
            {answered ? (
              <div className="text-white mt-20 text-xl mr-24">
                <h1 className="font-normal">
                  Cool, thank you for sharing. Now you can go check the answers
                  of other members of the Subvisual Universe!
                </h1>
                <img
                  className="max-h-screen basis-2/5 object-cover mt-20 ml-20"
                  src={Ok}
                  alt="An astronaut giving the ok sign"
                />
                <Link to="/previous">
                  <button
                    type="button"
                    class="rounded-md mt-10 w-3/5 bg-transparent px-3.5 py-2.5 text-base border-cerulean border-2 text-white shadow-sm hover:bg-dark-cyan hover:border-white focus:border-white focus:border-2"
                  >
                    Previous questions
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className=" mr-72">
                <h1 className="text-white mt-9">
                  {((7 - curr.getDay() + 1) % 7 || 7) + " DAYS LEFT TO ANSWER"}
                </h1>
                <div className="relative mt-2">
                  <textarea
                    required
                    type="text"
                    name="answer"
                    rows="4"
                    className="no-scrollbar w-full mr-1 rounded-md peer block text-gray-900 shadow-sm bg-gray-50 py-1.5 pl-3 text-gray-900 focus:border-cerulean border-2 outline-none border-transparent sm:text-sm sm:leading-6 mt-12 placeholder:text-base placeholder:text-gray-400"
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
                    className="inline-flex font-normal items-center gap-x-2 rounded-md bg-cerulean py-2 px-6 text-base text-white shadow-sm hover:bg-dark-cyan focus:border-white focus:border-2"
                  >
                    Answer
                    <img
                      className="pl-4 pt-1"
                      src={Check}
                      alt="Space Center Logo"
                    />
                  </button>
                </div>
                <div>
                  <Link to="/previous">
                    <button
                      type="button"
                      class="rounded-md lg:mt-20 w-full bg-transparent px-3.5 py-2.5 text-base border-cerulean border-2 text-white shadow-sm hover:bg-dark-cyan hover:border-white focus:border-white focus:border-2"
                    >
                      Previous questions
                    </button>
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="bg-blackcurrant h-screen flex flex-col basis-1/3 items-center">
          <h1 className="text-white text-5xl mt-8 ml-1">
            Answers of this week
          </h1>
          <form className="mt-8 gap-8 text-white flex flex-col overflow-scroll no-scrollbar">
            {answers.length === 0 ? (
              <div>
                <div className="relative">
                  <img
                    className="max-h-screen basis-2/5 object-cover mt-20 ml-20"
                    src={Astronaut}
                    alt="Sad Astronaut sitting on a rock"
                  />
                  <h1 className="absolute top-1/4 left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    No answers yet
                  </h1>
                </div>

                <h1 className="text-center ml-14 text-white">
                  Be the first to answer!
                </h1>
              </div>
            ) : (
              answers.map((item) => (
                <div
                  className="bg-dark-cyan p-4 flex flex-col rounded-3xl h-auto w-72"
                  key={item.body}
                >
                  <div>
                    <img
                      className=" w-11 h-11 rounded-full absolute"
                      src={item.image}
                      alt="User profile pic"
                    />
                    <div className="text-xl ml-14">{item.name}</div>
                    <div className="text-xs ml-14 font-normal">
                      {item.time
                        .toLocaleString(undefined, options)
                        .toUpperCase() +
                        " " +
                        item.time.getUTCDate()}
                    </div>
                  </div>
                  <div className="text-base pt-4 font-normal">{item.body}</div>
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
