import "./App.css";
import Background from "./assets/Background.svg";
import Logo from "./assets/spacecenter1.svg";

function App() {
  return (
    <div className="flex items-start flex-auto bg-cod-gray">
      <div className="hidden md:block relative">
        <img
          className="max-h-screen basis-2/5 object-cover"
          src={Background}
          alt="SpaceBg"
        />
        <img
          className="absolute h-96 w-72 top-[calc(50%-theme(space.96)/2)] left-[calc(50%-theme(space.72)/2)]"
          src={Logo}
          alt="SpaceBg"
        />
      </div>

      <div className="max-h-screen p-8 pt-28 flex flex-col grow items-center">
        <form className="flex flex-col">
          <input id="email" type="text" placeholder="E-mail" />
          <input id="email" type="text" placeholder="Confirm e-mail" />
          <input id="email" type="password" placeholder="Password" />
          <input id="email" type="password" placeholder="Confirm Password" />
          <button
            type="button"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            <div className="submit">Submit</div>
          </button>
        </form>
        <div id="account">
          Already have an account?{" "}
          <a className="underline text-blue-500" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
