import "./App.css";
import Background from "./assets/Background.svg";
import Logo from "./assets/spacecenter1.svg";

function App() {
  return (
    <div class="bg">
      <img class="img-container" src={Background} alt="SpaceBg" />
      <img class="logo" src={Logo} alt="SpaceBg" />

      <div class="input-container">
        <div class="input-box">
          <form>
            <input id="email" type="text" placeholder="E-mail" />
            <input id="email" type="text" placeholder="Confirm e-mail" />
            <input id="email" type="password" placeholder="Password" />
            <input id="email" type="password" placeholder="Confirm Password" />
            <button
              type="button"
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            >
              <div class="submit">Submit</div>
            </button>
          </form>
          <div id="account">
            Already have an account?{" "}
            <a className="underline text-blue-500" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
