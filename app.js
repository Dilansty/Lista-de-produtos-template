'use strict'

import {listaProdutos} from "./produtos.js" //with { type: "json" }

function criarCard(produto){
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${produto.imagem}`
    foto.alt = `Foto de ${produto.nome}`

    const nome =document.createElement('h3')
    nome.textContent = produto.nome

    const preco = document.createElement('h2')
    preco.textContent = produto.preco

    const classificacao = document.createElement('div')
    classificacao.textContent = produto.classificacao

    const categoria = document.createElement('span')
    categoria.textContent = produto.categoria
    if (categoria == 'Informática'){
        
    }
    
    card.append(categoria, foto, nome,classificacao, preco,  )

    return card

}

const cards = listaProdutos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)