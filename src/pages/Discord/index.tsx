import { useEffect } from "react";

const DiscordPage = () => {
  useEffect(() => {
    window.location.href = "https://discord.com/invite/AvZtENqXuz";
    console.log("test");
  }, []);

  return <div className="text-center font-medium my-8">Redirecting...</div>;
};

export default DiscordPage;
