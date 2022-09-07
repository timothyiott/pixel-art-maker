let canvas = document.getElementById("canvas")
let paintbrush = ''
let mouseIsDown = false

function createNewTile(){
    let tile = document.createElement('div');
    tile.style.width = '23px'
    tile.style.paddingBottom = '23px'
    tile.style.float = 'left'
    tile.style.border = '1px solid black'
    canvas.append(tile);

    tile.addEventListener('dblclick', () => {tile.removeAttribute('class')})
    tile.addEventListener('mousedown', () => {
        tile.classList.toggle(paintbrush)
        mouseIsDown = true
    })
    tile.addEventListener('mouseup', () => {
        mouseIsDown = false
    })
    tile.addEventListener('mouseenter', () => {
        if(mouseIsDown){
            tile.classList.toggle(paintbrush)
        }
    })

}

for(let i = 0; i < 640; i++){
    createNewTile();
}



let redPaintBrush = document.getElementById('redButton')
redPaintBrush.addEventListener('click', () => {paintbrush = 'red'})

let orangePaintBrush = document.getElementById('orangeButton')
orangePaintBrush.addEventListener('click', () => {paintbrush = 'orange'})

let yellowPaintBrush = document.getElementById('yellowButton')
yellowPaintBrush.addEventListener('click', () => {paintbrush = 'yellow'})

let greenPainBrush = document.getElementById('greenButton')
greenPainBrush.addEventListener('click', () => {paintbrush = 'green'})

let bluePaintBrush = document.getElementById('blueButton')
bluePaintBrush.addEventListener('click', () => {paintbrush = 'blue'})

let purplePaintBrush = document.getElementById('purpleButton')
purplePaintBrush.addEventListener('click', () => {paintbrush = 'purple'})

let brownPaintBrush = document.getElementById('brownButton')
brownPaintBrush.addEventListener('click', () => {paintbrush = 'brown'})

let grayPaintBrush = document.getElementById('grayButton')
grayPaintBrush.addEventListener('click', () => {paintbrush = 'gray'})

let blackPaintBrush = document.getElementById('blackButton')
blackPaintBrush.addEventListener('click', () => {paintbrush = 'black'})



let paintbrushIndicator = document.getElementById('currentColor');
window.addEventListener('click', () => {
    paintbrushIndicator.style.backgroundColor = paintbrush
    if(paintbrush === 'blue' || paintbrush === 'purple' || paintbrush === 'black'){
        paintbrushIndicator.classList.add('whiteText')
        paintbrushIndicator.classList.remove('blackText')
    } else {
        paintbrushIndicator.classList.add('blackText')
        paintbrushIndicator.classList.remove('whiteText')
    }
})

