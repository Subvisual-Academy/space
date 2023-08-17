import React from "react";
import UserDetails from "./UserDetails";
import Information from "./Information";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Picture from "./Picture";
import { useState } from "react";
import { POST } from "../utils/fetch";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    step: 1,
    email: "",
    name: "",
    password: "",
    role: "",
    discord: "",
    company_id: 1,
    location: "",
    bio: "",
    hobbies: [],
    skills: [],
    profile_pic: null,
  });

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange =
    (input, isCheckbox = false) =>
    (e) => {
      if (input === "company_id" && !isCheckbox) {
        // Handling the react-select input
        setValues({ ...values, [input]: e.value });
      } else {
        // Handling other form inputs
        const value = isCheckbox
          ? e.target.value
          : e.target.type === "file"
          ? e.target.files[0]
          : e.target.value;

        setValues((prevState) => {
          if (isCheckbox) {
            const isChecked = e.target.checked;

            if (isChecked) {
              return { ...prevState, [input]: [...prevState[input], value] };
            } else {
              return {
                ...prevState,
                [input]: prevState[input].filter((item) => item !== value),
              };
            }
          } else {
            return { ...prevState, [input]: value };
          }
        });
      }
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <Information
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Hobbies
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return (
        <Skills
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 5:
      return (
        <Picture
          prevStep={prevStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      );
    default:
    // do nothing
  }
};

export default Signup;
