import { useState } from "react";
import NavBar from "../components/navBar";

async function getAPIData(url) {
  const response = await fetch(url, {
    credentials: "same-origin",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const json = await response.json();
  return json;
}

const getQuestion = async () => {
  var question_id = await getAPIData(process.env.REACT_APP_API_URL+"weekly_question").then((response) => response['question_id']);
  var content = await getAPIData(process.env.REACT_APP_API_URL+"questions/"+question_id.toString()).then((response) => response['content']);
  return content;
}

function Question() {

  const [content, setContent] = useState("");

  getQuestion().then((response) => setContent(response));

  return (
    <div className="bg-cod-gray font absolute h-full w-full">
      <NavBar />
      <h1 className="text-white m-32 text-5xl">{content}</h1>
    </div>
  );
}

export default Question;
