//atribuição por valor e atribuição por referncia 

// valor = sao dados e variaveis 
// referencia = objeto, array 
// ex. atribuição por referencia 
const a = { name : 'teste'}// const a recebe uma name que e reconhecida como endereço/referencia 

const b =a // as duas constante irão apontar para o mesmo endereço/referencia 
b.name = 'opa'//alterou o a endereço/refencia name , 
console.log(a) // como as dua variavel a e b recebem o mesmo  endereço/referencia ambos teram o valor alterado 

// atribuição por valor 
let c = 3 // 3 e o tipo primitivo 
let d = c //d recebe o valor e nao a referencia 

d++// d + 1
console.log(d,c)/* quando se trabalha com tipos primitivos 
a copia e passada para variavel d e o valor */
