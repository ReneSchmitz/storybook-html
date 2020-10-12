/*
<div>
<img src="--/micheal.png"/>
<h3>Billie Jean<h3>
<>Michael Jackson</>
<button><img src="../play.svg" />
</button>
</div>
*/

export function createTrackElement() {
  const divElement = document.createElement("div"); // create a div Element <div></div>
  // divElement.innerText = "This is a track"; //<div> This is a track</div>

  const h3Element = document.createElement("h3"); // create h3 Elment
  h3Element.innerText = "Billie Jean"; // <h3>Michael jackson</h3>
  const pElement = document.createElement("p"); // create h3 Elment
  pElement.innerText = "Michael Jackson"; // <h3>Michael jackson</h3>

  divElement.append(h3Element); //<div><h3>Michael Jackson</h3></div>
  divElement.append(pElement); //<div><h3>Michael Jackson</h3></div>
  return divElement;
}
