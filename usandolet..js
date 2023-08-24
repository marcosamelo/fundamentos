// diferença entre let e var 
// com exceção de function o var entende como tudo do mesmo escopo 
// ja let diferencia escopos diferente 

var numero = 1
{

        let numero = 2
        console.log ('dentro =',numero)
}
console.log ('fora=',numero)
//no exemplo acima vemos escopos diferente var fora do bloco e let dentro do bloco
// o sistema entende que a variavel numero dentro dos blocos e o menor e a do numero de fora o maior 
// a preferencia sera sempre para de menor valor 

// atenção variavel definidas com a palavra reservada :
/* com variaveis defindas com  var 
    *tem escopo global; 
    *tem escopo de função ; 
*variaveis definidas com variavel let:
    *tem escopo global; 
    *tem escopo de função;
    *tem escopo de de bloco.
 */



