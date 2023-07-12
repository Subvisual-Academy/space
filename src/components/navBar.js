import Logo from "../assets/spacecenterlogo.svg";

function NavBar() {
  return (
    <div className="bg-mine-shaft items-center p-4 flex gap-8 max-h-28">
      <a href="/home">
        <img
          className=" p-8 items-center gap-8"
          src={Logo}
          alt="Space Center Logo"
        />
      </a>
      <a href="/home">
        <div className="flex-col text-white text-3xl">
          <h1> Space</h1>
          <h1> Center</h1>
        </div>
      </a>
    </div>
  );
}

export default NavBar;
