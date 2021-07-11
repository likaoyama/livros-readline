const livros  = require('./database')

// pegar o input
//Se for sim, mostramos as categorias disponíveis e perguntamos qual categoria escolhe?



//Se for não, mostra os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro (S/N)')

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis: ")
    console.log("Romance", "Aventura")

    const entradaCategoria = readline.question("Qual categoria voce escolhe?")
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

} else if (entradaInicial.toLocaleUpperCase() === "N") {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Não quer escolher um livro? Veja os livros disponíveis:")
    console.table(livrosOrdenados)
}
