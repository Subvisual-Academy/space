import NavBar from "../components/navBar";
import Chevron from "../assets/chevron_down.svg";
import { GET } from "../utils/fetch";
import { useEffect, useState } from "react";

async function getQuestions() {
  return await GET("weekly_questions");
}

const options = {
  month: "long",
};

function PreviousQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answersVisibility, setAnswersVisibility] = useState({});

  useEffect(() => {
    getQuestions().then((response) => {
      setQuestions(response);
    });
  }, []);

  const viewAnswers = (questionId) => {
    setAnswersVisibility((prevVisibility) => ({
      ...prevVisibility,
      [questionId]: !prevVisibility[questionId],
    }));
  };

  return (
    <div>
      <NavBar />
      <div className="bg-previous min-h-screen bg-cover">
        <div className="flex ml-32 text-xl">
          <h1 className="text-cerulean hover:underline mt-8">
            {" "}
            <a href="#/question">Weekly Question</a>
          </h1>
          <h1 className="text-white no-underline mt-8">
            {" "}
            &nbsp;&gt; Previous Questions
          </h1>
        </div>

        {questions.map((questionItem) => (
          <div
            className=" mt-16 ml-96 gap-8 w-4/6 overflow-scroll no-scrollbar"
            key={questionItem.id}
          >
            <div className="border-b-2 border-white px-2 pb-8">
              <div className="flex gap-6">
                <h1 className="text-white w-32 pb-8">
                  {questionItem.formatted_week}
                </h1>
                <h1 className="text-white w-9">
                  {new Date(questionItem.week).getFullYear()}
                </h1>
                <h1 className="text-white text-xl w-full">
                  {questionItem.question.body}
                </h1>
                <img
                  src={Chevron}
                  onClick={() => viewAnswers(questionItem.id)}
                  alt="Chevron icon"
                  className={`cursor-pointer ${
                    answersVisibility[questionItem.id] ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="items-center overflow-scroll no-scrollbar max-h-96">
                {answersVisibility[questionItem.id] &&
                  questionItem.question.answers.map((answer) => (
                    <div
                      className="bg-dark-cyan p-4 flex flex-col rounded-3xl h-auto w-full text-white mb-3"
                      key={answer.body}
                    >
                      <div className="text-xl ml-14">{answer.user.email}</div>
                      <div className="text-xs ml-14">
                        {new Date(answer.created_at)
                          .toLocaleString(undefined, options)
                          .toUpperCase() +
                          " " +
                          new Date(answer.created_at).getUTCDate()}
                      </div>

                      <div className="text-base pt-4">{answer.body}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviousQuestions;
