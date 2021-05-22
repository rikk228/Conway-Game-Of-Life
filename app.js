let square = {
    colomn: 60,
    rows: 36
};

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let canvasProperty = {
    height: canvas.height,
    width: canvas.width
}

let data = [];

let colomnpx = Math.round(canvasProperty.width / square.colomn);
let rowspx = Math.round(canvasProperty.height / square.rows);

let regenbtn = document.querySelector('#regenbtn');
regenbtn.addEventListener('click', regenByButton);

function createGrid() {

    for(let x = 0; x < canvasProperty.width; x += colomnpx) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvasProperty.height);
        context.strokeStyle = 'rgb(0, 0, 0)';
        context.stroke();
        context.closePath();
    }

    for(let y = 0; y < canvasProperty.height; y += rowspx) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvasProperty.width, y);
        context.strokeStyle = 'rgb(0, 0, 0)';
        context.stroke();
        context.closePath();
    }
}

function randomGeneration() {
    data = [];
    for (let x = 0; x < square.colomn; x++) {
        let rows = [];
        for (let y = 0; y < square.rows; y++) {
            rows.push(50 > Math.floor(Math.random()*100));
        }
        data.push(rows);
    }
}

function regenByButton() {
    reset();
}

function clearCanvas() {
    context.clearRect(0, 0, canvasProperty.width, canvasProperty.height);
}


function display() {
    for (let x = 0; x < square.colomn; x++) {
        for (let y = 0; y < square.rows; y++) {
            if(data[x][y]) {
                displayLife(x, y);
            }
        }
    }
}

function displayLife(x, y) {
    let startingx = x*colomnpx;
    let startingy = y*rowspx;

    context.fillStyle = 'black';
    context.fillRect(startingx, startingy, colomnpx, rowspx);
}

function reset() {
    clearCanvas();
    createGrid();
    randomGeneration();
    display();
}

window.onload = loaded;

function loaded() {
    reset();
}
