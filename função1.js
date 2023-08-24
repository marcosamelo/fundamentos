// funcao sem retorno 
function imprimirSoma(a,b){

    console.log(a+b)
}

imprimirSoma(2,3) // esta função passa o valores para os parametros 
imprimirSoma(2) // neste caso o 3 ele nao reconheu como numero dando NaN
imprimirSoma(2,10,4,5,6,7,8)// neste caso ele apenas reconhece o paramentro declarado na função a,b 
imprimirSoma()// neste caso ele retorna NaN nao reconhece com um numero 

// função com retorno 

function Soma (a, b =0) // b = 0 caso nao for declaro nenhum valor no parametro 

   { return a + b // note que a declaração return fica entre as chaves 



   }

console.log(Soma(2,3))// caso  declare soma ante do console retornará NaN , ja que ela ira retornar a função declara na chave 
console.log(Soma(2))// neste caso foi passado apenas um paramentro como b =0  2+0 = 0, caso mudar b=1  a+b =3
console.log(Soma())// neste caso de parametros vazio , ira retorna NaN, ja a não teve nenhum tratamento no parametro a 
