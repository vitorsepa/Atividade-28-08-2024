const titulo = document.getElementById("titulo")
const lista = document.getElementById("lista")
const adicionar = document.getElementById("adicionar")

function adicionarFruta(){
    lista.innerHTML += "<li>Uva</li>"
}

function trocarTitulo(){
    titulo.textContent = "título alterado"
}

const segundoItem = lista.getElementsByTagName
("li")[1]

segundoItem.textContent = "Morango"