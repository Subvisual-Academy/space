import Logo from "../assets/spacecenterlogo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-mine-shaft items-center p-4 flex gap-8 max-h-28">
      <Link to="/home">
        <img
          className=" p-8 items-center gap-8"
          src={Logo}
          alt="Space Center Logo"
        />
      </Link>
      <Link to="/home">
        <h1 className="text-white text-3xl">
          {" "}
          Space
          <br />
          Center
        </h1>
      </Link>
    </div>
  );
}

export default NavBar;
