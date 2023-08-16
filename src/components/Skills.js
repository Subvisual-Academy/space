import React, { useEffect, useState } from "react";
import { GET } from "../utils/fetch";

const getSkills = async () => {
  const skills = await GET("skills");
  const skillNames = skills.map((skill) => skill.name);
  return skillNames;
};

const Skills = ({ prevStep, nextStep, handleChange, values }) => {
  const [skills, setSkills] = useState([]);

  const next = (e) => {
    nextStep();
  };

  const previous = (e) => {
    prevStep();
  };

  useEffect(() => {
    getSkills().then((response) => {
      setSkills(response);
    });
  }, []);

  return (
    <div className="bg-stars min-h-screen bg-cover bg-no-repeat font-medium top-0">
      <nav
        aria-label="Progress"
        className="items-center text-white p-10 m-auto"
      >
        <ol class="flex justify-center">
          <li class="relative pr-8 sm:pr-20">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-cerulean"></div>
            </div>
            <div class="relative flex h-8 w-8 items-center justify-center rounded-full bg-cerulean hover:bg-cerulean">
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Personal info
              </span>
            </div>
          </li>
          <li class="relative pr-8 sm:pr-20">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-cerulean"></div>
            </div>
            <button
              onClick={previous}
              type="button"
              class="relative flex h-8 w-8 items-center justify-center rounded-full bg-cerulean hover:bg-cerulean"
            >
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Hobbies
              </span>
            </button>
          </li>
          <li class="relative pr-8 sm:pr-20">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-white"></div>
            </div>
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cerulean bg-white"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-cerulean"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Skills
              </span>
            </div>
          </li>
          <li class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-white"></div>
            </div>
            <button
              onClick={next}
              type="button"
              class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Profile Picture
              </span>
            </button>
          </li>
        </ol>
      </nav>
      <div>
        <h1 className="text-white mt-9 text-center text-5xl">
          What are your skills?
        </h1>
        <h1 className="text-white mt-8 text-center text-xl font-normal">
          Tell us your main skills related to the area you work on
        </h1>
        <fieldset className="mt-10">
          <div className="max-w-screen-md mx-auto text-white font-normal grid grid-cols-3 gap-10 justify-center">
            {skills.map((skill) => (
              <div className="flex items-center" key={skill}>
                <input
                  id="skills"
                  name="skills"
                  value={skill}
                  onChange={handleChange("skills", true)}
                  type="checkbox"
                  checked={values.skills.includes(skill)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="skills"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="flex justify-center gap-48 text-center mt-16">
          <button
            onClick={previous}
            type="button"
            className="rounded-md w-40 bg-transparent p-2 text-base border-cerulean border-2 text-white shadow-sm hover:bg-dark-cyan hover:border-white focus:border-white focus:border-2"
          >
            Back
          </button>
          <button
            onClick={next}
            type="submit"
            className="w-40 p-2 font-medium items-center gap-x-2 rounded-md bg-cerulean text-base text-white shadow-sm hover:bg-dark-cyan focus:border-white focus:border-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
