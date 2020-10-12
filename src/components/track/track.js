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

export function createTrackElement(title, artist) {
  /* export function createTrackElement() {
  const title = "Thriller";
  const artist = "Michael Jackson";
*/
  const trackElement = document.createElement("div"); // create a div Element <div></div>
  // divElement.innerText = "This is a track"; //<div> This is a track</div>
  trackElement.className = "track";
  const imgElement = document.createElement("img"); // create img Elment
  imgElement.src =
    "https://the-hollywood-gossip-res.cloudinary.com/iu/s--NeYhqfz---/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364525135/vintage-michael-jackson.jpg";
  imgElement.alt = "Image of" + artist;
  // alternativ   imgElement.alt = 'Image of $(artist)';
  imgElement.className = "track__image";
  const titleElement = document.createElement("h3"); // create h3 Elment
  titleElement.innerText = title; // <h3>Billie Jean</h3>
  const artistElement = document.createElement("p"); // create p Elment
  artistElement.innerText = artist; // <p>Michael jackson</p>
  const buttonElement = document.createElement("button");
  buttonElement.className = "button";
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;

  trackElement.append(imgElement, titleElement, artistElement, buttonElement); //<div><h3>Michael Jackson</h3></div>
  buttonElement.append(playActionElement);
  buttonElement.onclick = function () {
    alert("click!");
  };

  return trackElement;
}
