import "./font.css";
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="bg-cod-gray font absolute h-full w-full">
      <NavBar />
      <h1 className="text-white m-32 text-5xl">Space Center Activities</h1>
      <div className="m-32 flex gap-32">
        <button
          onClick={() => navigate("/question")}
          className="rounded-3xl bg-cornflower-blue text-white h-64 w-64"
        >
          QUESTION OF THE WEEK
        </button>
        <button
          onClick={() => navigate("/friend")}
          className="rounded-3xl bg-cornflower-blue text-white p-4 h-64 w-64"
        >
          FRIEND OF THE WEEK
        </button>
      </div>
    </div>
  );
}

export default Home;
