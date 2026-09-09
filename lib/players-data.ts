export type Player = {
  name: string;
  franchise: string;
  position: "QB" | "RB" | "WR" | "TE";
};

// Full 254-player pool from the Draft Day Packet.
export const players: Player[] = [
  // Arizona Cardinals
  { name: "Carson Palmer", franchise: "Arizona Cardinals", position: "QB" },
  { name: "Kurt Warner", franchise: "Arizona Cardinals", position: "QB" },
  { name: "Chase Edmonds", franchise: "Arizona Cardinals", position: "RB" },
  { name: "David Johnson", franchise: "Arizona Cardinals", position: "RB" },
  { name: "Anquan Boldin", franchise: "Arizona Cardinals", position: "WR" },
  { name: "Larry Fitzgerald", franchise: "Arizona Cardinals", position: "WR" },
  { name: "Michael Floyd", franchise: "Arizona Cardinals", position: "WR" },

  // Atlanta Falcons
  { name: "Matt Ryan", franchise: "Atlanta Falcons", position: "QB" },
  { name: "Devonta Freeman", franchise: "Atlanta Falcons", position: "RB" },
  { name: "Michael Turner", franchise: "Atlanta Falcons", position: "RB" },
  { name: "Warrick Dunn", franchise: "Atlanta Falcons", position: "RB" },
  { name: "Calvin Ridley", franchise: "Atlanta Falcons", position: "WR" },
  { name: "Julio Jones", franchise: "Atlanta Falcons", position: "WR" },
  { name: "Mohamed Sanu", franchise: "Atlanta Falcons", position: "WR" },
  { name: "Roddy White", franchise: "Atlanta Falcons", position: "WR" },
  { name: "Tony Gonzalez", franchise: "Atlanta Falcons", position: "TE" },

  // Baltimore Ravens
  { name: "Joe Flacco", franchise: "Baltimore Ravens", position: "QB" },
  { name: "Lamar Jackson", franchise: "Baltimore Ravens", position: "QB" },
  { name: "J.K. Dobbins", franchise: "Baltimore Ravens", position: "RB" },
  { name: "Jamal Lewis", franchise: "Baltimore Ravens", position: "RB" },
  { name: "Ray Rice", franchise: "Baltimore Ravens", position: "RB" },
  { name: "Willis McGahee", franchise: "Baltimore Ravens", position: "RB" },
  { name: "Derrick Mason", franchise: "Baltimore Ravens", position: "WR" },
  { name: "Mark Andrews", franchise: "Baltimore Ravens", position: "TE" },
  { name: "Todd Heap", franchise: "Baltimore Ravens", position: "TE" },

  // Buffalo Bills
  { name: "Josh Allen", franchise: "Buffalo Bills", position: "QB" },
  { name: "C.J. Spiller", franchise: "Buffalo Bills", position: "RB" },
  { name: "Devin Singletary", franchise: "Buffalo Bills", position: "RB" },
  { name: "Fred Jackson", franchise: "Buffalo Bills", position: "RB" },
  { name: "Sammy Watkins", franchise: "Buffalo Bills", position: "WR" },
  { name: "Stevie Johnson", franchise: "Buffalo Bills", position: "WR" },
  { name: "Dawson Knox", franchise: "Buffalo Bills", position: "TE" },

  // Carolina Panthers
  { name: "Cam Newton", franchise: "Carolina Panthers", position: "QB" },
  { name: "Jake Delhomme", franchise: "Carolina Panthers", position: "QB" },
  { name: "Christian McCaffrey", franchise: "Carolina Panthers", position: "RB" },
  { name: "DeAngelo Williams", franchise: "Carolina Panthers", position: "RB" },
  { name: "Jonathan Stewart", franchise: "Carolina Panthers", position: "RB" },
  { name: "DJ Moore", franchise: "Carolina Panthers", position: "WR" },
  { name: "Steve Smith Sr.", franchise: "Carolina Panthers", position: "WR" },
  { name: "Greg Olsen", franchise: "Carolina Panthers", position: "TE" },

  // Chicago Bears
  { name: "Jay Cutler", franchise: "Chicago Bears", position: "QB" },
  { name: "Justin Fields", franchise: "Chicago Bears", position: "QB" },
  { name: "Mitchell Trubisky", franchise: "Chicago Bears", position: "QB" },
  { name: "David Montgomery", franchise: "Chicago Bears", position: "RB" },
  { name: "Jordan Howard", franchise: "Chicago Bears", position: "RB" },
  { name: "Matt Forte", franchise: "Chicago Bears", position: "RB" },
  { name: "Alshon Jeffery", franchise: "Chicago Bears", position: "WR" },

  // Cincinnati Bengals
  { name: "Andy Dalton", franchise: "Cincinnati Bengals", position: "QB" },
  { name: "Joe Burrow", franchise: "Cincinnati Bengals", position: "QB" },
  { name: "Jeremy Hill", franchise: "Cincinnati Bengals", position: "RB" },
  { name: "Joe Mixon", franchise: "Cincinnati Bengals", position: "RB" },
  { name: "A.J. Green", franchise: "Cincinnati Bengals", position: "WR" },
  { name: "Chad Johnson", franchise: "Cincinnati Bengals", position: "WR" },
  { name: "Ja'Marr Chase", franchise: "Cincinnati Bengals", position: "WR" },
  { name: "Tee Higgins", franchise: "Cincinnati Bengals", position: "WR" },
  { name: "Tyler Eifert", franchise: "Cincinnati Bengals", position: "TE" },

  // Cleveland Browns
  { name: "Baker Mayfield", franchise: "Cleveland Browns", position: "QB" },
  { name: "Kareem Hunt", franchise: "Cleveland Browns", position: "RB" },
  { name: "Nick Chubb", franchise: "Cleveland Browns", position: "RB" },
  { name: "Peyton Hillis", franchise: "Cleveland Browns", position: "RB" },
  { name: "Josh Gordon", franchise: "Cleveland Browns", position: "WR" },
  { name: "Terrelle Pryor", franchise: "Cleveland Browns", position: "WR" },
  { name: "David Njoku", franchise: "Cleveland Browns", position: "TE" },

  // Dallas Cowboys
  { name: "Dak Prescott", franchise: "Dallas Cowboys", position: "QB" },
  { name: "Tony Romo", franchise: "Dallas Cowboys", position: "QB" },
  { name: "DeMarco Murray", franchise: "Dallas Cowboys", position: "RB" },
  { name: "Ezekiel Elliott", franchise: "Dallas Cowboys", position: "RB" },
  { name: "Marion Barber", franchise: "Dallas Cowboys", position: "RB" },
  { name: "CeeDee Lamb", franchise: "Dallas Cowboys", position: "WR" },
  { name: "Dez Bryant", franchise: "Dallas Cowboys", position: "WR" },
  { name: "Terrell Owens", franchise: "Dallas Cowboys", position: "WR" },
  { name: "Jason Witten", franchise: "Dallas Cowboys", position: "TE" },

  // Denver Broncos
  { name: "C.J. Anderson", franchise: "Denver Broncos", position: "RB" },
  { name: "Knowshon Moreno", franchise: "Denver Broncos", position: "RB" },
  { name: "Brandon Marshall", franchise: "Denver Broncos", position: "WR" },
  { name: "Demaryius Thomas", franchise: "Denver Broncos", position: "WR" },
  { name: "Emmanuel Sanders", franchise: "Denver Broncos", position: "WR" },
  { name: "Eric Decker", franchise: "Denver Broncos", position: "WR" },
  { name: "Julius Thomas", franchise: "Denver Broncos", position: "TE" },

  // Detroit Lions
  { name: "Matthew Stafford", franchise: "Detroit Lions", position: "QB" },
  { name: "Jahmyr Gibbs", franchise: "Detroit Lions", position: "RB" },
  { name: "Joique Bell", franchise: "Detroit Lions", position: "RB" },
  { name: "Amon-Ra St. Brown", franchise: "Detroit Lions", position: "WR" },
  { name: "Calvin Johnson", franchise: "Detroit Lions", position: "WR" },
  { name: "Golden Tate", franchise: "Detroit Lions", position: "WR" },
  { name: "Nate Burleson", franchise: "Detroit Lions", position: "WR" },
  { name: "T.J. Hockenson", franchise: "Detroit Lions", position: "TE" },

  // Green Bay Packers
  { name: "Aaron Rodgers", franchise: "Green Bay Packers", position: "QB" },
  { name: "Brett Favre", franchise: "Green Bay Packers", position: "QB" },
  { name: "Aaron Jones", franchise: "Green Bay Packers", position: "RB" },
  { name: "Eddie Lacy", franchise: "Green Bay Packers", position: "RB" },
  { name: "Ryan Grant", franchise: "Green Bay Packers", position: "RB" },
  { name: "Davante Adams", franchise: "Green Bay Packers", position: "WR" },
  { name: "Greg Jennings", franchise: "Green Bay Packers", position: "WR" },
  { name: "Randall Cobb", franchise: "Green Bay Packers", position: "WR" },
  { name: "Jermichael Finley", franchise: "Green Bay Packers", position: "TE" },

  // Houston Texans
  { name: "Deshaun Watson", franchise: "Houston Texans", position: "QB" },
  { name: "Arian Foster", franchise: "Houston Texans", position: "RB" },
  { name: "Justin Forsett", franchise: "Houston Texans", position: "RB" },
  { name: "Andre Johnson", franchise: "Houston Texans", position: "WR" },
  { name: "DeAndre Hopkins", franchise: "Houston Texans", position: "WR" },
  { name: "Nico Collins", franchise: "Houston Texans", position: "WR" },
  { name: "Will Fuller", franchise: "Houston Texans", position: "WR" },
  { name: "Owen Daniels", franchise: "Houston Texans", position: "TE" },

  // Indianapolis Colts
  { name: "Andrew Luck", franchise: "Indianapolis Colts", position: "QB" },
  { name: "Peyton Manning", franchise: "Indianapolis Colts", position: "QB" },
  { name: "Edgerrin James", franchise: "Indianapolis Colts", position: "RB" },
  { name: "Jonathan Taylor", franchise: "Indianapolis Colts", position: "RB" },
  { name: "Trent Richardson", franchise: "Indianapolis Colts", position: "RB" },
  { name: "Marvin Harrison", franchise: "Indianapolis Colts", position: "WR" },
  { name: "Reggie Wayne", franchise: "Indianapolis Colts", position: "WR" },
  { name: "T.Y. Hilton", franchise: "Indianapolis Colts", position: "WR" },
  { name: "Dallas Clark", franchise: "Indianapolis Colts", position: "TE" },

  // Jacksonville Jaguars
  { name: "Blake Bortles", franchise: "Jacksonville Jaguars", position: "QB" },
  { name: "David Garrard", franchise: "Jacksonville Jaguars", position: "QB" },
  { name: "Fred Taylor", franchise: "Jacksonville Jaguars", position: "RB" },
  { name: "James Robinson", franchise: "Jacksonville Jaguars", position: "RB" },
  { name: "Leonard Fournette", franchise: "Jacksonville Jaguars", position: "RB" },
  { name: "Maurice Jones-Drew", franchise: "Jacksonville Jaguars", position: "RB" },
  { name: "Travis Etienne", franchise: "Jacksonville Jaguars", position: "RB" },
  { name: "DJ Chark", franchise: "Jacksonville Jaguars", position: "WR" },

  // Kansas City Chiefs
  { name: "Patrick Mahomes", franchise: "Kansas City Chiefs", position: "QB" },
  { name: "Jamaal Charles", franchise: "Kansas City Chiefs", position: "RB" },
  { name: "Larry Johnson", franchise: "Kansas City Chiefs", position: "RB" },
  { name: "Priest Holmes", franchise: "Kansas City Chiefs", position: "RB" },
  { name: "Chris Conley", franchise: "Kansas City Chiefs", position: "WR" },
  { name: "Dwayne Bowe", franchise: "Kansas City Chiefs", position: "WR" },
  { name: "Tyreek Hill", franchise: "Kansas City Chiefs", position: "WR" },
  { name: "Travis Kelce", franchise: "Kansas City Chiefs", position: "TE" },

  // Las Vegas Raiders
  { name: "Derek Carr", franchise: "Las Vegas Raiders", position: "QB" },
  { name: "Darren McFadden", franchise: "Las Vegas Raiders", position: "RB" },
  { name: "Josh Jacobs", franchise: "Las Vegas Raiders", position: "RB" },
  { name: "Amari Cooper", franchise: "Las Vegas Raiders", position: "WR" },
  { name: "Jacoby Ford", franchise: "Las Vegas Raiders", position: "WR" },
  { name: "Darren Waller", franchise: "Las Vegas Raiders", position: "TE" },
  { name: "Zach Miller", franchise: "Las Vegas Raiders", position: "TE" },

  // Los Angeles Chargers
  { name: "Justin Herbert", franchise: "Los Angeles Chargers", position: "QB" },
  { name: "Philip Rivers", franchise: "Los Angeles Chargers", position: "QB" },
  { name: "Darren Sproles", franchise: "Los Angeles Chargers", position: "RB" },
  { name: "LaDainian Tomlinson", franchise: "Los Angeles Chargers", position: "RB" },
  { name: "Melvin Gordon", franchise: "Los Angeles Chargers", position: "RB" },
  { name: "Keenan Allen", franchise: "Los Angeles Chargers", position: "WR" },
  { name: "Malcom Floyd", franchise: "Los Angeles Chargers", position: "WR" },
  { name: "Vincent Jackson", franchise: "Los Angeles Chargers", position: "WR" },
  { name: "Antonio Gates", franchise: "Los Angeles Chargers", position: "TE" },

  // Los Angeles Rams
  { name: "Jared Goff", franchise: "Los Angeles Rams", position: "QB" },
  { name: "Steven Jackson", franchise: "Los Angeles Rams", position: "RB" },
  { name: "Todd Gurley", franchise: "Los Angeles Rams", position: "RB" },
  { name: "Zac Stacy", franchise: "Los Angeles Rams", position: "RB" },
  { name: "Cooper Kupp", franchise: "Los Angeles Rams", position: "WR" },
  { name: "Robert Woods", franchise: "Los Angeles Rams", position: "WR" },
  { name: "Torry Holt", franchise: "Los Angeles Rams", position: "WR" },

  // Miami Dolphins
  { name: "Ryan Tannehill", franchise: "Miami Dolphins", position: "QB" },
  { name: "Jay Ajayi", franchise: "Miami Dolphins", position: "RB" },
  { name: "Lamar Miller", franchise: "Miami Dolphins", position: "RB" },
  { name: "Ricky Williams", franchise: "Miami Dolphins", position: "RB" },
  { name: "Chris Chambers", franchise: "Miami Dolphins", position: "WR" },
  { name: "DeVante Parker", franchise: "Miami Dolphins", position: "WR" },
  { name: "Jarvis Landry", franchise: "Miami Dolphins", position: "WR" },

  // Minnesota Vikings
  { name: "Kirk Cousins", franchise: "Minnesota Vikings", position: "QB" },
  { name: "Adrian Peterson", franchise: "Minnesota Vikings", position: "RB" },
  { name: "Dalvin Cook", franchise: "Minnesota Vikings", position: "RB" },
  { name: "Justin Jefferson", franchise: "Minnesota Vikings", position: "WR" },
  { name: "Randy Moss", franchise: "Minnesota Vikings", position: "WR" },
  { name: "Sidney Rice", franchise: "Minnesota Vikings", position: "WR" },
  { name: "Stefon Diggs", franchise: "Minnesota Vikings", position: "WR" },
  { name: "Kyle Rudolph", franchise: "Minnesota Vikings", position: "TE" },
  { name: "Visanthe Shiancoe", franchise: "Minnesota Vikings", position: "TE" },

  // New England Patriots
  { name: "Tom Brady", franchise: "New England Patriots", position: "QB" },
  { name: "Kevin Faulk", franchise: "New England Patriots", position: "RB" },
  { name: "LeGarrette Blount", franchise: "New England Patriots", position: "RB" },
  { name: "Sony Michel", franchise: "New England Patriots", position: "RB" },
  { name: "Julian Edelman", franchise: "New England Patriots", position: "WR" },
  { name: "Wes Welker", franchise: "New England Patriots", position: "WR" },
  { name: "Rob Gronkowski", franchise: "New England Patriots", position: "TE" },

  // New Orleans Saints
  { name: "Drew Brees", franchise: "New Orleans Saints", position: "QB" },
  { name: "Alvin Kamara", franchise: "New Orleans Saints", position: "RB" },
  { name: "Mark Ingram", franchise: "New Orleans Saints", position: "RB" },
  { name: "Pierre Thomas", franchise: "New Orleans Saints", position: "RB" },
  { name: "Reggie Bush", franchise: "New Orleans Saints", position: "RB" },
  { name: "Devery Henderson", franchise: "New Orleans Saints", position: "WR" },
  { name: "Marques Colston", franchise: "New Orleans Saints", position: "WR" },
  { name: "Michael Thomas", franchise: "New Orleans Saints", position: "WR" },
  { name: "Jimmy Graham", franchise: "New Orleans Saints", position: "TE" },

  // New York Giants
  { name: "Eli Manning", franchise: "New York Giants", position: "QB" },
  { name: "Ahmad Bradshaw", franchise: "New York Giants", position: "RB" },
  { name: "Brandon Jacobs", franchise: "New York Giants", position: "RB" },
  { name: "Saquon Barkley", franchise: "New York Giants", position: "RB" },
  { name: "Hakeem Nicks", franchise: "New York Giants", position: "WR" },
  { name: "Odell Beckham Jr.", franchise: "New York Giants", position: "WR" },
  { name: "Plaxico Burress", franchise: "New York Giants", position: "WR" },
  { name: "Evan Engram", franchise: "New York Giants", position: "TE" },

  // New York Jets
  { name: "Geno Smith", franchise: "New York Jets", position: "QB" },
  { name: "Chris Ivory", franchise: "New York Jets", position: "RB" },
  { name: "Shonn Greene", franchise: "New York Jets", position: "RB" },
  { name: "Thomas Jones", franchise: "New York Jets", position: "RB" },
  { name: "Braylon Edwards", franchise: "New York Jets", position: "WR" },
  { name: "Jerricho Cotchery", franchise: "New York Jets", position: "WR" },

  // Philadelphia Eagles
  { name: "Donovan McNabb", franchise: "Philadelphia Eagles", position: "QB" },
  { name: "Jalen Hurts", franchise: "Philadelphia Eagles", position: "QB" },
  { name: "Brian Westbrook", franchise: "Philadelphia Eagles", position: "RB" },
  { name: "LeSean McCoy", franchise: "Philadelphia Eagles", position: "RB" },
  { name: "Miles Sanders", franchise: "Philadelphia Eagles", position: "RB" },
  { name: "A.J. Brown", franchise: "Philadelphia Eagles", position: "WR" },
  { name: "DeSean Jackson", franchise: "Philadelphia Eagles", position: "WR" },
  { name: "Jeremy Maclin", franchise: "Philadelphia Eagles", position: "WR" },
  { name: "Zach Ertz", franchise: "Philadelphia Eagles", position: "TE" },

  // Pittsburgh Steelers
  { name: "Ben Roethlisberger", franchise: "Pittsburgh Steelers", position: "QB" },
  { name: "Le'Veon Bell", franchise: "Pittsburgh Steelers", position: "RB" },
  { name: "Najee Harris", franchise: "Pittsburgh Steelers", position: "RB" },
  { name: "Willie Parker", franchise: "Pittsburgh Steelers", position: "RB" },
  { name: "Antonio Brown", franchise: "Pittsburgh Steelers", position: "WR" },
  { name: "Hines Ward", franchise: "Pittsburgh Steelers", position: "WR" },
  { name: "JuJu Smith-Schuster", franchise: "Pittsburgh Steelers", position: "WR" },
  { name: "Mike Wallace", franchise: "Pittsburgh Steelers", position: "WR" },
  { name: "Heath Miller", franchise: "Pittsburgh Steelers", position: "TE" },

  // San Francisco 49ers
  { name: "Alex Smith", franchise: "San Francisco 49ers", position: "QB" },
  { name: "Colin Kaepernick", franchise: "San Francisco 49ers", position: "QB" },
  { name: "Frank Gore", franchise: "San Francisco 49ers", position: "RB" },
  { name: "Brandon Aiyuk", franchise: "San Francisco 49ers", position: "WR" },
  { name: "Deebo Samuel", franchise: "San Francisco 49ers", position: "WR" },
  { name: "Michael Crabtree", franchise: "San Francisco 49ers", position: "WR" },
  { name: "George Kittle", franchise: "San Francisco 49ers", position: "TE" },
  { name: "Vernon Davis", franchise: "San Francisco 49ers", position: "TE" },

  // Seattle Seahawks
  { name: "Matt Hasselbeck", franchise: "Seattle Seahawks", position: "QB" },
  { name: "Russell Wilson", franchise: "Seattle Seahawks", position: "QB" },
  { name: "Chris Carson", franchise: "Seattle Seahawks", position: "RB" },
  { name: "Marshawn Lynch", franchise: "Seattle Seahawks", position: "RB" },
  { name: "Shaun Alexander", franchise: "Seattle Seahawks", position: "RB" },
  { name: "DK Metcalf", franchise: "Seattle Seahawks", position: "WR" },
  { name: "Doug Baldwin", franchise: "Seattle Seahawks", position: "WR" },
  { name: "Jermaine Kearse", franchise: "Seattle Seahawks", position: "WR" },
  { name: "Tyler Lockett", franchise: "Seattle Seahawks", position: "WR" },

  // Tampa Bay Buccaneers
  { name: "Jameis Winston", franchise: "Tampa Bay Buccaneers", position: "QB" },
  { name: "Josh Freeman", franchise: "Tampa Bay Buccaneers", position: "QB" },
  { name: "Cadillac Williams", franchise: "Tampa Bay Buccaneers", position: "RB" },
  { name: "Doug Martin", franchise: "Tampa Bay Buccaneers", position: "RB" },
  { name: "Ronald Jones", franchise: "Tampa Bay Buccaneers", position: "RB" },
  { name: "Chris Godwin", franchise: "Tampa Bay Buccaneers", position: "WR" },
  { name: "Mike Evans", franchise: "Tampa Bay Buccaneers", position: "WR" },

  // Tennessee Titans
  { name: "Marcus Mariota", franchise: "Tennessee Titans", position: "QB" },
  { name: "Steve McNair", franchise: "Tennessee Titans", position: "QB" },
  { name: "Vince Young", franchise: "Tennessee Titans", position: "QB" },
  { name: "Chris Johnson", franchise: "Tennessee Titans", position: "RB" },
  { name: "Derrick Henry", franchise: "Tennessee Titans", position: "RB" },
  { name: "Kendall Wright", franchise: "Tennessee Titans", position: "WR" },
  { name: "Kenny Britt", franchise: "Tennessee Titans", position: "WR" },

  // Washington
  { name: "Robert Griffin III", franchise: "Washington", position: "QB" },
  { name: "Alfred Morris", franchise: "Washington", position: "RB" },
  { name: "Clinton Portis", franchise: "Washington", position: "RB" },
  { name: "Santana Moss", franchise: "Washington", position: "WR" },
  { name: "Terry McLaurin", franchise: "Washington", position: "WR" },
  { name: "Chris Cooley", franchise: "Washington", position: "TE" },
  { name: "Jordan Reed", franchise: "Washington", position: "TE" },
];
