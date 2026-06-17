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