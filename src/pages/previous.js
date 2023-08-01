import NavBar from "../components/navBar";
import Chevron from "../assets/chevron_down.svg";
import { GET } from "../utils/fetch";
import { useEffect, useState } from "react";

async function getQuestions() {
  const weekly_questions = await GET("weekly_questions");
  const questions = [];
  for (const value in weekly_questions) {
    questions.push({
      id: weekly_questions[value].weekly_question.question_id,
      body: weekly_questions[value].question_body,
      time: new Date(weekly_questions[value].weekly_question.week),
    });
  }
  return questions;
}

const options = {
  month: "long",
};

function Previous() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
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

    getAll(questionId);
  };

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
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: data,
      }));
    });
  }

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
            key={questionItem.id}
          >
            <div className="border-b-2 border-white px-2 pb-8">
              <div className="flex gap-6">
                <h1 className="text-white w-28 pb-8">
                  {renderDate(questionItem.time)}
                </h1>
                <h1 className="text-white w-9">
                  {questionItem.time.getFullYear()}
                </h1>
                <h1 className="text-white text-xl w-full">
                  {questionItem.body}
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
                  answers[questionItem.id]?.map((item) => (
                    <div
                      className="bg-dark-cyan p-4 flex flex-col rounded-3xl h-auto w-full text-white mb-3"
                      key={item.body}
                    >
                      <div className="text-xl ml-14">{item.email}</div>
                      <div className="text-xs ml-14">
                        {item.time
                          .toLocaleString(undefined, options)
                          .toUpperCase() +
                          " " +
                          item.time.getUTCDate()}
                      </div>

                      <div className="text-base pt-4">{item.body}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Previous;
