/** Variable Declarations **/
// Get the sections
const colorPalette = document.querySelector('section.color-palette')
const canvas = document.querySelector('section.canvas')
const colorPaletteControls = document.querySelector('section.color-palette-controls')
const canvasControls = document.querySelector('section.canvas-controls')

// Set the default color to white
const defaultColor = '#FFFFFF'
let currentColor = defaultColor

/** Event Listeners **/
// Select the color that we want to paint with
colorPalette.addEventListener('click', function(event) {
  if(event.target.classList.contains('selectable-color')) {
    currentColor = event.target.style.backgroundColor
    removeSelectedBoxFromColors()
    event.target.classList.add('selected')
  }
})
// color the picture when we click the mouse button down
canvas.addEventListener('mousedown', function(event) {
  if(event.target.classList.contains('cell')) {
    event.target.style.backgroundColor = currentColor
  }
})
// Paint while moving the mouse with the button down
canvas.addEventListener('mouseover', function(event) {
  if(event.target.classList.contains('cell') && event.buttons === 1) {
    event.target.style.backgroundColor = currentColor
  }
})
// Color palette controls events
colorPaletteControls.addEventListener('mousedown', function(event) {
  if(event.target.id === 'add-color') {
    addColor()
  } else if(event.target.id === 'remove-color') {
    removeColor()
  } else if(event.target.id === 'randomize-colors') {
    randomizeColorPalette()
  }
})
// Canvas controls events
canvasControls.addEventListener('input', function(event) {
  if(event.target.id === 'canvas-size') {
    generateCanvas(event.target.value)
  }
})


/** Main logic **/
// Generate initial canvas and color palette
generateCanvas(3)
generateColorPalette(8)
