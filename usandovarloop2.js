const funcs =[]

for (var i =0; i <10; i++){
    funcs.push(function () {
        console.log(i)
    } 
    )
}
    
funcs[2]()
funcs[8]()
 // como a variavel var nao tem limitação sera informado o maior numero entre os dois declarados no loop 
