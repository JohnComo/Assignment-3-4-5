let numRow = 1;
let numCol = 1;
let hoverColor =false;

let startCell = document.getElementsByTagName("td");
let startCellList = [...startCell];

for(let i =0; i <startCellList.length;i++){
    gridChange(startCellList[i]);
}

//addrows
function addRow(){
    let main = document.querySelector("#main-grid");

    let newRow = document.createElement("tr");

    for(let i = 0; i < numCol; i++){
        let newCell = document.createElement("td");
        gridChange(newCell);

        newRow.appendChild(newCell);
    }
    main.appendChild(newRow);
    numRow++;
}

//add columns
function addCol(){
    let main = document.querySelector("#main-grid");

    let rows = document.querySelectorAll("tr");

    let counter = 0;

    for(let i =0; i< numRow;i++){
        let newCell = document.createElement("td");
        gridChange(newCell); 
        rows[counter].appendChild(newCell);

        counter++;
    }
    numCol++;

}

//deleting row
function removeRow(){

    let removeR = document.querySelector("#main-grid");
    removeR.deleteRow(numRow-1);
    numRow--;
}


//deleting cols
function removeCol(){
    let removeC = document.querySelector("#main-grid");
    let rows = document.querySelectorAll("tr");

    let counter = 0;

    for(let i = 0; i < numRow; i++){
        rows[counter].removeChild(rows[counter].lastChild);
        counter++;
    }
    numCol--;
}

//coloring on click
let CurrentColor = document.getElementById("color").value;

function gridChange(cell){
    //change color after click
    cell.addEventListener("click", settingColor)
    cell.classList.add("no-color");


    // hover functionality
    cell.addEventListener("mousedown", element =>{ hoverColor = true;});

    cell.addEventListener("mousemove", element => {
        if(hoverColor){
            cell.style.backgroundColor = CurrentColor;
            cell.classList.remove("no-color");
        }
    });

    cell.addEventListener("mouseup", element =>{
        if(hoverColor){
            hoverColor = false;
        }
    });


}

//background
function settingColor(){
    this.style.backgroundColor = CurrentColor;
    this.classList.remove("no-color")
}

//color change
function setColor(color){
    CurrentColor = color;
}


//fill 
function setUncoloredGrid(){
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];

    //filter out colored grids
    let noColor = allCells.filter(cell => {return cell.classList.contains("no-color")});

    //setting color for uncolored squares
    noColor.forEach(cell => { cell.style.backgroundColor = CurrentColor; cell.classList.remove("no-color")});

}

//fill squares
function setAllGrid(){
    //saving all grid locations
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];
    allCells.forEach(cell => { cell.style.backgroundColor = CurrentColor; cell.classList.remove("no-color")});

}

//Adding function to clear all colors
function clearAllGrid(){
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];
    allCells.forEach(cell => { cell.style.backgroundColor = "black"; cell.classList.add("no-color")});

}