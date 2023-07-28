import NavBar from "../components/navBar";

function Previous() {
  return (
    <div className="bg-previous">
      <NavBar />
      <div className="flex mt-8 ml-32 text-xl">
        <h1 className="text-cerulean hover:underline">
          {" "}
          <a href="#/question">Weekly Question</a>
        </h1>
        <h1 className="text-white no-underline"> &nbsp;&gt; History</h1>
      </div>

      <div className=" mt-16 ml-96">
        <h1 className="text-white">Questions</h1>
      </div>
    </div>
  );
}

export default Previous;
