// o operador  logico   || pipe (ou logico )
// *basta  uma preposição true para retorna verdadeiro 
// o operador  logico   && 2ecomercial (e logico)
// *so retorna verdadeiro se ambas prepeposição forem verdadeira 
// o operador  logico   ! esclamação (negação logico )
//* inverte o  valor de uma preposição 
// operador Xor (ou exclusivo) simbolo ^ cicunflexo 
// * so retorna verdadeiro se apenas  uma da preposições for true , se amba forem false ou true , retorna falso 


function  compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // trabalho1 ou trabalho2
    const comprarTv50 = trabalho1 && trabalho2 // trabalho1 e trabalho2, 
    const comprarTv32 = trabalho1 != trabalho2 // trabalho1 diferente do trabalho2
    const manterSaudavel = !comprarSorvete// negação logica de tomar sorvete , operador unario

        return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))