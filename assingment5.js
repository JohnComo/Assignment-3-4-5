let rows = 1
let cols = 1
let hoverColored = false 

let beginning = document.getElementById("td")
let growingBeginning = [...beginning]

for (let i = 0; i < growingBeginning.length ; i++){ 
    gridInteraction(growingBeginning[i])
}

//add rows 
function addRow() { 
    let grid = document.querySelector('#grid')
    let newRow = document.createElement("tr")

    for(let i = 0; i  < cols; i++){ 
        let newCell = document.creteElement("td")
        gridInteraction(newCell)
        newRow.appendChild(newCell)
    }
    grid.appendChild(newRow)
    rows++
}

//add columns
function addCol(){ 
    let grid = document.getElementById('#grid')
    let rows = document.getElementById("tr")
    let curCols = 0

    for (let i = 0; i < numRows; i++){ 
        let newCell = document.createElement("td")
        gridInteraction(newCell)
        rows[curCols].appendChild(newCell)
        curCols ++
    }
    cols++
}

function delCol(){ 
    let deleteColumn = document.querySelector('#grid')
    let rows = document.querySelectorAll("tr")
    let num = 0

    for (let i = 0; i < rows; i++){ 
        rows[num].removeChild(rows[num].lastChild)
        num++
    }
    cols--
}

//Adding Color by click and hover
let CurrentColor = document.getElementById("color").value;

function gridInteraction(cell){
    cell.addEventListener("click", settingColor)
    cell.classList.add("no-color");

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

//Background
function settingColor(){
    this.style.backgroundColor = CurrentColor;
    this.classList.remove("no-color")
}

function setColor(color){
    CurrentColor = color;
}

//fill uncolored
function setUncoloredGrid(){
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];

    let noColor = allCells.filter(cell => {return cell.classList.contains("no-color")});
    noColor.forEach(cell => { cell.style.backgroundColor = CurrentColor; cell.classList.remove("no-color")});
}

// fill all squares
function setAllGrid(){
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];

    allCells.forEach(cell => { cell.style.backgroundColor = CurrentColor; cell.classList.remove("no-color")});

}

// clear all colors
function clearAllGrid(){
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];
    allCells.forEach(cell => { cell.style.backgroundColor = "black"; cell.classList.add("no-color")});

}