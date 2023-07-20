import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-navbar-gray items-center p-4 flex gap-8 max-h-16">
      <Link to="/home">
        <img
          className="p-8 items-center ml-2 gap-8"
          src={Logo}
          alt="Space Center Logo"
        />
      </Link>

      <Link to="/home">
        <button
          className="text-navbar-components-gray">
          Home   
        </button>
      </Link>

      <Link to="/question">
        <button
          className="text-navbar-components-gray">
          Weekly Question  
        </button>
      </Link>

      <Link to="/friend">
        <button
          className="text-navbar-components-gray">
          Weekly Friend
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
