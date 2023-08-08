import Background from "../assets/space-background.png";
import Logo from "../assets/login-logo.png";
import { useNavigate } from "react-router-dom";
import { POST } from "../utils/fetch";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const mail = data.get("email");
    const pass = data.get("password");

    if (mail && pass) {
      POST(`auth/login`, {
        email: mail,
        password: pass,
      })
        .then((response) => {
          localStorage.setItem("token", response["token"]);
          localStorage.setItem("current", response["user"]);
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error occurred during login:", error.message);
          alert("Invalid credentials. Please, try again.");
        });
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="flex bg-cod-gray">
      <div className="flex-col ml-32 w-1/2 h-full mt-44">
        <img className="w-64 h-14" src={Logo} alt="Logo" />

        <div className="text-4xl font-bold text-white mt-6">
          Login to your account
        </div>

        <form
          name="login"
          className="flex flex-col mt-8"
          onSubmit={handleSubmit}
        >
          <div className="text-white text-base"> Email address </div>
          <input
            id="email"
            name="email"
            type="text"
            className="bg-white text-sm rounded-md w-3/4 h-10 hover:border-4 hover:border-blue-login active:border-4 active:border-blue-login placeholder:text-gray p-2"
            placeholder="you@example.com"
          />

          <div className="text-white text-base mt-6"> Password </div>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-white text-sm rounded-md w-3/4 h-10 hover:border-4 hover:border-blue-login active:border-4 active:border-blue-login placeholder:text-gray p-2"
            placeholder="your password"
          />

          <button
            type="submit"
            className="bg-blue-login rounded-md w-3/4 h-10 text-white text-base font-bold mt-10 hover:bg-dark-cyan focus:border-4 focus:border-white"
          >
            Login
          </button>

          <div className="text-light-gray text-base mt-8 ml-40">
            Don't have an account?{" "}
            <a className="text-blue-login" href="/space">
              Register
            </a>
          </div>

          <a className="text-blue-login text-base mt-2 ml-48" href="/password">
            Forgot your password?
          </a>
        </form>
      </div>

      <div className="w-1/2" style={{ backgroundImage: `url(${Background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}> 
        <img
          className="mt-96 ml-40"
          src={Logo}
          alt="Space Center Logo"
        />
        {/*
        <img
          className="absolute top-[calc(50%-theme(space.96)/4)] left-[calc(50%-theme(space.72)/1.25)]"
          src={Logo}
          alt="Space Center Logo"
        />
  */}
      </div>
    </div>
  );
}

export default Login;
