// conceito de escopo: em resumo e ate onde será visivel sua variavel 
// utilizado o var e possivel dois escopos possiveis 
{
    {
        {
            {
                var sera = 'será?????'
            }
        }
    }
}
console. log(sera)// neste caso independente de estar dentro bloco deste que não seja uma função utilizando  VAR e possivel executar em qualquer lugar 



function teste(){
var local = 123
 console.log(local)

}
teste() // neste caso utilizando uma função não possivel executar fora do bloco 
//console.log(local) desta forma ocorrera um erro 
// evitar variavel em escopo global para não subsecrever sua variavel 


