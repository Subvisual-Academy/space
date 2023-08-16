import React from "react";
import Select from "react-select";
import Subvisual from "../assets/companies/Subvisual.png";
import InvisibleLab from "../assets/companies/InvisibleLab.png";
import Onda from "../assets/companies/Onda.png";
import PinkRoom from "../assets/companies/PinkRoom.png";
import Other from "../assets/companies/Other.png";

const companyOptions = [
  {
    value: "1",
    label: "Subvisual",
    imageSrc: Subvisual,
  },
  { value: "2", label: "Invisible Lab", imageSrc: InvisibleLab },
  { value: "3", label: "Onda", imageSrc: Onda },
  { value: "4", label: "Pink Room", imageSrc: PinkRoom },
  { value: "5", label: "Universe", imageSrc: Other },
];

const Information = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    nextStep();
  };

  return (
    <div className="bg-stars min-h-screen bg-cover bg-no-repeat font-medium top-0">
      <nav
        aria-label="Progress"
        className="items-center text-white p-10 m-auto"
      >
        <ol className="flex justify-center">
          <li className="relative pr-8 sm:pr-20">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="h-0.5 w-full bg-white"></div>
            </div>
            <div
              className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cerulean bg-white"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-cerulean"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Personal Info
              </span>
            </div>
          </li>
          <li className="relative pr-8 sm:pr-20">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="h-0.5 w-full bg-white"></div>
            </div>
            <button
              onClick={Continue}
              type="button"
              className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Hobbies
              </span>
            </button>
          </li>
          <li className="relative pr-8 sm:pr-20">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="h-0.5 w-full bg-white"></div>
            </div>
            <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
              <span
                className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 text-light-gray w-full h-full text-center font-normal text-xs">
                Skills
              </span>
            </div>
          </li>
          <li className="relative pr-8 sm:pr-20">
            <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
              <span
                className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 text-light-gray w-full h-full text-center font-normal text-xs">
                Profile Picture
              </span>
            </div>
          </li>
          <li className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <h1 className="text-white mt-9 text-center text-5xl">
          Welcome to the Space Center
        </h1>
        <h1 className="text-white mt-8 text-center text-xl font-normal">
          This where we get to know each other! Please fill the information
          below
        </h1>
        <form
          name="register"
          className="flex flex-col w-full gap-5 mt-12 items-center"
        >
          <div className="w-1/4">
            <label
              htmlFor="email"
              className="block text-base leading-6 text-white font-normal"
            >
              Role
            </label>
            <div className="mt-2">
              <input
                required
                id="role"
                type="text"
                onChange={handleChange("role")}
                name="role"
                value={values.role}
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="company"
              className="block text-sm leading-6 text-white font-normal"
            >
              Company
            </label>
            <Select
              required
              id="company"
              onChange={handleChange("company_id")}
              options={companyOptions}
              value={companyOptions.find(
                (option) => option.value === values.company_id
              )}
              getOptionLabel={(option) => (
                <div className="flex items-center">
                  <img
                    src={option.imageSrc}
                    alt={option.label}
                    className="h-5 w-5 rounded-full mr-2"
                  />
                  {option.label}
                </div>
              )}
            />
          </div>

          <div className="w-1/4">
            <label
              htmlFor="email"
              className="block text-base leading-6 text-white font-normal"
            >
              Discord Username
            </label>
            <div className="mt-2">
              <input
                required
                id="discord"
                type="text"
                onChange={handleChange("discord")}
                value={values.discord}
                name="email"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="email"
              className="block text-base leading-6 text-white font-normal"
            >
              Location
            </label>
            <div className="mt-2">
              <input
                required
                id="email"
                type="email"
                onChange={handleChange("location")}
                value={values.location}
                name="email"
                className="block w-full pl-3 rounded-md focus:border-cerulean border-2 outline-none border-transparent py-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="email"
              className="block text-base leading-6 text-white font-normal"
            >
              About
            </label>
            <textarea
              required
              type="text"
              name="bio"
              rows="4"
              onChange={handleChange("bio")}
              value={values.bio}
              className="no-scrollbar w-full mr-1 rounded-md peer block text-gray-900 shadow-sm bg-gray-50 py-1.5 pl-3 text-gray-900 focus:border-cerulean border-2 outline-none border-transparent sm:text-sm sm:leading-6 mt-2 placeholder:text-base placeholder:text-gray-400"
              placeholder="Write something about yourself"
            />

            <div className="flex justify-end">
              <button
                onClick={Continue}
                type="button"
                className="inline-flex mt-8 font-medium items-center gap-x-2 rounded-md bg-cerulean py-2 px-6 text-base text-white shadow-sm hover:bg-dark-cyan focus:border-white focus:border-2"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Information;
