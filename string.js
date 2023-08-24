/* String e uma cadeia de carater podendo ser  delimitaddas por
Aspas 'simples' ou aspas "duplas" */

const escola = "cod3r"
console.log(escola.charAt(4))// neste caso esta sendo solicitado 4  indice do valor atribuido a escola comelando por zero e o r 
console.log(escola.charAt(5))// neste caso como nao tem indice 5 ele retorna vazio 
console.log(escola.charCodeAt(3))// usando esta tabela retorna o valor da tabela unicod html asc 
console.log(escola.indexOf('3'))// nesta função retorna o indice que contem no valor atribuido a escola 
console.log(escola.substring(1))// esta função ele começa do indice 1 ate o final do dado atribuido a escola 
console.log(escola.substring(0, 3))// neste caso ele difinil do indice 0 a 3 o indice nao sera mostrado 
console.log('escola '.concat(escola).concat("!"))
// a função concat e possivel junta as strings 
console.log(escola.replace(3, 'e'))//a função replace e possivel alterar um indice do dado 
//console.log(escola.replace(/\d/, 'e'))// /\d/ e chamdo de regex ele substitui um indice 
//console.log(escola.replace(/\w/g, 'e'))// usando a regex x e a flag g todos os indices serão moficados para letra e 
console.log('ana,maria,pedro'.split(','))
// a função split transforma um sequencia de caracteres em um array 
