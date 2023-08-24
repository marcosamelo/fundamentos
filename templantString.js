// ele modela o texto na hora de concatenar as variaveis 

const nome = 'rebeca';
const concatenacao = 'olá ' +  nome  + '!';
const template = `
Olá
${nome}!`;// o template começa e termina  com crase e a variavel entre chaves precedido do simbolo  $
console.log(concatenacao, template);

// espressoes 
console.log(`1 + 1 = ${1 + 1}`);// se nao colocar entre chave ele nao faz a soma 

const up = texto => texto.toUpperCase()
console.log(`Ei..... ${up('cuidado')} !`)




