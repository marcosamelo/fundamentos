// Armazenando uma variavel em uma variavael 
const  imprimirSoma = function (a ,b ) // Constante imprimirsoma recebe uma função anonima  funciton
  {
console.log(a+b)
 
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
// arrow seta apontando para um objeto 
// Atenção os parametros ficam entre paranteses e separados por virgula

const soma = (a,b)  => {
    return a+b
}
console.log(soma(2,3))// atente para os dois parenteses
 
// Outra mandeira de declarar função arrow 
// E o retorno implicito , preste atenção que neste modo resumido nao tem chaves e sera declarado return
// este tipo tipo de função e para uma setença de codigo 
const subtracao = (a,b) => a - b
 console.log(subtracao(2,3))// e uma forma reduzida de criar uma função
 
 // outro exemplo de como resumir mais ainda a função arrow 
const imprimir2 = a => console.log(a)
    imprimir2('Legal !!!!')

