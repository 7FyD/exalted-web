import logo from "./assets/logo-nobg.png";
import storeLogo from "./assets/EK_basic_logo2.png";
import Link from "./components/Link";
import Status from "./components/Status";
import Address from "./components/Address";

function App() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 min-h-screen">
      <img
        src={logo}
        alt="logo"
        className="md:w-[325px] sm:w-[300px] w-[250px]"
      />{" "}
      <Address />
      <div className="flex flex-col md:!flex-row justify-center items-center gap-32">
        <Link
          imgSrc={storeLogo}
          alt="Exalted Store Logo"
          href="https://store.exalted-kingdom.com"
          label="STORE"
          newTab
        />
        <Link
          imgSrc={storeLogo}
          alt="Discord Logo"
          href="https://exalted-kingdom.com/discord"
          label="DISCORD"
          newTab
        />
        <Link
          imgSrc={storeLogo}
          alt="Vote Links Logo"
          href="https://exalted-kingdom.com/vote"
          label="VOTE LINKS"
        />
      </div>
      <Status />
      <p className="text-white/70 text-center">
        © Copyright Exalted Kingdom 2024, All Rights Reserved. Not affiliated
        with Mojang or Microsoft.
      </p>
    </div>
  );
}

export default App;
