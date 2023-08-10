import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Information from "./Information";
import Hobbies from "./Hobbies";

export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    name: "",
    password: "",
    position: "",
    discord: "",
    company_id: "",
    base_office: "",
    bio: "",
    hobbies: [],
    skills: [],
    profile_pic: Object,
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

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      name,
      password,
      position,
      discord,
      company_id,
      base_office,
      bio,
      hobbies,
      skills,
      profile_pic,
    } = this.state;
    const values = {
      email,
      name,
      password,
      position,
      discord,
      company_id,
      base_office,
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
      default:
      // do nothing
    }
  }
}
