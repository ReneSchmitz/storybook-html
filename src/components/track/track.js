import "./track.css";
import playActionSrc from "../../assets/play-action.svg";

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
  /* export function createTrackElement() {
  const title = "Thriller";
  const artist = "Michael Jackson";*/
  const trackElement = document.createElement("div"); // create a div Element <div></div>
  // divElement.innerText = "This is a track"; //<div> This is a track</div>
  trackElement.className = "track";

  const imgElement = document.createElement("img"); // create img Elment
  imgElement.src = track.imgSrc;
  imgElement.alt = "Image of" + track.artist;
  // alternativ   imgElement.alt = 'Image of $(artist)';
  imgElement.className = "track__image";
  const titleElement = document.createElement("h3"); // create h3 Elment
  titleElement.innerText = track.title; // <h3>Billie Jean</h3>
  const artistElement = document.createElement("p"); // create p Elment
  artistElement.innerText = track.artist; // <p>Michael jackson</p>
  const buttonElement = document.createElement("button");
  buttonElement.className = "button";
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;

  trackElement.append(imgElement, titleElement, artistElement, buttonElement); //<div><h3>Michael Jackson</h3></div>
  buttonElement.append(playActionElement);

  const audioElement = new Audio(track.audioSrc);
  buttonElement.onclick = function () {
    audioElement.play();
  };

  return trackElement;
}
