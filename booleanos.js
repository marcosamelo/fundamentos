// Tipo Boolean aceita verdadeiro ou falso , sim ou não , 1 ou 0


let isAtivos = false
console.log(isAtivos)
isAtivos = true

console.log(isAtivos)

isAtivos = 1
console.log(!!isAtivos ) // para tranformar algo em verdadeiro ou falso usar negaçao simbolo !
console.log('verdadeiros.....')
console.log(!!3) //negação da negação 
console.log(!!-1)// numero interios 
console.log(!!" ") //se tiver um espaço vazio ou com texto 
console.log(!![])  // arreya 
console.log(!!{}) // objeto literario
console.log(!! Infinity) // tipo infinito 
console.log(!!(isAtivos = true)) // resultado da atribuição 

console.log('os falsos .......')
console.log(!!0)//0 Retorna falso
console.log(!!"")// string vazia sem espaço ou texto 
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(isAtivos=false)// se atribuir  para uma variavel false a 

console.log("pra finalizar....")
console.log((!!"" || null || 0|| " "))// || piper simbolo de "ou "

let nome =''
console.log(nome || 'desconhecido') // ex. se a variavel nome estiver vazia retorna o false ou a segunda opção depois do ou ||
