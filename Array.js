// e um vetor , e uma forma de juntar multiplos valores de forma linerar 
// se consegue acessar o array a partir de de um indice , sendo indice 0 o primeiro elemento 
// array no java script e heterogenia e flexivel 

const valores = [7.7, 8.9,6.3, 9.2] // array de forma literal fica entre conchetes e os elementos separados por vigulas 

console.log(valores[0],valores[3])// ex queremos o valor associado ao indice 0 e indice 3
console.log(valores[4])// em outras linguagem daria erro  por nao existe o indice 4, no java script gera u undefined

valores[4]= 10;  // e possivel incluir um indice 
console.log(valores) 

console.log(valores.length) // length mostra quandos indice contem elementos 


valores.push({id: 3}, false, null, 'teste')// com o metodo push e possivel inseir novos array indepentende do tipo 
console.log(valores)

console.log(valores.pop())// metodo pop  retira um lemento neste exemplo  ultimo elemento será retirado
delete valores[0]// neste caso sera deletado o primeiro elemento 
console.log(valores)

console.log(typeof valores) // o resulta sera objet , por que um array em java script e um objeto



