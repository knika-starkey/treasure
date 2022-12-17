let wrap = document.getElementById("wrap");
let map = document.getElementById("map");
wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;
wrap.style.position = "relative";

let treasure = {
  x: Math.floor(Math.random() * map.width),
  y: Math.floor(Math.random() * map.height),
};

let coords = document.getElementById("coords");
map.onmousemove = showCoords;

function showCoords(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  coords.value = `Координати ${x}:${y}`;
  if (Math.abs(treasure.x - x) < 50 && Math.abs(treasure.y - y) < 50) {
    let treasureCircle = document.createElement("div");
    treasureCircle.style = `border: 5px solid red; border-radius: 50%; width: 50px; height: 50px; position: absolute; top: ${treasure.x}px; left: ${treasure.y}px;`;
    wrap.appendChild(treasureCircle);

    alert("Скарб тут!");
    return;
  }
}

let helpB = document.getElementById("help");
helpB.addEventListener("click", function () {
  let helpCircle = document.createElement("div");
  helpCircle.style = `border: 2px solid blue; border-radius: 50%; width: 120px; height: 120px; position: absolute; top: ${treasure.x}px; left: ${treasure.y}px;`;
  wrap.appendChild(helpCircle);
});
