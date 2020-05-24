// When size is submitted by the user, call makeGrid()

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    // When the data is submitted the grid mount function is called

    makeGrid();
  });

function makeGrid() {

  // Your code goes here!

const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
const color = document.getElementById('pixelCanvas');

color.innerHTML = '';

 for (let i = 0; i < height; i++) {
    var row = color.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', function(event) {
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}



