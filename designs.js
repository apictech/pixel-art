// When size is submitted by the user, call makeGrid()

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    // When the data is submitted the grid mount function is called
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    const color = document.getElementById('pixelCanvas');
    makeGrid(height, width, color);
  });

function makeGrid(a, b, c) {
  // Your code goes here!
  c.innerHTML = '';

  for (let m = 0; m < a; m++) {
      var row = c.insertRow(m);
      for (let k = 0; k < b; k++) {
        let cell = row.insertCell(k);
        cell.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById('colorPicker').value;
        });
      }
    }
}



