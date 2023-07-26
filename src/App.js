import Background from "./assets/universe_background.png";
import Logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { post } from "./Utils";

function App() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const mail = data.get("email");
    const pass = data.get("password");
    const name = data.get("name");
    const confirmPassword = data.get("confirmPassword");

    if (mail && name && pass && confirmPassword && pass === confirmPassword) {
      const id = await post(`users`, {
        email: mail,
        name: name,
        password: pass,
      }).then((response) => response["id"]);
      const tokenRes = await post(`auth/login`, {
        email: mail,
        password: pass,
      }).then((response) => response["token"]);
      localStorage.setItem("token", tokenRes);
      localStorage.setItem("current", id);
      if (id) navigate("/home");
      else alert("Account already created!");
    } else {
      alert("E-mail or Password doesn't match!");
    }
  };

  return (
    <div className="flex items-start flex-auto bg-cod-gray">
      <div className="p-8 flex flex-col grow items-start lg:max-h-screen ml-32 mt-2">
        <img
          className="max-h-screen basis-2/5 object-cover"
          src={Logo}
          alt="A background representing the Universe"
        />
        <h1 className=" mt-6 text-white text-4xl">Register your account</h1>
        <form
          name="register"
          className="flex flex-col w-9/12 max-w-screen-sm gap-9 mt-12"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              for="email"
              className="block text-base font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full pl-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cerulean sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="name"
              className="block text-base font-medium leading-6 text-white"
            >
              Full Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                type="text"
                name="name"
                className="block w-full pl-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cerulean sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              className="block text-base font-medium leading-6 text-white"
            >
              Password
            </label>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full pl-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cerulean sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="confirmPassword"
              className="block text-base font-medium leading-6 text-white"
            >
              Confirm Password
            </label>
            <div class="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="block w-full pl-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cerulean sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            class="mt-1 text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md bg-cerulean p-4 font-semibold text-white shadow-sm hover:bg-cerulean focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean"
          >
            Register
          </button>
          <div className="text-silver text-2xl text-center">
            Already have an account?{" "}
            <a className="underline text-cerulean" href="#/login">
              Login
            </a>
          </div>
        </form>
      </div>
      <div className="hidden lg:block relative h-full">
        <img
          className="max-h-screen basis-2/5 object-cover lg:w-[838px]"
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
  );
}

export default App;
