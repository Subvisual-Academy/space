import NavBar from "../components/navBar";
import Chevron from "../assets/chevron_down.svg";
import { GET } from "../utils/fetch";
import { useEffect, useState } from "react";

async function getQuestions() {
  const weekly_questions = await GET("weekly_questions");
  const questions = [];
  for (const value in weekly_questions) {
    questions.push({
      body: weekly_questions[value].question_body,
      time: new Date(weekly_questions[value].weekly_question.week),
    });
  }
  return questions;
}

function Previous() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [answersVisibility, setAnswersVisibility] = useState({});

  useEffect(() => {
    getQuestions().then((response) => {
      setQuestions(response);
    });
  }, []);

  const viewAnswers = (item) => {
    setAnswersVisibility((prevVisibility) => ({
      ...prevVisibility,
      [item.body]: !prevVisibility[item.body],
    }));
  };

  function renderDate(date) {
    const startDate = new Date(date.getTime());
    const endDate = new Date(date.getTime());

    const daysToSubtract = startDate.getDay() + 7;

    startDate.setDate(startDate.getDate() - daysToSubtract + 1);
    endDate.setDate(endDate.getDate() - startDate.getDay());

    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;

    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth() + 1;

    return `${startDay}/${startMonth}-${endDay}/${endMonth}`;
  }

  return (
    <div className="bg-previous min-h-screen bg-no-repeat bg-cover">
      <NavBar />
      <div className="flex mt-8 ml-32 text-xl">
        <h1 className="text-cerulean hover:underline">
          {" "}
          <a href="#/question">Weekly Question</a>
        </h1>
        <h1 className="text-white no-underline"> &nbsp;&gt; History</h1>
      </div>

      {questions
        .sort((a, b) => b.time.getTime() - a.time.getTime())
        .map((questionItem) => (
          <div
            className=" mt-16 ml-96 gap-8 w-4/6 overflow-scroll no-scrollbar"
            key={questionItem.body}
          >
            <div className="flex gap-6 border-b-2 border-white px-2">
              <h1 className="text-white w-28 pb-8">
                {renderDate(questionItem.time)}
              </h1>
              <h1 className="text-white w-9">
                {questionItem.time.getFullYear()}
              </h1>
              <h1 className="text-white text-xl w-full">{questionItem.body}</h1>
              <img
                src={Chevron}
                onClick={() => viewAnswers(questionItem)}
                alt="Chevron icon"
                className={`cursor-pointer ${
                  answersVisibility[questionItem.body] ? "rotate-180" : ""
                }`}
              />
            </div>
            {answersVisibility[questionItem.body] && (
              <div>
                <h1 className="text-white text-9xl">Answers</h1>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Previous;
