const sideSize = 750; // px
let rowSquares = 16;
let colSquares = 16;

const resizeButton = document.querySelector("#resize");

resizeButton.addEventListener("click", (e) => {
    rowSquares = Math.min(Number(prompt("Enter new width")), 100);
    colSquares = Math.min(Number(prompt("Enter new heigth")), 100);
    deleteGrid();
    createGrid();
});

function createGrid(){
    const gridSize = `${Math.min(Math.floor(sideSize/rowSquares), Math.floor(sideSize/colSquares))}px`;

    document.documentElement.style.setProperty("--grid-size", gridSize);

    const container = document.querySelector("#container");
    for (let i = 0; i < rowSquares; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("row");
        container.append(newDiv);
        for (let j=0; j<colSquares; j++){
            const newGrid = document.createElement("div");
            newGrid.classList.add("grid");
            newDiv.append(newGrid);
        };
    };

    const grid = document.querySelectorAll(".grid");
    grid.forEach(grid => {
        grid.dataset.visits = "0";
        grid.addEventListener("mouseover", (e) => {
            let visits = Number(grid.dataset.visits);
            if (visits == "0") grid.style.backgroundColor = getRandomColor();
            
            visits = Math.min(visits + 0.1, 1);
            grid.dataset.visits = visits;
            grid.style.opacity = visits;
        });

    });
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function deleteGrid(){
    const grid = document.querySelectorAll(".grid");
    grid.forEach( square => {
        square.remove();
    });
}

createGrid();