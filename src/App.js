import Background from "./assets/Background.svg";
import Logo from "./assets/spacecenter1.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const LOGIN_API_URL = "http://localhost:3000/auth/login";

  const CREATE_USER_URL = "http://localhost:3000/users";

  const navigate = useNavigate();

  async function user(mail, pass) {
    const response = await fetch(CREATE_USER_URL, {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    return json;
  }

  async function login(mail, pass) {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    return json;
  }

  const handleSubmit = async () => {
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (
      mail === confirmEmail &&
      pass === confirmPassword &&
      mail &&
      confirmEmail &&
      pass &&
      confirmPassword
    ) {
      const id = await user(mail, pass).then((response) => response["id"]);
      const tokenRes = await login(mail, pass).then(
        (response) => response["token"]
      );
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
          alt="SpaceBg"
        />
        <img
          className="absolute h-96 w-72 top-[calc(50%-theme(space.96)/2)] left-[calc(50%-theme(space.72)/2)]"
          src={Logo}
          alt="SpaceBg"
        />
      </div>
      <div className="max-h-screen p-8 pt-28 flex flex-col grow items-center">
        <button
          type="button"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 w-1/2 max-w-screen-sm"
        >
          <div className="border-dove-gray border-2 rounded-3xl pt-4 text-silver text-xl h-16 mt-12">
            Continue with Google
          </div>
        </button>
        <form className="flex flex-col w-9/12 max-w-screen-sm">
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl mt-12"
            required
          />
          <input
            id="confirmEmail"
            type="text"
            placeholder="Confirm e-mail"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
            required
          />
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"
            required
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            <div className="bg-med-purple rounded-3xl pt-3 text-alto text-3xl h-16 mt-12">
              Submit
            </div>
          </button>
        </form>
        <div className="pt-12 text-silver text-2xl">
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
