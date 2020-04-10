var color = document.getElementById('colorPicker');
var table = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');

var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', (e) => {

    e.preventDefault();

    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();

    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (var i = 0; i <= height; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j <= width; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                var cell = event.target;
                cell.style.backgroundColor = colorPicker.value;
        });
    }
}
}
