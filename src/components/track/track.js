export function createTrackElement() {
  const divElement = document.createElement("div"); // create a div Element <div></div>
  divElement.innerText = "This is a track"; //<div> This is a track</div>

  const h3Element = document.createElement("h3"); // create h3 Elment
  h3Element.innerText = "Michale Jackson"; // <h3>Michael jackson</h3>

  divElement.append(h3Element); //<div><h3>Michael Jackson</h3></div>
  return divElement;
}
