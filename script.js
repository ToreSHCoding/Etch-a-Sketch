const container = document.getElementById("container");
const buttons = document.getElementById("buttons");

const stndColor = document.getElementById("stnd-color");
const colorful = document.getElementById("colorful");
const eraser = document.getElementById("eraser");
const gridToggle = document.getElementById("grid-toggle");
const clearCanvas = document.getElementById("clear-canvas");

// gridToggle.onclick = () => setGridLines('tglOn')

// function setGridLines() {
//   if (gridLinesToggle === 'tglOn'){
//     gridLinesToggle();
    
//   }
// }

function clearFunc() {
  let cell
}

// btn to activate gridLinesToggle()
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
// changeCellColor();

// btn to activate changeCellColor()
stndColor.addEventListener('click', () => {
  changeCellColor();
})

// changes color of each cell to black
function changeCellColor() {
  let cellColors = document.querySelectorAll(".grid-item");
  cellColors.forEach(cellColor => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = "black";
    });
  });
}

// btn to activate rainbowCellColor()
colorful.addEventListener('click', () => {
  rainbowCellColor();
})

// changes each cell to random color
function rainbowCellColor() {
  let cellRandomColors = document.querySelectorAll(".grid-item");
  cellRandomColors.forEach(cellRandomColor => {
    cellRandomColor.addEventListener('mouseover', () => {
      cellRandomColor.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })
  })

}

eraser.addEventListener('click', () => {
  eraserFunc();
});

function eraserFunc() {
  let cellColors = document.querySelectorAll(".grid-item");
  cellColors.forEach(cellColor => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = "white";
    });
  });
}

changeCellColor();





