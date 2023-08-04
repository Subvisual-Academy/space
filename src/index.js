import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Question from "./pages/question";
import Friend from "./pages/friend";
import jwt_decode from "jwt-decode";

function MainRouter() {
  const token = localStorage.getItem("token");
  const isAuthenticated = token
    ? jwt_decode(token).user_id === parseInt(localStorage.getItem("current"))
    : false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/question" element={<Question />} />
            <Route path="/friend" element={<Friend />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
