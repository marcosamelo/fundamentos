// criando uma função usando destruturing 
// perceba que os paramentros estão entre chaves
function rand({min = 0, max = 1000}) {

    const valor = Math.random() * (max - min ) + min 
    return Math.floor(valor)
        
}

const obj = {max:50, min:40} // objeto criado recebe um numero entre 50 ou 40
console.log(rand(obj)) // mostra o valor de forma randomica 
console.log(rand({min:955})) // um formato mais resumido 
console.log(rand({}))// passando um objeto vazio , vai gerar um numero randomico entre 0 e 1000
    