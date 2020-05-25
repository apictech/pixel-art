// When size is submitted by the user, call makeGrid()

// Here I've used some of the javascript functions to get elements picked by id's to call events.
// Also I've used preventDefault() so that the default things not happen.

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    // When the data is submitted the grid mount function is called.
    // Defined some variables for height, width and color of grid.

    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    const color = document.getElementById('pixelCanvas');
    makeGrid(height, width, color);
  });

// This makeGrid() function will take 3 arguments and make the grid on the basis of that.

function makeGrid(height, width, color) {
  // Your code goes here!
  color.innerHTML = '';

  for (let m = 0; m < height; m++) {
      var row = color.insertRow(m);
      for (let k = 0; k < width; k++) {
        let cell = row.insertCell(k);
        cell.addEventListener('click', function(eve) {
          // Changing the color of the cell after click.
          eve.target.style.backgroundColor = document.getElementById('colorPicker').value;
        });
      }
    }
}



