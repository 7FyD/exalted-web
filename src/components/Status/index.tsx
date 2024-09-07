import { useQuery } from "@tanstack/react-query";

const Status = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["status", "players"],
    queryFn: () =>
      fetch("https://api.mcsrvstat.us/3/factions.exalted-kingdom.com").then(
        (res) => res.json()
      ),
    refetchInterval: 10000,
    staleTime: 10000,
  });

  if (isLoading) return <h3 className="text-2xl font-bold">Loading...</h3>;
  if (error)
    return (
      <h3 className="text-2xl font-bold">
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </h3>
    );
  const { online, players } = data;
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      <h3 className="text-2xl font-medium">
        Server status:{" "}
        {online ? (
          <span className="text-green-500">ONLINE</span>
        ) : (
          <span className="text-red-500">OFFLINE</span>
        )}
      </h3>
      {online && (
        <h3 className="text-2xl">
          Players: {players.online} / {players.max}
        </h3>
      )}
    </div>
  );
};

export default Status;
