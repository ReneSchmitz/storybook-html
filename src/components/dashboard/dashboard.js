import { createElement } from "../../utils/elements";
import "./dashboard.css";

export const creatDashboardElement = (dashboard) => {
  const dashboardElement = new Audio(dashboard.audioSrc);
  const dashboardActionElement = createElement("div", {
    className: "dashboard_element",
    children: [
      createElement("div", {
        className: "primary__control",
        children: [
          createElement("img", {
            src: dashboard.rewingImgSrc,
            alt: "rewind",
          }),
          createElement("img", {
            src: dashboard.playImgSrc,
            alt: "play",
          }),
          createElement("img", {
            src: dashboard.forwardImgSrc,
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
            src: dashboard.repeatImgSrc,
            alt: "repeat",
          }),
          createElement("img", {
            src: dashboard.repeatImgSrc,
            alt: "repeat",
          }),
        ],
      }),
    ],
  });
};
