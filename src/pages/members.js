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
  const [decrescentOrder, setDecrescentOrder] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [companiesToggle, setCompaniesToggle] = useState(false);
  const [skillsToggle, setSkillsToggle] = useState(false);
  const [hobbiesToggle, setHobbiesToggle] = useState(false);

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
    setDecrescentOrder(!decrescentOrder);
    orderUsers();
  };

  const orderUsers = (e) => {
    var ordered = users;
    decrescentOrder
      ? (ordered = ordered.sort((a, b) => a.name.localeCompare(b.name)))
      : ordered.sort((a, b) => b.name.localeCompare(a.name));
    setUsers(ordered);
  };

  const filterUsers = (e) => {
    var filtered = users;

    if (searchInput) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    switch (e.target.value) {
      case "skill":
        filtered = users.filter((user) => user.skills.includes(e.target.name));
        break;
      case "hobby":
        filtered = users.filter((user) => user.hobbies.includes(e.target.name));
        break;
      case "company":
        filtered = users.filter((user) =>
          user.company_id.includes(e.target.name)
        );
        break;
      default:
        break;
    }
    setUsers(filtered);
  };

  const toggleCompanies = () => {
    setCompaniesToggle((prevState) => !prevState);
  };

  const toggleSkills = () => {
    setSkillsToggle((prevState) => !prevState);
  };

  const toggleHobbies = () => {
    setHobbiesToggle((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="mt-48 ml-32 flex-none w-1/4">
          <div className="mt-3 w-56">
            <button
              className="w-52 h-9 bg-dark-gray rounded-md p-4 flex justify-between items-center"
              onClick={toggleCompanies}
            >
              <div className="text-sm text-white">Company</div>
              <img src={Toggle} alt="Toggle button" />
            </button>

            <div
              className={`transition-all ${
                companiesToggle
                  ? "visible opacity-100 h-auto"
                  : "invisible opacity-0 h-0"
              }`}
            >
              <div className="mt-2 w-52 bg-dark-gray rounded-md px-4 py-3">
                {companies.map((company) => (
                  <div className="h-9 flex justify-between items-center">
                    <div className="flex">
                      <img
                        className="mr-3 w-6 h-6 rounded-full"
                        src={company.logo}
                        alt="Company logo"
                      ></img>
                      <div className="text-sm text-white font-bold">
                        {" "}
                        {company.name}{" "}
                      </div>
                    </div>
                    <button
                      className="w-4 h-4 rounded-md bg-white"
                      name={company.id}
                      value="company"
                      onClick={filterUsers}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 w-52">
            <button
              className="w-52 h-9 bg-dark-gray rounded-md p-4 flex justify-between items-center"
              onClick={toggleSkills}
            >
              <div className="text-sm text-white">Skills</div>
              <img src={Toggle} alt="Toggle button" />
            </button>

            <div
              className={`transition-all ${
                skillsToggle
                  ? "visible opacity-100 h-auto"
                  : "invisible opacity-0 h-0"
              }`}
            >
              <div className="mt-2 w-52 bg-dark-gray rounded-md p-4">
                {skills.map((skill, index) => (
                  <div className=" h-9 flex justify-between items-center">
                    <div className="text-sm text-white font-bold">
                      {" "}
                      {skill}{" "}
                    </div>
                    <button
                      className="w-4 h-4 rounded-md bg-white"
                      name={skill}
                      value="skill"
                      onClick={filterUsers}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 w-52">
            <button
              className="w-52 h-9 bg-dark-gray rounded-md p-4 flex justify-between items-center"
              onClick={toggleHobbies}
            >
              <div className="text-sm text-white">Hobbies</div>
              <img src={Toggle} alt="Toggle button" />
            </button>

            <div
              className={`transition-all ${
                hobbiesToggle
                  ? "visible opacity-100 h-auto"
                  : "invisible opacity-0 h-0"
              }`}
            >
              <div className="mt-2 w-52 bg-dark-gray rounded-md p-4">
                {hobbies.map((hobby, index) => (
                  <div className=" h-9 flex justify-between items-center">
                    <div className="text-sm text-white font-bold">
                      {" "}
                      {hobby}{" "}
                    </div>
                    <button
                      className="w-4 h-4 rounded-md bg-white"
                      name={hobby}
                      value="hobby"
                      onClick={filterUsers}
                    ></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow flex-col w-3/4">
          <div className="flex">
            <input
              type="text"
              className="mt-16 w-7/12 h-9 bg-dark-gray text-base text-navbar-components-gray rounded-md hover:border-2 hover:border-white active:border-2 active:border-blue-login p-3"
              placeholder="Search for a member of the Space Center"
              onChange={handleSearch}
              value={searchInput}
            />
            <button
              className="flex ml-24 mt-16 items-center text-light-gray w-48 h-7"
              onClick={switchOrder}
            >
              Sort by: Name (A-Z)
              <img
                className="w-5 h-5 ml-4"
                src={Dropdown}
                alt="Dropdown icon"
              />
            </button>
          </div>

          <div className="mt-8">
            <div className="text-white text-xl font-bold">Members</div>
            <div className="mt-10 grid grid-cols-3 gap-y-10">
              {users.map((user) => (
                <Link to={`/profile/${user.id}`} key={user.id}>
                  <div className="w-64 h-72 bg-dark-cyan text-white rounded-lg flex flex-col justify-center items-center">
                    <img
                      className="w-32 h-32"
                      src={Avatar}
                      alt="Profile pic place holder"
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
    </div>
  );
}

export default Members;
