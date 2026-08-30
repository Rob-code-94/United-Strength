import toddJohnson from "./todd-johnson.jpg";
import jennaFarkas from "./jenna-farkas.jpg";
import jasonKatz from "./jason-katz.jpg";
import karaShaffer from "./kara-shaffer.jpg";

/** Coach headshots — source: unitedstrengthgym.com/our-team (Aug 2026) */
export const teamPhotos = {
  toddJohnson,
  jennaFarkas,
  jasonKatz,
  karaShaffer,
} as const;

export type TeamPhotoKey = keyof typeof teamPhotos;
