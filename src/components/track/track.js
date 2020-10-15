import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import pauseActionSrc from "../../assets/pause-action.svg";

/*
<div class="track">
<img class="track_img" src="--/micheal.png"/>
<h3 class="track__title">Billie Jean<h3>
<p class="track__artist">Michael Jackson</p>
<button><img src="../play.svg" />
</button>
</div>
*/

export function createTrackElement(track) {
  const trackElement = createElement("div", {
    className: "track",
    innerText: "Replace Me!",
  });
  return trackElement;
}

// export function createTrackElement(track) {
//   /* export function createTrackElement() {
//   const title = "Thriller";
//   const artist = "Michael Jackson";*/
//   const trackElement = document.createElement("div"); // create a div Element <div></div>
//   // divElement.innerText = "This is a track"; //<div> This is a track</div>
//   trackElement.className = "track";

//   const imgElement = document.createElement("img"); // create img Elment
//   imgElement.src = track.imgSrc;
//   imgElement.alt = "Image of" + track.artist;
//   // alternativ   imgElement.alt = 'Image of $(artist)';
//   imgElement.className = "track__image";
//   const titleElement = document.createElement("h3"); // create h3 Elment
//   titleElement.innerText = track.title; // <h3>Billie Jean</h3>
//   const artistElement = document.createElement("p"); // create p Elment
//   artistElement.innerText = track.artist; // <p>Michael jackson</p>
//   const buttonElement = document.createElement("button");
//   buttonElement.className = "button";
//   const playActionElement = document.createElement("img");
//   playActionElement.src = playActionSrc;
//   const pauseActionElement = document.createElement("img");
//   pauseActionElement.src = pauseActionSrc;

//   trackElement.append(imgElement, titleElement, artistElement, buttonElement); //<div><h3>Michael Jackson</h3></div>
//   buttonElement.append(playActionElement);

//   const audioElement = new Audio(track.audioSrc);

//   let isPlaying = false;
//   /* alternative 1
//   buttonElement.onclick = function () {
//     if (isPlaying) {
//       audioElement.pause();
//       playActionElement.src = playActionSrc;
//       playActionElement.alt = "Play Button";
//     } else {
//       audioElement.play();
//       playActionElement.src = pauseActionSrc;
//       playActionElement.alt = "Pause Button";
//     }
//     isPlaying = !isPlaying;
//   };
//   */
//   /*alternative 2
//   let isPlaying = false;

//   const showPlayIcon = () =>{
//     playActionElement.src =playActionSrc;
//     playActionElement.alt = "Play Button";
//   };
//   const showPauseIcon = () =>{
//     playActionElement.src =pauseActionSrc;
//     playActionElement.alt = "Pause Button";
//   };

//   buttonElement.onclick = function () {
//     if (isPlaying) {
//       audioElement.pause();
//       setPlayIcon();
//     } else {
//       audioElement.play();
//       setPauseIcon();
//     }
//     isPlaying = !isPlaying;
//   };
// */

//   buttonElement.onclick = () => {
//     if (isPlaying) {
//       audioElement.pause();
//       setPlayIcon(playActionElement);
//     } else {
//       audioElement.play();
//       setPauseIcon(playActionElement);
//     }
//     isPlaying = !isPlaying;
//   };

//   /* alternative
//   let isPlaying = false;

//   buttonElement.onclick = function () {
//     if (isPlaying) {
//       audioElement.pause();
//       isPlaying = false;
//       playActionElement.src = playActionSrc;
//       playActionElement.alt = "Play Button";
//     } else {
//       audioElement.play();
//       isPlaying = true;
//       playActionElement.src = pauseActionSrc;
//       playActionElement.alt = "Pause Button";
//     }
//   };
// */

//   return trackElement;
// }

const setPlayIcon = (playActionElement) => {
  playActionElement.src = playActionSrc;
  playActionElement.alt = "Play Button";
};
const setPauseIcon = (playActionElement) => {
  playActionElement.src = pauseActionSrc;
  playActionElement.alt = "Pause Button";
};
