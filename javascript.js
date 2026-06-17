const container = document.querySelector("#container");
for (let i = 0; i < 16; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("row");
    container.append(newDiv);
    for (let j=0; j<16; j++){
        const newGrid = document.createElement("div");
        newGrid.classList.add("grid");
        newDiv.append(newGrid);
    }
}

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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}