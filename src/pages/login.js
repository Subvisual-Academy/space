import Background from "../assets/space-background.png";
import Logo from "../assets/logo.svg";
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
          localStorage.setItem("image", response["profile_pic"]);
          navigate("/home");
          navigate(0);
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
    <div className="flex bg-cod-gray font-medium">
      <div className="flex-col ml-32 w-1/2 h-full mt-44">
        <img className="w-64 h-14" src={Logo} alt="Logo" />

        <div className="text-4xl text-white mt-6">Login to your account</div>

        <form
          name="login"
          className="flex flex-col mt-8"
          onSubmit={handleSubmit}
        >
          <div className="text-white text-base font-normal">Email address</div>
          <input
            id="email"
            name="email"
            type="text"
            className="block w-3/4 pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
          />

          <div className="text-white text-base mt-6 font-normal">Password</div>
          <input
            id="password"
            name="password"
            type="password"
            className="block w-3/4 pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
          />

          <button
            type="submit"
            className="bg-blue-login rounded-md w-3/4 h-10 text-white text-base font-normal mt-10 hover:bg-dark-cyan focus:border-4 focus:border-white"
          >
            Login
          </button>
          <div className="text-light-gray text-base mt-8 ml-40 font-normal">
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
      <div className="flex items-start flex-auto bg-cod-gray font-medium">
        <div className="hidden lg:block relative min-h-screen">
          <img
            className="lg:h-full  basis-2/5 object-cover"
            src={Background}
            alt="A background representing the Universe"
          />
          <img
            className="absolute h-96 w-72 top-[calc(50%-theme(space.96)/2)] left-[calc(50%-theme(space.72)/2)]"
            src={Logo}
            alt="Space Center Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
