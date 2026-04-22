// =========================================================
// Antenna plans data. Edit this file to add/update plans.
// index.html reads from here.
// =========================================================
//
// To add a plan, copy an entry and change the four fields:
//   name:     short title shown on the card
//   specs:    one-line description (bands, length, notes)
//   category: which group the plan belongs to, must match a
//             name in CATEGORY_ORDER below, or add a new one
//   href:     bit.ly link to the PDF

const CATEGORY_ORDER = [
  "Primers & Reference",
  "Quarterwave Verticals",
  "Halfwave Verticals",
  "Fullwave Verticals",
  "Parasitic & Phased Arrays",
];

const PLANS = [
  // ---- Primers & Reference ----
  {
    name: "KJ6ER Antennas Family",
    specs: "Overview of the Complete KJ6ER Antenna Plans Portfolio",
    category: "Primers & Reference",
    href: "https://bit.ly/KJ6ERAntennasFamily",
  },
  {
    name: "KJ6ER Antennas Primer",
    specs: "In-depth Research, Analyses and KJ6ER Antennas Guide",
    category: "Primers & Reference",
    href: "https://bit.ly/KJ6ERAntennasPrimer",
  },
  {
    name: "Sporadic-E Propagation",
    specs: "Leveraging Sporadic-E with KJ6ER 6-Meter Antennas",
    category: "Primers & Reference",
    href: "https://bit.ly/KJ6ERSporadicE",
  },

  // ---- Quarterwave Verticals ----
  {
    name: "PERformer",
    specs: "40M–6M · Omni/Directional Elevated Tuned Linked Radials",
    category: "Quarterwave Verticals",
    href: "https://bit.ly/KJ6ERPERformer",
  },
  {
    name: "PERformer NVIS",
    specs: "40M–6M · Omnidirectional High Angle Radiation Variant",
    category: "Quarterwave Verticals",
    href: "https://bit.ly/KJ6ERPERformerNVIS",
  },

  // ---- Halfwave Verticals ----
  {
    name: "Challenger",
    specs: "20M–6M · Omnidirectional Off-Center Fed with 4:1 Unun",
    category: "Halfwave Verticals",
    href: "https://bit.ly/KJ6ERChallenger",
  },
  {
    name: "Dominator",
    specs: "17M–10M · Omnidirectional End-Fed with 49/56:1 Unun",
    category: "Halfwave Verticals",
    href: "https://bit.ly/KJ6ERDominator",
  },

  // ---- Fullwave Verticals ----
  {
    name: "Hammer",
    specs: "20M–10M · Halfsquare Bidirectional with 9:1 Balun",
    category: "Fullwave Verticals",
    comingSoon: true,
  },
  {
    name: "Thruster",
    specs: "20M–6M · Triangular Loop Bidirectional with 4:1 Balun",
    category: "Fullwave Verticals",
    comingSoon: true,
  },

  // ---- Parasitic & Phased Arrays ----
  {
    name: "PERformer 2-Element Parasitic Array",
    specs: "40M–6M · Directional Vertical Beam",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERParasiticPERformerArray",
  },
  {
    name: "PERformer 2-Element Phased Array",
    nameHtml: "PERformer 2-Element <u>Phased</u> Array",
    specs: "40M–6M · Bi/Directional Vertical Beam Variant",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERPhasedPERformerArray",
  },
  {
    name: "Challenger 2-Element Parasitic Array",
    specs: "20M–6M · Directional Off-Center Fed Vertical Beam with 4:1 Unun",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERChallenger",
  },
  {
    name: "Dominator 2-Element Parasitic Array",
    specs: "17M–10M · Directional End-Fed Vertical Beam",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERParasiticDominatorArray",
  },
  {
    name: "Marauder 2-Element Parasitic Array",
    specs: "20M–10M · Directional Moxon-Inspired Vertical Beam",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERMarauder",
  },
];
