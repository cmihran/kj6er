// =========================================================
// Antenna plans data — edit this file to add/update plans.
// Both the retro and modern pages read from here.
// =========================================================
//
// To add a new plan, copy one of the entries below and change
// the four fields. "category" must match one of CATEGORY_ORDER
// below (or add a new category there).
//
//   name:     short title shown on the card
//   specs:    one-line description (bands, length, notes)
//   category: which group the plan belongs to
//   href:     bit.ly (or other) link to the PDF
//
// Tip: the `href` links below are placeholders — replace with
// your real bit.ly links.

const CATEGORY_ORDER = [
  "HF Wire Antennas",
  "End-Fed & Long Wire",
  "Verticals",
  "Loops",
  "VHF / UHF",
  "Portable & QRP",
];

const PLANS = [
  // ---- HF Wire Antennas ----
  {
    name: "40m Off-Center-Fed Dipole",
    specs: "40 / 20 / 10m · ~66 ft · 4:1 balun",
    category: "HF Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-01",
  },
  {
    name: "80m Doublet with Ladder Line",
    specs: "80–10m tuned · ~135 ft · balanced feed",
    category: "HF Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-02",
  },
  {
    name: "20m Half-Wave Dipole",
    specs: "20m · ~33 ft · 1:1 current balun",
    category: "HF Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-03",
  },
  {
    name: "40m Inverted-V",
    specs: "40m · ~66 ft · center-fed, apex up",
    category: "HF Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-04",
  },
  {
    name: "Multiband Fan Dipole",
    specs: "80 / 40 / 20 / 15 / 10m · common feed",
    category: "HF Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-05",
  },

  // ---- End-Fed & Long Wire ----
  {
    name: "End-Fed Half-Wave, 80–10m",
    specs: "Multi-band · ~135 ft · 49:1 unun",
    category: "End-Fed & Long Wire",
    href: "https://bit.ly/REPLACE-ME-06",
  },
  {
    name: "40m End-Fed Random Wire",
    specs: "40m+ with tuner · ~53 ft + counterpoise",
    category: "End-Fed & Long Wire",
    href: "https://bit.ly/REPLACE-ME-07",
  },
  {
    name: "Zepp Antenna, 40m",
    specs: "40m fundamental · ladder-line fed",
    category: "End-Fed & Long Wire",
    href: "https://bit.ly/REPLACE-ME-08",
  },

  // ---- Verticals ----
  {
    name: "¼-Wave 40m Vertical",
    specs: "40m · 33 ft · 16 radials",
    category: "Verticals",
    href: "https://bit.ly/REPLACE-ME-09",
  },
  {
    name: "Trap Multiband Vertical",
    specs: "80–10m · traps · Hustler-style",
    category: "Verticals",
    href: "https://bit.ly/REPLACE-ME-10",
  },
  {
    name: "20m Ground-Mounted Vertical",
    specs: "20m · 16.5 ft · minimal radials",
    category: "Verticals",
    href: "https://bit.ly/REPLACE-ME-11",
  },

  // ---- Loops ----
  {
    name: "80m Full-Wave Horizontal Loop",
    specs: "80 / 40 / 20 / 15 / 10m · ~260 ft",
    category: "Loops",
    href: "https://bit.ly/REPLACE-ME-12",
  },
  {
    name: "20m Small Magnetic Loop",
    specs: "QRP · ~3 ft dia. · tuning capacitor",
    category: "Loops",
    href: "https://bit.ly/REPLACE-ME-13",
  },

  // ---- VHF / UHF ----
  {
    name: "2m / 70cm Roll-Up J-Pole",
    specs: "Portable · 300-ohm twinlead",
    category: "VHF / UHF",
    href: "https://bit.ly/REPLACE-ME-14",
  },
  {
    name: "3-Element 2m Yagi",
    specs: "2m · boom ~4 ft · ~7 dBi gain",
    category: "VHF / UHF",
    href: "https://bit.ly/REPLACE-ME-15",
  },
  {
    name: "70cm Cheap Yagi",
    specs: "70cm · 7 elements · portable",
    category: "VHF / UHF",
    href: "https://bit.ly/REPLACE-ME-16",
  },
  {
    name: "2m Slim Jim",
    specs: "2m · 300-ohm ladder · home station",
    category: "VHF / UHF",
    href: "https://bit.ly/REPLACE-ME-17",
  },

  // ---- Portable & QRP ----
  {
    name: "40m QRP EFHW",
    specs: "40m · 66 ft · compact 49:1",
    category: "Portable & QRP",
    href: "https://bit.ly/REPLACE-ME-18",
  },
  {
    name: "Linked Dipole, 40 / 20 / 10m",
    specs: "SOTA-ready · lightweight · clip links",
    category: "Portable & QRP",
    href: "https://bit.ly/REPLACE-ME-19",
  },
  {
    name: "Telescopic HF Vertical",
    specs: "HF portable · adjustable · Buddipole-style",
    category: "Portable & QRP",
    href: "https://bit.ly/REPLACE-ME-20",
  },
];
