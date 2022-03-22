let canvas = document.getElementById('cobra')
let contexto = canvas.getContext('2d')
let box = 32
let cobra = []
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    contexto.fillStyle = 'lightgreen'
    contexto.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha(){
    for(i = 0; i < cobra.length; i++){
        contexto.fillStyle = 'green'
        contexto.fillRect(cobra[i].x, cobra[i].y, box, box)
    }
}

criarBG()
criarCobrinha()