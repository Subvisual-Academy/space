import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Settings from "../assets/Dropdown.png";

function NavBar() {
  return (
    <div>
      <div className="bg-navbar-gray flex items-center max-h-16">
        <div className="flex items-center p-4 ">
          <NavLink to="/home">
            <img className="ml-4 mr-12" src={Logo} alt="Space Center Logo" />
          </NavLink>

          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isActive
                ? "mr-8 text-white font-bold border-b-4 border-highlighted-button-blue"
                : "mr-8 text-navbar-components-gray hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/question"
            className={({ isActive, isPending }) =>
              isActive
                ? "mr-8 text-white font-bold border-b-4 border-highlighted-button-blue"
                : "mr-8 text-navbar-components-gray hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            }
          >
            Weekly Question
          </NavLink>

          <NavLink
            to="/friend"
            className={({ isActive, isPending }) =>
              isActive
                ? "mr-8 text-white font-bold border-b-4 border-highlighted-button-blue"
                : "mr-8 text-navbar-components-gray hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            }
          >
            Weekly Friend
          </NavLink>

          <NavLink
            to="/members"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-white font-bold border-b-4 border-highlighted-button-blue"
                : "text-navbar-components-gray hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            }
          >
            Members
          </NavLink>
        </div>

        <div className="flex items-center ml-auto mr-8">
          <NavLink to="/profile">
            <button className="mr-4 w-8 h-8 rounded-full hover:ring hover: ring-opacity hover:ring-highlighted-button-blue">
              <img
                className="rounded-full"
                src={localStorage.getItem("image")}
                alt="Profile"
              />
            </button>
          </NavLink>

          <NavLink to="/settings">
            <button className="w-6 h-6 rounded-full hover:ring hover: ring-opacity hover:ring-highlighted-button-blue">
              <img src={Settings} alt="Settings Button" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
