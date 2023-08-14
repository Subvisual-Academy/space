import React from "react";
import { useNavigate } from "react-router-dom";
import { POST } from "../utils/fetch";

const Picture = ({ prevStep, nextStep, handleChange, values }) => {
  const navigate = useNavigate();
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(values.company_id);

    const formData = new FormData();
    formData.append("profile_pic", values.profile_pic);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("discord", values.discord);
    formData.append("location", values.location);
    formData.append("company_id", values.company_id);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + `users`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      const id = await response.json().then((response) => response["id"]);

      try {
        const tokenRes = await POST(`auth/login`, {
          email: values.email,
          password: values.password,
        }).then((response) => response["token"]);

        localStorage.setItem("token", tokenRes);

        await POST(`users/` + id + `/hobbies`, {
          names: values.hobbies,
        });

        await POST(`users/` + id + `/skills`, {
          names: values.skills,
        });
        navigate("/home");
        navigate(0);
      } catch (error) {
        alert(error.message);
      }

      localStorage.setItem("current", id);
    } catch (error) {
      alert(error.message);
    }
  };

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
                Hobbies
              </span>
            </div>
          </li>
          <li class="relative pr-8 sm:pr-20">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-cerulean"></div>
            </div>
            <button
              onClick={Previous}
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
                Skills
              </span>
            </button>
          </li>
          <li class="relative pr-8 sm:pr-20">
            <div
              class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-cerulean bg-white"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-cerulean"
                aria-hidden="true"
              ></span>
              <span className="absolute pt-14 mr-3 text-light-gray w-full h-full text-center font-normal text-xs">
                Profile Picture
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        {values.profile_pic ? (
          <>
            <h1 className="text-white mt-9 text-center text-5xl">Done!</h1>
            <h1 className="text-white mt-8 text-center text-xl font-normal">
              Congrats! You can access the platform now!
            </h1>
            <div class="text-white font-normal mt-14 max-w-screen-md mx-auto w-60 h-60">
              <div class="mt-2 flex justify-center rounded-sm border w-60 h-60 p-7">
                <div class="text-center">
                  <img
                    className="h-full w-full"
                    src={URL.createObjectURL(values.profile_pic)}
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-white mt-9 text-center text-5xl">
              Almost done!
            </h1>
            <h1 className="text-white mt-8 text-center text-xl font-normal">
              Please upload a profile picture
            </h1>
            <div class="text-white font-normal mt-14 max-w-screen-md mx-auto w-60 h-60 hover:bg-gray">
              <div class="mt-2 flex justify-center rounded-sm border w-60 h-60 border-dashed border-off-white p-7">
                <div class="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-12 w-12 text-gray-300"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M46.6654 13.3327H19.9987C18.2306 13.3327 16.5349 14.0351 15.2847 15.2853C14.0344 16.5355 13.332 18.2312 13.332 19.9993V53.3327M13.332 53.3327V59.9993C13.332 61.7675 14.0344 63.4631 15.2847 64.7134C16.5349 65.9636 18.2306 66.666 19.9987 66.666H59.9987C61.7668 66.666 63.4625 65.9636 64.7127 64.7134C65.963 63.4631 66.6654 61.7675 66.6654 59.9993V46.666M13.332 53.3327L28.6187 38.046C29.8689 36.7962 31.5643 36.0941 33.332 36.0941C35.0998 36.0941 36.7952 36.7962 38.0454 38.046L46.6654 46.666M66.6654 33.3327V46.666M66.6654 46.666L61.3787 41.3793C60.1285 40.1295 58.4331 39.4274 56.6654 39.4274C54.8976 39.4274 53.2022 40.1295 51.952 41.3793L46.6654 46.666M46.6654 46.666L53.332 53.3327M59.9987 13.3327H73.332M66.6654 6.66602V19.9993M46.6654 26.666H46.6987"
                      stroke="#CCCCCC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="mt-4 text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer p-2 rounded-md bg-white text-cerulean focus-within:outline-none focus-within:ring-2 focus-within:ring-dark-cyan focus-within:ring-offset-2 hover:text-dark-cyan"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        onChange={handleChange("profile_pic")}
                      />
                    </label>
                    <p class="pl-1 mt-1 text-off-white">
                      or drop like it's hot
                    </p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex justify-center gap-48 text-center mt-28">
          <button
            onClick={Previous}
            type="button"
            className="rounded-md w-40 bg-transparent p-2 text-base border-cerulean border-2 text-white shadow-sm hover:bg-dark-cyan hover:border-white focus:border-white focus:border-2"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-40 p-2 font-medium items-center gap-x-2 rounded-md bg-cerulean text-base text-white shadow-sm hover:bg-dark-cyan focus:border-white focus:border-2"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picture;
