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

let gridLines = document.getElementsByClassName('grid-item');

function gridLinesToggle() {
  // let gridLines = document.querySelectorAll(".grid-item");
  for (var i = 0; i < gridLines.length; i++) {
    gridLines[i].classList.toggle('grid-tgl');
    
    if (gridLines[i].classList.contains('grid-tgl')){
      gridToggle.textContent = "Grid: On";
    } else if (gridLines[i].classList.contains('grid-tgl') == false){
      gridToggle.textContent = "Grid: Off";
    }
  }
  // gridLines.forEach(gridLine => {
  //   gridLine.style.outlineStyle = "none";
  // });
  
}

function makeCanvas(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  
  
};

makeCanvas(16, 16);
changeCellColor();

// changes color of each cell to black
function changeCellColor() {
  let cellColors = document.querySelectorAll(".grid-item");
  cellColors.forEach(cellColor => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = "black";
    });
  });
}

function rainbowCellColor() {
  let randomColor = Math.floor(Math.random() * 256);

}










