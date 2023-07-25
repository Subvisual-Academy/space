import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeClassName = "border-b-4 border-highlighted-button-blue";

  return (
    <div className="bg-navbar-gray items-center p-4 flex gap-8 max-h-16">
      <NavLink to="/home">
        <img className="ml-4 mr-60" src={Logo} alt="Space Center Logo" />
      </NavLink>

      <NavLink
        to="/home"
        activeClassName={activeClassName}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-white font-bold border-b-4 border-highlighted-button-blue"
            : "text-navbar-components-gray mr-8 hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/question"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-white font-bold border-b-4 border-highlighted-button-blue"
            : "text-navbar-components-gray mr-8 hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
        }
      >
        Weekly Question
      </NavLink>

      <NavLink
        to="/friend"
        className={({ isActive, isPending }) =>
          isPending
            ? "h-16 text-navbar-components-gray mr-8 hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            : isActive
            ? "text-white font-bold border-b-4 border-highlighted-button-blue"
            : ""
        }
      >
        Weekly Friend
      </NavLink>
    </div>
  );
}

export default NavBar;
