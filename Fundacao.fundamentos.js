// notação ponto 
console.log(Math.ceil(6.1))// console e  Math (api) sao um objetivo
const obj1 = {}
obj1.nome = 'bola'// usando  notação ponto 
//obj1['nome'] = 'bola2'// sem  a notação ponto 
console.log(obj1.nome)
function obj(nome){

    this.nome = nome // this palavra reservada para tornar um atributo  publico , nome e um atributo 
        this.exec = function(){
        console.log('exec.....')
    }
}
 const obj2 = new obj('cadeira ') // new palavra reservada para inserir um novo objeto 
 const obj3 = new obj('mesa')// sera armazenada no atributo nome,obj3
 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()
// com a notação ponto e possivel criar atributo como funções 
