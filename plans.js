// =========================================================
// Antenna plans data — edit this file to add/update plans.
// Both the retro and modern pages read from here.
// =========================================================
//
// The first entries below are real KJ6ER designs with
// placeholder bit.ly links — swap the href to the real URL.
// The rest are plausible companions in the same style; replace
// or remove them as Greg's library grows.
//
// To add a new plan, copy an entry and change the four fields.
// "category" must match one of CATEGORY_ORDER below (or add a
// new one there).

const CATEGORY_ORDER = [
  "Primers & Reference",
  "Portable Verticals — Quarterwave",
  "Portable Verticals — Halfwave",
  "Vertical Beams",
  "Wire Antennas",
  "VHF, UHF & Specialty",
];

const PLANS = [
  // ---- Primers & Reference ----
  {
    name: "KJ6ER Antennas Primer",
    specs: "Design principles · modeling notes · parts philosophy",
    category: "Primers & Reference",
    href: "https://bit.ly/REPLACE-ME-primer",
  },
  {
    name: "POTA Portable Ops Checklist",
    specs: "Deploy · tune · operate · pack — under 5 minutes",
    category: "Primers & Reference",
    href: "https://bit.ly/REPLACE-ME-pota-checklist",
  },

  // ---- Portable Verticals — Quarterwave ----
  {
    name: "POTA PERformer",
    specs: "40M–6M · elevated ¼-wave · 17 ft whip · 2 tuned radials",
    category: "Portable Verticals — Quarterwave",
    href: "https://bit.ly/REPLACE-ME-performer",
  },
  {
    name: "40m Compact POTA Vertical",
    specs: "40m · 16 ft whip · 2 elevated radials · <1.1 SWR",
    category: "Portable Verticals — Quarterwave",
    href: "https://bit.ly/REPLACE-ME-40m-pota",
  },
  {
    name: "20m Ground-Plane Vertical",
    specs: "20m · 16.5 ft whip · 4 radials · backyard portable",
    category: "Portable Verticals — Quarterwave",
    href: "https://bit.ly/REPLACE-ME-20m-gp",
  },
  {
    name: "10m Quick Vertical",
    specs: "10m · 8 ft whip · QRP-friendly weekend build",
    category: "Portable Verticals — Quarterwave",
    href: "https://bit.ly/REPLACE-ME-10m-quick",
  },

  // ---- Portable Verticals — Halfwave ----
  {
    name: "Challenger",
    specs: "20M–6M halfwave vertical · elevated · minimal radials",
    category: "Portable Verticals — Halfwave",
    href: "https://bit.ly/REPLACE-ME-challenger",
  },
  {
    name: "Dominator",
    specs: "17M–10M halfwave vertical · high-angle suppression",
    category: "Portable Verticals — Halfwave",
    href: "https://bit.ly/REPLACE-ME-dominator",
  },
  {
    name: "40m EFHW Vertical",
    specs: "40m halfwave · 66 ft wire · 49:1 unun · portable",
    category: "Portable Verticals — Halfwave",
    href: "https://bit.ly/REPLACE-ME-40m-efhw",
  },
  {
    name: "80m Halfwave Sloper",
    specs: "80m · single support · home station",
    category: "Portable Verticals — Halfwave",
    href: "https://bit.ly/REPLACE-ME-80m-sloper",
  },

  // ---- Vertical Beams ----
  {
    name: "Dominator 2-Element Beam",
    specs: "17M–10M halfwave · 2-el directional · modeled in 4NEC2",
    category: "Vertical Beams",
    href: "https://bit.ly/REPLACE-ME-dominator-beam",
  },
  {
    name: "20m 2-El Reversible Beam",
    specs: "20m · home station · DX-optimized",
    category: "Vertical Beams",
    href: "https://bit.ly/REPLACE-ME-20m-beam",
  },

  // ---- Wire Antennas ----
  {
    name: "40m Off-Center-Fed Dipole",
    specs: "40 / 20 / 10m · ~66 ft · 4:1 balun",
    category: "Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-ocfd",
  },
  {
    name: "80m Doublet w/ Ladder Line",
    specs: "80–10m · balanced feed · tuner required",
    category: "Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-doublet",
  },
  {
    name: "Multiband Fan Dipole",
    specs: "80 / 40 / 20 / 15 / 10m · common feed",
    category: "Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-fan",
  },
  {
    name: "End-Fed Half-Wave 80–10m",
    specs: "Multi-band · ~135 ft · 49:1 unun",
    category: "Wire Antennas",
    href: "https://bit.ly/REPLACE-ME-efhw-80",
  },

  // ---- VHF, UHF & Specialty ----
  {
    name: "2m / 70cm Roll-Up J-Pole",
    specs: "300-ohm twinlead · portable · go-bag ready",
    category: "VHF, UHF & Specialty",
    href: "https://bit.ly/REPLACE-ME-jpole",
  },
  {
    name: "3-Element 2m Yagi",
    specs: "2m · ~4 ft boom · ~7 dBi gain",
    category: "VHF, UHF & Specialty",
    href: "https://bit.ly/REPLACE-ME-2m-yagi",
  },
  {
    name: "Linked Dipole 40 / 20 / 10m",
    specs: "SOTA-ready · lightweight · clip links",
    category: "VHF, UHF & Specialty",
    href: "https://bit.ly/REPLACE-ME-linked",
  },
  {
    name: "20m Small Magnetic Loop",
    specs: "QRP · ~3 ft dia. · tuning capacitor",
    category: "VHF, UHF & Specialty",
    href: "https://bit.ly/REPLACE-ME-mag-loop",
  },
];
