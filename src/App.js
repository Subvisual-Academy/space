import React from "react";
import "./App.css";
import Signup from "./components/Signup";

function App() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const mail = data.get("email");
    const pass = data.get("password");
    const name = data.get("name");
    const confirmPassword = data.get("confirmPassword");

    if (pass === confirmPassword) {
      try {
        const info = await POST(`users`, {
          email: mail,
          name: name,
          password: pass,
          company_id: 1, // temporarily so people can still test the app while we make the registering process
        }).then((response) => {
          return { id: response["id"], image: response["profile_pic"] };
        });

        try {
          const tokenRes = await POST(`auth/login`, {
            email: mail,
            password: pass,
          }).then((response) => response["token"]);

          localStorage.setItem("token", tokenRes);
          navigate("/home");
          navigate(0);
        } catch (error) {
          alert(error.message);
        }

        localStorage.setItem("current", info["id"]);
        localStorage.setItem("image", info["image"]);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Password doesn't match!");
    }
  };

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
