import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Question from "../assets/Question_of_the_week.png";
import Friend from "../assets/Question_of_the_week.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-cod-gray absolute h-full w-full">
      <NavBar />
      <h1 className="text-white ml-32 mt-16 text-5xl">
        Welcome to the Space Center
      </h1>
      <div className="text-gray mt-6 ml-32 w-1/2">
        Here you can explore the Subvisual Universe and reach every corner of
        it. Learn about other incredible members of this community by completing
        tasks every week and make new connections. And who knows, maybe it's
        here where you'll find some very good friends.
      </div>
      <div className="ml-32 mt-32 flex gap-5 h-80 w-2/3 flex-1">
        <Link to="/question">
          <button className=" max-w-xl rounded-3xl bg-question text-white h-full bg-cover p-4 items-center bg-center">
            <h1 className="text-base">QUESTION OF THE WEEK</h1>
            <div className="text-sm">
              Get to know your community by sharing a glimpse of your life and
              checking the answers of other members of the Subvisual Universe
            </div>
          </button>
        </Link>
        <Link to="/friend">
          <button className=" max-w-xl rounded-3xl bg-friend text-white p-4 h-full bg-cover bg-center">
            <h1 className="text-base">FRIEND OF THE WEEK</h1>
            <div className="text-sm">
              Get in touch with a member of the Subvisual Universe assigned to
              you
            </div>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
