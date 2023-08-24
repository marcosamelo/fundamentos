// como criar objetos em javascript de forma literal 
// o objeto em javascript e uma coleção de chave/valor , onde vc tem o nome do atributo/indentificar e pode passa um valor por ex do tipo numero , texto e ate mesmo uma função
// um par de chaves e uma forma literal de representa um objeto
// exemplo prod1 abaixo e forma objeto vazio 
const prod1 = {} // objeto vazio , pode definir como este objeto é , seus atributos e comportamentos dinamicamente 
prod1.nome = 'celular ultra mega' 
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'camisa polo ', // nome e um atributo, teste é o valor 
    preco: 79.90
}// prod2 e utilizando a forma literal 

prod2['desconto legal'] = 0.40
console.log(prod2)
// observação objeto e difernte de json , json é  um formato textual , objeto e atributos e codigos 