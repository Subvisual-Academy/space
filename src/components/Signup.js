import React from "react";
import UserDetails from "./UserDetails";
import Information from "./Information";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Picture from "./Picture";
import { useState } from "react";

const Signup = () => {
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
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    default:
    // do nothing
  }
};

export default Signup;
