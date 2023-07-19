import Background from "../assets/universe_background.jpeg";
import Logo from "../assets/spacecenter1.svg";
import { useNavigate } from "react-router-dom";
import { post } from "../Utils";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const data = new FormData(event.target);
    const mail = data.get("email").value;
    const pass = data.get("password").value;

    if (mail && pass) {
      await post(`auth/login`, {
        email: mail,
        password: pass,
      }).then((response) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("current", response["user"]);
      });
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

      <div className="max-h-screen flex flex-col grow items-center mb-20">
        <form
          name="register"
          className="flex flex-col w-9/12 max-w-screen-sm gap-8 mt-96"
        >
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 w-122 rounded-3xl bg-mine-shaft text-xl border-2 border-input-purple"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl border-2 border-input-purple"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 w-72 ml-48"
          >
            <div className="bg-dark-cyan rounded-3xl pt-3 text-alto text-3xl h-16">
              Continue
            </div>
          </button>
          <div className="text-gray text-2xl text-center">
            Don't have an account?{" "}
            <a className="underline text-register-cyan" href="/space">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
