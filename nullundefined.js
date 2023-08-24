// o  null e undefined usa o conceito de referencia 


let valor // não inicializada 
console.log(valor)// variavel foi declarada mais nao foi inicializada 
//console.log(valor2)// not defined =variavel não foi declada 

valor = null // conceito nao tem nenhum valor na memoria , não aponta para nenhum endereço 
console.log(valor)

// por convenção e usado o null para deixar uma variavel ficar zerada ou anular a variavel 

//console.log(valor.toString()) note neste ex. que a variavel nao tem nenhuma referencia associada 
/* TypeError: Cannot read properties of null,
TypeError: não é possível ler as propriedades de null */

const produto = {} // neste exemplo a variavel produto recebe uma referencia objeto 
console.log(produto.preco)// preço nao  existe dentro produto(variavel) que e uma variavel 
produto.preço = null
console.log(produto)