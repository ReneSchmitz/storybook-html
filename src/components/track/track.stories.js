import { createTrackElement } from "./track";

export default { title: "Components/Track", parameter: { layout: "centered" } };

export const billieJean = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc:
      "https://the-hollywood-gossip-res.cloudinary.com/iu/s--NeYhqfz---/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364525135/vintage-michael-jackson.jpg",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequecy/Ketsa_-_03_-_Dusty_Hills.mp3",
  });
export const beTheGirl = () => {
  /*alternativ */
  const beTheGirlTrack = {
    /*alternativ */ title: "Be the girl" /*alternativ */,
    artist: "Bebe Rexa" /*alternativ */,
    imgSrc:
      "https://the-hollywood-gossip-res.cloudinary.com/iu/s--NeYhqfz---/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364525135/vintage-michael-jackson.jpg" /*alternativ */,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequecy/Ketsa_-_03_-_Dusty_Hills.mp3" /*alternativ */,
  }; /*alternativ */
  return createTrackElement(beTheGirlTrack); /*alternativ */
}; /*arternativ */
export const countryman = () =>
  createTrackElement({
    title: "Countryman",
    artist: "Daughtry",
    imgSrc:
      "https://the-hollywood-gossip-res.cloudinary.com/iu/s--NeYhqfz---/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364525135/vintage-michael-jackson.jpg",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequecy/Ketsa_-_03_-_Dusty_Hills.mp3",
  });
export const christmasAdventure = () =>
  createTrackElement({
    title: "A chrsitmas adventure",
    artist: "Daughtry",
    imgSrc:
      "https://the-hollywood-gossip-res.cloudinary.com/iu/s--NeYhqfz---/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364525135/vintage-michael-jackson.jpg",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequecy/Ketsa_-_03_-_Dusty_Hills.mp3",
  });
/*export const beatIt = () => createTrackElement();*/
