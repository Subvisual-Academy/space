import Background from "./assets/Background.svg";
import Logo from "./assets/spacecenter1.svg";
import { useNavigate } from "react-router-dom";
import {post} from './Utils'

function App() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (
      mail &&
      confirmEmail &&
      pass &&
      confirmPassword &&
      mail === confirmEmail &&
      pass === confirmPassword
    ) {
      const id = await post(`users`, {
        email: mail,
        password: pass,
      }).then((response) => response["id"]);
      const tokenRes = await post(`auth/login`, {
        email: mail,
        password: pass,
      }).then((response) => response["token"]);
      localStorage.setItem("token", tokenRes);
      localStorage.setItem("current", id);
      navigate("/home");
    } else {
      alert("E-mail or Password doesn't match!");
    }
  };

  return (
    <div className="flex items-start flex-auto bg-cod-gray">
      <div className="hidden md:block relative">
        <img
          className="max-h-screen basis-2/5 object-cover"
          src={Background}
          alt="Universe Background"
        />
        <img
          className="absolute h-96 w-72 top-[calc(50%-theme(space.96)/2)] left-[calc(50%-theme(space.72)/2)]"
          src={Logo}
          alt="Space Center Logo"
        />
      </div>

      <div className="max-h-screen flex flex-col grow items-center mt-12">
        <button
          type="button"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 w-1/2 max-w-screen-sm"
        >
          <div className="border-dove-gray border-2 rounded-3xl pt-4 text-silver text-xl h-16">
            Continue with Google
          </div>
        </button>
        <form
          name="register"
          className="flex flex-col w-9/12 max-w-screen-sm  gap-8 mt-12"
        >
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
          />
          <input
            id="confirmEmail"
            type="text"
            placeholder="Confirm e-mail"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
          />
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            <div className="bg-med-purple rounded-3xl pt-3 text-alto text-3xl h-16">
              Submit
            </div>
          </button>
          <div className="text-silver text-2xl text-center">
            Already have an account?{" "}
            <a className="underline text-blue-500" href="/login">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
