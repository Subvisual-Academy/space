import Background from "./assets/Background.svg";
import Logo from "./assets/spacecenter1.svg";


function App() {
  return (
    <div className="flex items-start flex-auto bg-cod-gray">
      <div className="hidden md:block relative">
        <img
          className="max-h-screen basis-2/5 object-cover"
          src={Background}
          alt="SpaceBg"
        />
        <img
          className="absolute h-96 w-72 top-[calc(50%-theme(space.96)/2)] left-[calc(50%-theme(space.72)/2)]"
          src={Logo}
          alt="SpaceBg"
        />
      </div>

      <div className="max-h-screen p-8 pt-28 flex flex-col grow items-center">
        <button
            type="button"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 w-1/2 max-w-screen-sm"
          >
            <div className="border-dove-gray border-2 rounded-3xl pt-4 text-silver text-xl h-16 mt-12">Continue with Google</div>
          </button>
        <form className="flex flex-col w-9/12 max-w-screen-sm">
          <input type="text" placeholder="E-mail" className="placeholder-gray placeholder:text-xl caret-gray text-gray pl-4 h-16 rounded-3xl bg-mine-shaft text-xl mt-12" />
          <input type="text" placeholder="Confirm e-mail" className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl" />
          <input type="password" placeholder="Password" className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"/>
          <input type="password" placeholder="Confirm Password" className="placeholder-gray placeholder:text-xl caret-gray text-gray mt-12 pl-4 h-16 rounded-3xl bg-mine-shaft text-xl"/>
          <button
            type="button"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            <div className="bg-med-purple rounded-3xl pt-3 text-alto text-3xl h-16 mt-12">Submit</div>
          </button>
        </form>
        <div className="pt-12 text-silver text-2xl">
          Already have an account?{" "}
          <a className="underline text-blue-500" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
