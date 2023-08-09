import Background from "../assets/space-background.png";
import Logo from "../assets/login-logo.png";
import { useNavigate } from "react-router-dom";
import { post } from "../Utils";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const mail = data.get("email");
    const pass = data.get("password");

    if (mail && pass) {
      await post(`auth/login`, {
        email: mail,
        password: pass,
      }).then((response) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("current", response["user"]);
      });
      navigate("/home");
      navigate(0);
    } else {
      alert("E-mail or Password doesn't match!");
    }
  };

  return (
    <div className="flex bg-cod-gray font-medium">
      <div className="flex-col ml-32 w-1/2 mt-80">
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
            className="bg-white rounded-md w-[422px] h-[38px] hover:border-4 hover:border-blue-login active:border-4 active:border-blue-login placeholder:text-gray"
          />

          <div className="text-white text-base mt-6 font-normal">Password</div>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-white rounded-md w-[422px] h-[38px] hover:border-4 hover:border-blue-login active:border-4 active:border-blue-login placeholder:text-gray"
          />

          <button
            type="submit"
            className="bg-blue-login rounded-md w-[422px] h-[38px] text-white text-base font-normal mt-10 hover:bg-dark-cyan focus:border-4 focus:border-white"
          >
            Login
          </button>

          <div className="text-light-gray text-base mt-8 ml-24 font-normal">
            Don't have an account?{" "}
            <a className="underline text-blue-login" href="/space">
              Register
            </a>
          </div>
        </form>
      </div>

      <div className="flex-shrink-0 w-1/2 hidden md:block relative">
        <img
          className="h-full w-full"
          src={Background}
          alt="Universe Background"
        />
        <img
          className="absolute top-[calc(50%-theme(space.96)/4)] left-[calc(50%-theme(space.72)/1.25)]"
          src={Logo}
          alt="Space Center Logo"
        />
      </div>
    </div>
  );
}

export default Login;
