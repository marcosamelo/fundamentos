// incremento e decremento 
//forma pos fixado operando++
//*nesta sintaxe o valor  fica ante do operador  ira acrescentar +1 . ex. 1++ , imprimi 2
// pre fixado  ++operando nesta sintase o operador fica antes do valor 



let num1 = 1
let num2 = 2

num1++// forma pos fixado
console.log(num1)
--num1 // forma pre fixado, tem maior presedencia maior que pos fixado
console.log(num1)

console.log (++num1 === num2--)// note que valor num1 sofre incremento antes da comparação e o num2 sofre o decremento depois da comparação
console.log (num1 === num2) // mais simples
