let canvas = document.getElementById('cobra')
let contexto = canvas.getContext('2d')
let box = 32
let cobra = []
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = 'right'

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

function iniciarJogo(){
    criarBG()
    criarCobrinha()

    let cobraX = cobra[0].x
    let cobraY = cobra[0].y

    if(direcao == 'rigth') cobraX += box
    if(direcao == 'left') cobraX -= box
    if(direcao == 'up') cobraY += box
    if(direcao == 'down') cobra -= box

    cobra.pop()

    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca)

}

let jogo = setInterval(iniciarJogo, 100)