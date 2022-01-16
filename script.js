const container = document.getElementById("container");
const buttons = document.getElementById("buttons");
const gridToggle = document.getElementById("grid-toggle");

// gridToggle.onclick = () => setGridLines('tglOn')

// function setGridLines() {
//   if (gridLinesToggle === 'tglOn'){
//     gridLinesToggle();
    
//   }
// }

gridToggle.addEventListener('click', () => {
  gridLinesToggle();
})

function gridLinesToggle() {
  let gridLines = document.querySelectorAll(".grid-item");
  gridLines.forEach(gridLine => {
    gridLine.style.outlineStyle = "none";
  });
}



function makeCanvas(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  
  changeCellColor();
};

makeCanvas(16, 16);

// changes color of each cell to black
function changeCellColor() {
  let cellColors = document.querySelectorAll(".grid-item");
  cellColors.forEach(cellColor => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = "black";
    });
  });
}












