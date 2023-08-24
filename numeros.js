const peso1 = 1.0;
//const palavra reservada na memoria para constante 
// peso1 indentificar 
// = recebe 
// 1.0 dado que sera atribuido a peso1
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
    
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

//console.log(media)
// se quiser diminuir o numero de casas decimais e so acrescentar a função to fixed mais numero de casa 
console.log(media.toFixed(2))
// se quiser transformar e uma strig usando to string
console.log (media.toString(2))
// o valor entre parentese 2 tranaforma em binario
//  a função  Number pode ter diversas outras funções associadas com tofixed , toString
// number com n minisculo e um tipo de dado e Number com N maisculo e uma função para tipo number 

console.log(typeof media)