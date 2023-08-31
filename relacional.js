// == igual
// === extritamente igual , leva em consideração tipo do dado 

console.log ('01)', '1' == 1) // um sinal = e atribuição dois == e comparação 
console.log ('02)', '1' === 1) // um sinal = e atribuição dois == e comparação === e uma comparação mais estrita entre tipos de dados  
console.log ('03)', '3' != 3) // != esta verificando se os operadores são diferente
console.log ('04)', '3' !== 3) // !== esta verificando se os operadores são estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date (0)
console.log ('09)' , d1 === d2)
console.log ('10)' , d1 == d2) //igual 
console.log ('11)' , d1.getTime === d2.getTime)// estritamente igual 

console.log('12)' , undefined == null) // igual e verdadeiro 
console.log('13)' , undefined === null) //estritamente igual e diferente 

// o uso do === estritamente além do valor verifica também o tipo de dado 

