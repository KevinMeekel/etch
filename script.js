let axisLength = 16;

const gridContainer = document.querySelector(".grid-container");
gridContainer.style = "display: flex; flex-direction: column; background-color: green; gap: 3px";

const block = document.createElement("div");

function createGrid(length) {
    for (let i = 0; i < length; i++) {
        const gridRow = document.createElement("div");
        gridRow.style = "display: flex; justify-content: space-evenly; width: 100%; flex-grow: 1; gap: 3px";
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);
    }

    const rows = document.querySelectorAll(".row");
    for (const row of rows) {
        for (let i = 0; i < length; i++) {
            const block = document.createElement("div");
            block.style = "background-color: red; display: flex; flex-grow: 1; border: 1px solid black";
            block.classList.add("block");
            block.addEventListener("mouseover", function() {
                this.style.backgroundColor = "orange"; // Change background color to orange on hover
            });
            block.addEventListener("mouseout", function() {
                this.style.backgroundColor = "red"; // Change back to red when mouse leaves
            });
            row.appendChild(block);
        }
    }
}


createGrid(axisLength);