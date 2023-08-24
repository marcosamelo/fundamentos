// recuros introduzido em 2015,  e tema função de extrair ou destruturar estruturas do programa 
// literal com dois objetos , pessoa e endereço
const pessoa ={ 
    nome: 'Ana',
    idade: 5,
    endereco: { 
        logradouro: 'rua ABC',
        numero: 1000
    }
}

// alterando o nome do atributo 
const {nome, idade} = pessoa 
console.log(nome, idade) ;
// alterando o nome do atributo 
// estrutura operador destruction const {}
// extraindo atribuindo do objeto pessoa nome e idade

// nesta extrutura temos a variave seguinda de dois pontos 

const { nome: n, idade: i} = pessoa ;
// criando duas variaveis novas , n e i 
// veja que estamos extraindo o obje pessoal nome e idade
console.log (n,i) 

// extraindo atributos inexistentes 
const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)// udefined true

// extraindo atributos de endereço 

const {endereco: {logradouro,numero , cep}}= pessoa 
console.log(logradouro, numero , cep )// cep sera undefined nao existe este atributo 



