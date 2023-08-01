import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Settings from "../assets/Dropdown.png"
import Profile from "../assets/Avatar.png"

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
                ? "text-white font-bold border-b-4 border-highlighted-button-blue"
                : "text-navbar-components-gray hover:text-white hover:border-b-4 hover:border-highlighted-button-blue"
            }
          >
            Weekly Friend
          </NavLink>
        </div>
        
        <div className="flex items-center ml-auto mr-8">
          <img
            className="mr-3 hover:border-4 hover:border-highlighted-button-blue"
            src={Profile}
            alt="Profile"
          />

          <img
            className="hover:border-4 hover:border-highlighted-button-blue"
            src={Settings}
            alt="Settings Button"
          />
        </div>  
      </div>          
    </div>
  );
}

export default NavBar;
