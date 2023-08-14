import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Information from "./Information";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Picture from "./Picture";

export default class Signup extends Component {
  state = {
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
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange =
    (input, isCheckbox = false) =>
    (e) => {
      if (input === "company_id" && !isCheckbox) {
        // Handling the react-select input
        this.setState({ [input]: e.value });
      } else {
        // Handling other form inputs
        const value = isCheckbox
          ? e.target.value
          : e.target.type === "file"
          ? e.target.files[0]
          : e.target.value;

        this.setState((prevState) => {
          if (isCheckbox) {
            const isChecked = e.target.checked;

            if (isChecked) {
              return { [input]: [...prevState[input], value] };
            } else {
              return {
                [input]: prevState[input].filter((item) => item !== value),
              };
            }
          } else {
            return { [input]: value };
          }
        });
      }
    };

  render() {
    const { step } = this.state;
    const {
      email,
      name,
      password,
      role,
      discord,
      company_id,
      location,
      bio,
      hobbies,
      skills,
      profile_pic,
    } = this.state;
    const values = {
      email,
      name,
      password,
      role,
      discord,
      company_id,
      location,
      bio,
      hobbies,
      skills,
      profile_pic,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Information
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Hobbies
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Skills
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Picture
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
      // do nothing
    }
  }
}
