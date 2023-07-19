import NavBar from "../components/navBar";

const activity = [
  "Doodle Race",
  "Cards Against Humanity",
  "Trivia Games",
  "Chess",
  "Code Numbers",
];

function Friend() {
  return (
    <screen className="bg-cod-gray font absolute h-full w-full">
      <NavBar />
      <div class="flex h-screen">
        <left class="bg-cod-gray">
          <h1 className="w-[50%] text-white ml-28 mt-48 text-5xl">
            Your friend this week is Pedro!
          </h1>

          <h1 className="text-white ml-28 text-5xl">
            Name
          </h1>

          <h1 className="text-white ml-28 text-5xl">Name</h1>

          <desc className="text-white ml-28 mb-80 text-2xl">
            It can be just a 15 min online coffee break or one of many cool
            online activities we've prepared for you in the activity section.Go
            check it out! Connect Pedro through discord Pereira or email
            pedro@sub.com{" "}
          </desc>

          <button className="w-16 h-12 bg-back-gray text-white mb-28 ml-28 rounded-[7px]">
            Go back
          </button>
        </left>

        <right class="w-507 bg-bkg-purple">
          <div className="text-white mt-8 text-center text-2xl">
            Do a weekly activity together to get to know each other
          </div>

          <div class="grid gap-8 justify-center mt-16">
            {activity.map((activity) => (
              <button class="w-72 h-16 bg-button-gray text-white rounded-[27px] shadow-md">
                {activity}
              </button>
            ))}
          </div>
        </right>
      </div>
    </screen>
  );
}

export default Friend;
