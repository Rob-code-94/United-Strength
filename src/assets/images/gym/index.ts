/**
 * United Strength facility photography — copied from `GYM PHOTOS BETA/`.
 * Source-of-truth folder and folder naming: see `.cursor/rules/gym-photos-beta.mdc`.
 */
import heroFullBleed from "./hero-full-bleed.jpg";
import spaceAtmosphere from "./space-atmosphere.jpg";
import architectureRaw from "./architecture-raw.jpg";
import galleryCinematic from "./gallery-cinematic.jpg";
import equipmentClose from "./equipment-close.jpg";
import experienceBroll from "./experience-broll.jpg";
import floorColumbus from "./floor-columbus.jpg";
import rackWeights from "./rack-weights.jpg";
import runClub from "./run-club.jpg";

export const gymPhotos = {
  heroFullBleed,
  spaceAtmosphere,
  architectureRaw,
  galleryCinematic,
  equipmentClose,
  /** B Roll · United-127 — STRONGER mural (Experience United chapter) */
  experienceBroll,
  /** Equipment · United-109 — training floor, benches, dumbbells, COLUMBUS banner */
  floorColumbus,
  /** Equipment · United-96 — dumbbell rack, plates, rings */
  rackWeights,
  /** Run Club · Pexels 2402777 — urban community runners (HD stock) */
  runClub,
} as const;
