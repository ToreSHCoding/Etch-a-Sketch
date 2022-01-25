const container = document.getElementById("container");
const buttons = document.getElementById("buttons");

const stndColor = document.getElementById("stnd-color");
// const shading = document.getElementById("shading");
const colorful = document.getElementById("colorful");
const eraser = document.getElementById("eraser");
const gridToggle = document.getElementById("grid-toggle");
const clearCanvas = document.getElementById("clear-canvas");
const sizeSlider = document.getElementById("size-slider");
const sliderNum = document.getElementById("slider-number");

const colorPick = document.getElementById("color-pick");

const cell = document.getElementsByClassName(".grid-item");


// gridToggle.onclick = () => setGridLines('tglOn')

// function setGridLines() {
//   if (gridLinesToggle === 'tglOn'){
//     gridLinesToggle();
    
//   }
// }

clearCanvas.addEventListener('click', () => {
  clearFunc();
})

function clearFunc() {
  let cells = document.querySelectorAll(".grid-item");
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
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

function makeCanvas(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  changeCellColor();
  colorChoose();
};

// function deleteCanvas() {
//   let cellsDelete = container.querySelectorAll('div');
//   cellsDelete.forEach(cellDelete => cellDelete.remove());
// }


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

function colorChoose() {
  let cellColors = document.querySelectorAll('.grid-item');
  
  colorPick.addEventListener('input', () => {
    let colorChoice = colorPick.value;
    cellColors.forEach(cellColor => {
      cellColor.addEventListener('mouseover', () => {
        cellColor.style.backgroundColor = colorChoice;
      });
    });
  });
}

// shading.addEventListener('click', () => {
//   shadingFunc();
// })

// function shadingFunc() {
//   let cellShades = document.querySelectorAll(".grid-item");
//   cellShades.forEach(cellShade => {
//     cellShade.addEventListener('mouseover', () => {
//       let currentShade = 0.1
//       cellShade.style.backgroundColor = `rgba(128, 128, 128, ${currentShade})`;
//       if (currentShade <= 0.9){
//         cellShade.style.backgroundColor = `rgba(128, 128, 128, ${currentShade + 0.1})`
//       }
//     })
//   })

// }

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
      cellColor.style.backgroundColor = "";
    });
  });
}


sizeSlider.addEventListener('mouseup', () => {
  sizeSlider.onmousemove = function() {
    sliderNum.innerText = `${sizeSlider.value} x ${sizeSlider.value}`;
  };
  let cellsDelete = container.querySelectorAll('div');
  cellsDelete.forEach(cellDelete => cellDelete.remove());
  makeCanvas(sizeSlider.value);
  gridToggle.textContent = 'Grid: Off'
});

makeCanvas(32);
// changeCellColor();





