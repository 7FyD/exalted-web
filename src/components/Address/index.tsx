import { useToast } from "@/hooks/use-toast";

const Address = () => {
  const { toast } = useToast();
  const handleClick = () => {
    navigator.clipboard.writeText("factions.exalted-kingdom.com");
    toast({
      description: "Copied to clipboard",
      duration: 2000,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      <h3
        onClick={handleClick}
        className="text-xl md:!text-2xl text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        factions.exalted-kingdom.com
      </h3>
    </div>
  );
};

export default Address;
