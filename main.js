let canvas = document.getElementById('cobra')
let contexto = canvas.getContext('2d')
let box = 32

function criarBG(){
    contexto.fillStyle = 'lightgreen'
    contexto.fillRect(0, 0, 16 * box, 16 * box)
}

criarBG()