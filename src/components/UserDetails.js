import React from "react";
import Background from "../assets/universe_background.png";
import Logo from "../assets/logo.svg";

const UserDetails = ({ nextStep, handleChange, values }) => {
  // for next event listener
  const next = () => {
    nextStep();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const pass = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (pass === confirmPassword) {
      next();
    } else {
      alert("Password doesn't match!");
    }
  };

  return (
    <div className="flex items-start flex-auto bg-cod-gray font-medium">
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
              htmlFor="email"
              className="block text-base leading-6 text-white font-normal"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                required
                id="email"
                type="email"
                onChange={handleChange("email")}
                name="email"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-base leading-6 text-white font-normal"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                required
                id="name"
                onChange={handleChange("name")}
                type="text"
                name="name"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base leading-6 text-white font-normal"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                required
                id="password"
                onChange={handleChange("password")}
                name="password"
                type="password"
                pattern=".{6,}"
                title="Password needs at least 6 characters"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-base leading-6 text-white font-normal"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                required
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-1 text-base py-3 px-5 hover:bg-dark-cyan focus:border-white focus:border-2 rounded-md bg-cerulean text-white shadow-sm"
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
  );
};

export default UserDetails;
