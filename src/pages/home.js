import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-cod-gray h-full w-full">
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
      <div className="ml-32 mt-32 flex gap-5 h-80 w-full flex-shrink max-sm:flex-col">
        <Link to="/question">
          <button className=" max-w-[510px] max-sm:max-w-[255px] rounded-3xl bg-question text-white p-9 h-full bg-cover bg-center">
            <h1 className="text-base">QUESTION OF THE WEEK</h1>
            <div className="text-sm">
              Get to know your community by sharing a glimpse of your
              <br /> life and checking the answers of other members of the
              <br /> Subvisual Universe
            </div>
          </button>
        </Link>
        <Link to="/friend">
          <button className=" max-w-[510px] max-sm:max-w-[255px] rounded-3xl bg-friend text-white p-10 h-full bg-cover bg-center">
            <h1 className="text-base">FRIEND OF THE WEEK</h1>
            <div className="text-sm">
              Get in touch with a member of the Subvisual Universe
              <br />
              assigned to you
            </div>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
