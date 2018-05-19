const canvasWidthInPx = 500
const maxNumCells = 50

// Generates an nXn canvas of white squares inside the canvas section of the app
function generateCanvas(numCells) {
    if (numCells <= 0) {
        alert("Please input a number greater than 0")
        return
    } else if (numCells > maxNumCells) {
        alert("Please input a number less than or equal to " + maxNumCells)
        return
    }
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }

    let cellSizeInPx = '' + canvasWidthInPx/numCells + 'px'
    let row
    let cell
    for(let i = 0; i < numCells; i++) {
        row = document.createElement('div')
        row.classList.add('row')
        canvas.appendChild(row)

        for(let j = 0; j < numCells; j++) {
            cell = document.createElement('div')
            cell.classList.add('cell')
            cell.style.height = cellSizeInPx
            cell.style.width = cellSizeInPx
            cell.style.backgroundColor = defaultColor
            row.appendChild(cell)
        }
    }
}
