import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-cod-gray h-full w-full font-medium">
      <NavBar />
      <h1 className="text-white ml-32 mt-16 text-5xl">
        Welcome to the Space Center
      </h1>
      <div className="text-gray mt-6 ml-32 w-1/2 font-normal">
        Here you can explore the Subvisual Universe and reach every corner of
        it. Learn about other incredible members of this community by completing
        tasks every week and make new connections. And who knows, maybe it's
        here where you'll find some very good friends.
      </div>
      <div className="ml-32 mt-32 flex gap-5 h-80 flex-shrink max-sm:flex-col mr-32">
        <Link to="/question" className="flex-1">
          <button className="w-full rounded-3xl bg-question text-white p-9 h-full bg-cover bg-center">
            <h1 className="text-xl">{"question of the week".toUpperCase()}</h1>
            <div className="text-base font-normal">
              Get to know your community by sharing a glimpse of your
              <br /> life and checking the answers of other members of the
              <br /> Subvisual Universe
            </div>
          </button>
        </Link>
        <Link to="/friend" className="flex-1">
          <button className="w-full rounded-3xl bg-friend text-white p-10 h-full bg-cover bg-center ">
            <h1 className="text-xl">{"friend of the week".toUpperCase()}</h1>
            <div className="text-base font-normal">
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
