import NavBar from "../components/navBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-cod-gray absolute h-full w-full font-['audioWide']">
      <NavBar />
      <h1 className="text-white m-32 text-5xl">Space Center Activities</h1>
      <div className="m-32 flex gap-32">
        <Link to="/question">
          <button className="rounded-3xl bg-cornflower-blue text-white h-64 w-64">
            QUESTION OF THE WEEK
          </button>
        </Link>
        <Link to="/friend">
          <button className="rounded-3xl bg-cornflower-blue text-white p-4 h-64 w-64">
            FRIEND OF THE WEEK
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
