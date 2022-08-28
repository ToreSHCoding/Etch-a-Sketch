const container = document.getElementById('container');
const buttons = document.getElementById('buttons');

const stndColor = document.getElementById('stnd-color');
// const shading = document.getElementById("shading");
const colorful = document.getElementById('colorful');
const eraser = document.getElementById('eraser');
const gridToggle = document.getElementById('grid-toggle');
const clearCanvas = document.getElementById('clear-canvas');
const sizeSlider = document.getElementById('size-slider');
const sliderNum = document.getElementById('slider-number');

const colorPick = document.getElementById('color-pick');

const cell = document.getElementsByClassName('.grid-item');

function makeCanvas(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
  changeCellColor();
  colorChoose();
}

// ===========Clears entire Canvas==============
clearCanvas.addEventListener('click', () => {
  clearFunc();
});

function clearFunc() {
  const cells = document.querySelectorAll('.grid-item');

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '';
  }
}
// ============================================

// btn to activate gridLinesToggle()
gridToggle.addEventListener('click', () => {
  gridLinesToggle();
});

const gridLines = document.getElementsByClassName('grid-item');

function gridLinesToggle() {
  // let gridLines = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridLines.length; i++) {
    gridLines[i].classList.toggle('grid-tgl');

    if (gridLines[i].classList.contains('grid-tgl')) {
      gridToggle.textContent = 'Grid: On';
    } else if (gridLines[i].classList.contains('grid-tgl') === false) {
      gridToggle.textContent = 'Grid: Off';
    }
  }
}

// btn to activate changeCellColor()
stndColor.addEventListener('click', () => {
  changeCellColor();
});

// changes color of each cell to black
function changeCellColor() {
  const cellColors = document.querySelectorAll('.grid-item');
  
  cellColors.forEach((cellColor) => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = 'black';
    });
  });
}

// Allows choosing of color via color input
function colorChoose() {
  const cellColors = document.querySelectorAll('.grid-item');

  colorPick.addEventListener('input', () => {
    const colorChoice = colorPick.value;
    cellColors.forEach((cellColor) => {
      cellColor.addEventListener('mouseover', () => {
        cellColor.style.backgroundColor = colorChoice;
      });
    });
  });
}

// btn to activate rainbowCellColor()
colorful.addEventListener('click', () => {
  rainbowCellColor();
});

// changes each cell to random color
function rainbowCellColor() {
  const cellRandomColors = document.querySelectorAll('.grid-item');

  cellRandomColors.forEach((cellRandomColor) => {
    cellRandomColor.addEventListener('mouseover', () => {
      cellRandomColor.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
  });
}


eraser.addEventListener('click', () => {
  eraserFunc();
});

function eraserFunc() {
  const cellColors = document.querySelectorAll('.grid-item');
  
  cellColors.forEach((cellColor) => {
    cellColor.addEventListener('mouseover', () => {
      cellColor.style.backgroundColor = '';
    });
  });
}


sizeSlider.addEventListener('mouseup', () => {
  sizeSlider.onmousemove = function () {
    sliderNum.innerText = `${sizeSlider.value} x ${sizeSlider.value}`;
  };
  const cellsDelete = container.querySelectorAll('div');
  cellsDelete.forEach((cellDelete) => cellDelete.remove());
  makeCanvas(sizeSlider.value);
  gridToggle.textContent = 'Grid: Off';
});

makeCanvas(32);