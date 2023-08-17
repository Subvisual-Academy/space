import NavBar from "../components/navBar";
import Avatar from "../assets/Avatar profile.png";
import Toggle from "../assets/chevron_down.svg";
import Subvisual from "../assets/sub_logo.png";
import Onda from "../assets/onda_logo.png";
import PinkRoom from "../assets/pink_room_logo.png";
import InvisibleLab from "../assets/invisible_lab_icon.png";
import Universe from "../assets/universe.jpg";
import Dropdown from "../assets/chevron_down.svg";

import { useEffect, useState } from "react";
import { GET } from "../utils/fetch";
import { Link } from "react-router-dom";

const skills = [
  "Adobe Creative Cloud",
  "Analytics tools",
  "Backend dev",
  "Blender",
  "Blockchain",
  "Branding",
  "Communication",
  "Creative Coding",
  "Database",
  "Experience Design",
  "Figma",
  "Frontend dev",
  "Git / Github",
  "Graphic Design",
  "Human Resources",
  "Interface Design",
  "Marketing",
  "Operations",
  "Product exploration",
  "Sales",
  "Strategic planning",
  "User Research",
  "Usability Testing",
];
const hobbies = [
  "Anime",
  "Art",
  "Board Games",
  "Children",
  "Collecting",
  "Cooking",
  "Formula 1",
  "Football",
  "Gardening",
  "Handcraft",
  "Hiking",
  "Languages",
  "Making music",
  "Movies",
  "Music genres",
  "Outdoor Activities",
  "Tennis",
  "Peers",
  "Photography",
  "Psychology",
  "Reading",
  "Sports",
  "Tech / computers",
  "Travelling",
  "TV Series",
  "Video Gaming",
  "Wellness",
];

const companies = [
  {
    name: "Subvisual",
    logo: Subvisual,
  },
  {
    name: "Onda",
    logo: Onda,
  },
  {
    name: "Pink Room",
    logo: PinkRoom,
  },
  {
    name: "Invisible Lab",
    logo: InvisibleLab,
  },
  {
    name: "Universe",
    logo: Universe,
  },
];

const getUsers = async () => {
  return await GET("users");
};

function Members() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortsToggle, setSortsToggle] = useState(false);
  const [sortText, setSortText] = useState("Name (A-Z)");

  useEffect(() => {
    getUsers().then((response) => {
      const sortedUsers = response.sort((a, b) => a.name.localeCompare(b.name));
      setUsers(sortedUsers);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.trim());
    filterUsers(e);
  };

  const switchOrder = (e) => {
    e.preventDefault();

    var order = e.target.value
    setSortText(order);    

    var ordered = users;
    switch (order) {
      case "Name (A-Z)":
        ordered = ordered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "Name (Z-A)":
        ordered = ordered.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        ordered = users
        break
    }
    setUsers(ordered);
  };

  const filterUsers = (e) => {
    var filtered = users;

    if (searchInput) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }

  const toggleSorts= () => {
    setSortsToggle((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar />
        <div className="ml-44">
          <div className="flex">
            <div className="flex-none w-2/3">
              <input
                type="text"
                className="mt-16 h-9 w-5/6 bg-dark-gray text-base text-navbar-components-gray rounded-md hover:border-2 hover:border-white active:border-2 active:border-blue-login p-3"
                placeholder="Search for a member of the Space Center"
                onChange={handleSearch}
                value={searchInput}
              />
            </div>

            <div className="flex-grow w-1/3">
              <div className="ml-52">
                <button
                  className="flex mt-16 items-center text-light-gray w-52 h-7 p-2 hover:bg-navbar-gray hover:rounded-lg focus:border-2 focus:border-white"
                  onClick={toggleSorts}
                >
                  Sort by: {sortText}
                  <img
                    className="w-5 h-5 ml-4"
                    src={Dropdown}
                    alt="Dropdown icon"
                  />
                </button>

                <div
                  className={`transition-all ${
                    sortsToggle
                      ? "visible opacity-100 h-auto"
                      : "invisible opacity-0 h-0"
                  }`}
                >
                  <div className="mt-3 w-48 bg-dark-gray rounded-md p-4">
                    <button className="w-48 h-9 text-white hover:bg-navbar-components-gray" value="Name (A-Z)" onClick={switchOrder}>
                      Name (A-Z)
                    </button>
                    <button className="w-48 h-9 text-white hover:bg-navbar-components-gray" value="Name (Z-A)" onClick={switchOrder}>
                      Name (Z-A)
                    </button>
                  </div>
                </div>
              </div>             
            </div>

          </div>

          <div className="mt-8">
            <div className="text-white text-xl font-bold">Members</div>
            <div className="mt-10 grid grid-cols-4 gap-y-10">
              {users.map((user) => (
                <Link to={`/profile/${user.id}`} key={user.id}>
                  <div className="w-64 h-72 bg-dark-cyan text-white rounded-lg flex flex-col justify-center items-center hover:bg-blue-400">
                    <img
                      className="w-32 h-32 rounded-full"
                      src= {user.profile_pic}
                      alt="User profile pic"
                    />
                    <p className="mt-6 text-xl"> {user.name} </p>
                    <p className="mt-2 text-base">{user.role} </p>
                    <div className="mt-2 text-base"> {user.company_name} </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Members;
