// o destructiruin no ponto de vista objeto  e usa-se chaves
// do ponto de vista de array e usa-se colchetes 

const[a] = [10] // array de uma posição , 
console.log(a) // resp 10

const [n1, ,n3, ,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

//arrey dentro de um arrey , no ex. ingnorou 1 elemento , o segundo elemento e um arrey dentro deste 2arrey ignora o 1elemento pegando o segundo elemento 
const [,[, nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//resumo usando destructurig em objeto usa chaves 
//utilizando arrey utiliza colchetes 
