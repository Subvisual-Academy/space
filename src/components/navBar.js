import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-navbar-gray items-center p-4 flex gap-8 max-h-16">
      <Link to="/home">
        <img
          className="ml-4 mr-60"
          src={Logo}
          alt="Space Center Logo"
        />
      </Link>

      <Link to="/home">
        <button className="text-navbar-components-gray ml-96 mr-8">Home</button>
      </Link>

      <Link to="/question">
        <button className="text-navbar-components-gray mr-8">Weekly Question</button>
      </Link>

      <Link to="/friend">
        <button className="text-navbar-components-gray mr-8">Weekly Friend</button>
      </Link>
    </div>
  );
}

export default NavBar;
