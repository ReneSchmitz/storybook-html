import 

import "./dashboard.css";
import { createElement } from "../../utils/elements";

export const createDashboardElement = (dashboard) => {
  const dashboardElement = new Audio(dashboard.audioSrc);
  // const iconAltText = `Play ${track.title} by ${track.artist}`;
  // const playIcon = creatElement("img", {
  // src: playIconPlay,
  // alt: iconAltText,
  // });
  const dashboardActionElement = createElement("div", {
    className: "dashboard_element",
    children: [
      createElement("div", {
        className: "primary__control",
        children: [
          createElement("div", {
            className: "player",
            children: [
              createElement("div", {
                className: "player__main",
                children:[
                  createElement("button", {
                    className: "play__button",
                    onclick: () => {
                      console.log("Play: Last Song");
                    },
                    children: [
                      createElement("img", {
                        src: rewingImgSrc,
                        alt: "Last Song",
                      }),
                    ],
                  }),
          createElement("img", {
            src: dashboard.playImgSrc,
            alt: "play",
          }),
          createElement("img", {
            src: dashboard.forwardImgSrc,
            alt: "Next Song",
          }),
        ],
      }),
      createElement("div", {
        className: "secondary__control",
        children: [
          createElement("img", {
            src: dashboard.playlistImgSrc,
            alt: "playlist",
          }),
          createElement("img", {
            src: dashboard.shuffleImgSrc,
            alt: "shuffle",
          }),
          createElement("img", {
            src: dashboard.repeatImgSrc,
            alt: "repeat",
          }),
          createElement("img", {
            src: dashboard.eqImgSrc,
            alt: "equalizer",
          }),
          createElement("img", {
            src: dashboard.favImgSrc,
            alt: "favourites",
          }),
        ],
      }),
    ],
  });
};
