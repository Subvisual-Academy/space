import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-navbar-gray items-center p-4 flex gap-8 max-h-16">
      <Link to="/home">
        <img className="ml-4 mr-60" src={Logo} alt="Space Center Logo" />
      </Link>

      <div className="text-navbar-components-gray ml-96 mr-8">
        <Link to="/home">Home</Link>
      </div>

      <div className="text-navbar-components-gray mr-8">
        <Link to="/question">Weekly Question</Link>
      </div>

      <div className="text-navbar-components-gray mr-8">
        <Link to="/friend">Weekly Friend</Link>
      </div>
    </div>
  );
}

export default NavBar;
