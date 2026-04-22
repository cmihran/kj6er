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
    specs: "Overview of the complete KJ6ER antenna design family",
    category: "Primers & Reference",
    href: "https://bit.ly/KJ6ERAntennasFamily",
  },
  {
    name: "KJ6ER Antennas Primer",
    specs: "Design philosophy, modeling notes, build principles",
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
    specs: "40M–6M quarterwave vertical · elevated tuned linked radials",
    category: "Quarterwave Verticals",
    href: "https://bit.ly/KJ6ERPERformer",
  },
  {
    name: "PERformer NVIS",
    specs: "40M–6M quarterwave · high-angle NVIS variant",
    category: "Quarterwave Verticals",
    href: "https://bit.ly/KJ6ERPERformerNVIS",
  },

  // ---- Halfwave Verticals ----
  {
    name: "Challenger",
    specs: "20M–6M OCF halfwave vertical",
    category: "Halfwave Verticals",
    href: "https://bit.ly/KJ6ERChallenger",
  },
  {
    name: "Dominator",
    specs: "17M–10M end-fed halfwave vertical",
    category: "Halfwave Verticals",
    href: "https://bit.ly/KJ6ERDominator",
  },

  // ---- Fullwave Verticals ----
  {
    name: "Thruster",
    specs: "20M–6M · Fullwave Triangular Loop",
    category: "Fullwave Verticals",
    comingSoon: true,
  },

  // ---- Parasitic & Phased Arrays ----
  {
    name: "PERformer 2-Element Parasitic Array",
    specs: "40M–6M · parasitic beam configuration",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERParasiticPERformerArray",
  },
  {
    name: "PERformer 2-Element Phased Array",
    specs: "40M–6M · phased array variant",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERPhasedPERformerArray",
  },
  {
    name: "Dominator 2-Element Parasitic Array",
    specs: "17M–10M EF halfwave · 2-element parasitic beam",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERParasiticDominatorArray",
  },
  {
    name: "Marauder",
    specs: "20M–10M · Moxon-inspired 2-element parasitic array",
    category: "Parasitic & Phased Arrays",
    href: "https://bit.ly/KJ6ERMarauder",
  },
];
