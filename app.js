'use scrict'



const imagemElemento = document.getElementById('imagens')
const botaoTrocarImagem = document.getElementById(imagens)

const imagens = ['alec.jpg',
    'clarie.jpg',
    'jace.jpeg',
    'izzy.webp',
    'rafael.webp'
]

function trocarImagem() {
    const imagem = document.getElementById('imagens').value
    document.documentElement.style.setProperty('--bg-img', imagem)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)