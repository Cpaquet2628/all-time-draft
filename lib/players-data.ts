export type Player = {
  name: string;
  franchise: string;
  position: "QB" | "RB" | "WR" | "TE";
};

// PLACEHOLDER DATA — replace this array with your real 254-player pool.
// Keep the same shape: name, franchise (primary team), position.
export const players: Player[] = [
  { name: "Jermichael Finley", franchise: "Green Bay Packers", position: "TE" },
  { name: "Aaron Rodgers", franchise: "Green Bay Packers", position: "QB" },
  { name: "Davante Adams", franchise: "Green Bay Packers", position: "WR" },
  { name: "Adrian Peterson", franchise: "Minnesota Vikings", position: "RB" },
  { name: "Randy Moss", franchise: "Minnesota Vikings", position: "WR" },
  { name: "Larry Fitzgerald", franchise: "Arizona Cardinals", position: "WR" },
  { name: "Kurt Warner", franchise: "Arizona Cardinals", position: "QB" },
  { name: "Tom Brady", franchise: "New England Patriots", position: "QB" },
  { name: "Rob Gronkowski", franchise: "New England Patriots", position: "TE" },
  { name: "Marshawn Lynch", franchise: "Seattle Seahawks", position: "RB" },
];
