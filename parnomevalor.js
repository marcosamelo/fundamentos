// Objeto  (nome,chave,identificar); valor 
// Obejtos sao grupos aninhados de pares nome/valor 
const saudacao = 'opa' // note que o contexto léxico nao esta definido e portando e global 

function exec(){
const saudacao = 'falaaa'
return saudacao

}// note que este contexto lexico esta limitado pela função 

const cliente = {
nome: 'Pedro',
idade: 32,
peso : 90,
endereço:{
    logradouro: 'rua muito legal',
    numero: 123}
}

// note que no exemplo acima existe dois  contexto de objeto , cliente e logradouro , cada tendo seu limite 
console.log(saudacao)
console.log(exec())
console.log(cliente)