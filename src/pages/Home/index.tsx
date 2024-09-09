import logo from "@/assets/logo-nobg-medium.webp";
import storeLogo from "@/assets/EK-basic-medium.webp";
import voteIcon from "@/assets/vote-icon.png";
import discordIcon from "@/assets/discord-icon.png";
import Link from "@/components/Link";
import Status from "@/components/Status";
import Address from "@/components/Address";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8 min-h-screen">
      <img src={logo} alt="logo" className="md:w-[350px] w-[300px] mx-auto" />{" "}
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
          imgSrc={discordIcon}
          alt="Discord Logo"
          href="/discord"
          label="DISCORD"
          newTab
        />
        <Link
          imgSrc={voteIcon}
          alt="Vote Links Logo"
          href="/vote"
          label="VOTE LINKS"
          className="w-[200px]"
        />
      </div>
      <Status />
      <p className="text-white/70 text-center">
        © Copyright Exalted Kingdom 2024, All Rights Reserved. Not affiliated
        with Mojang or Microsoft.
      </p>
    </div>
  );
};

export default HomePage;
