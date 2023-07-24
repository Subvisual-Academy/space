import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-navbar-gray items-center p-4 flex gap-8 max-h-16">
      <Link to="/home">
        <img className="ml-4 mr-60" src={Logo} alt="Space Center Logo" />
      </Link>

      <button className="h-16 text-navbar-components-gray ml-96 mr-8 font-bold hover:text-white hover:border-b-4 border-highlighted-button-blue">
        <Link to="/home">Home</Link>
      </button>

      <button className="h-16 text-navbar-components-gray mr-8 font-bold hover:text-white hover:border-b-4 hover:border-highlighted-button-blue">
        <Link to="/question">Weekly Question</Link>
      </button>

      <button className="h-16 text-navbar-components-gray mr-8 font-bold hover:text-white hover:border-b-4 hover:border-highlighted-button-blue">
        <Link to="/friend">Weekly Friend</Link>
      </button>
    </div>
  );
}

export default NavBar;