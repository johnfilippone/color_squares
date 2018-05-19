const maxColors = 12

// Generates new color palette
function generateColorPalette(numColors) {
    let cell
    for(let i = 0; i < numColors; i++) {
        cell = document.createElement('div')
        cell.classList.add('cell', 'selectable-color')
        cell.style.backgroundColor = getRandomColor()
        colorPalette.appendChild(cell)
    }
}

// Remove the selected boxes from all of the color boxes
function removeSelectedBoxFromColors() {
  let cells = document.querySelectorAll('section.color-palette .cell')
  for(let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('selected')
  }
}

// Adds a color to the color palette 
function addColor() {
    let cells = document.querySelectorAll('section.color-palette .cell')
    if (cells.length >= maxColors) {
        alert("Maximum color palette size has been reached")
        return
    }
    let cell = document.createElement('div')
    cell.classList.add('cell', 'selectable-color')
    cell.style.backgroundColor = getRandomColor()
    colorPalette.appendChild(cell)
}

// Removes a color from the color palette 
function removeColor() {
    let cells = document.querySelectorAll('section.color-palette .cell')
    if (cells.length <= 0) {
        alert("There are no colors left to remove")
        return
    }
    if (colorPalette.childNodes[0].classList.contains('selected')) {
        currentColor = defaultColor
    }
    colorPalette.removeChild(colorPalette.childNodes[0])
}

// Randomizes colors on the color palette and resets the current color to white
function randomizeColorPalette() {
    let cells = document.querySelectorAll('section.color-palette .cell')
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = getRandomColor()
    }
    removeSelectedBoxFromColors()
    currentColor = defaultColor
}

// Get a random color in #FFFFFF format
function getRandomColor() {
  let hexChars = '0123456789ABCDEFF'
  let colorString = '#'
  for (let i = 0; i < 6; i++) {
    colorString += hexChars[Math.floor(Math.random() * 16)]
  }
  return colorString
}
