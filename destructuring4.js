// utilizando arrey 
// perceba que os parametro neste caso ficam entre colchetes 
function rand([min = 0, max = 1000]){
    if (min > max) [min,max] = [max, min] // invertendo as variaveis , o 1 colchete e o operador desctruction e o 2 colchete depois do sinal de igual e um array criado com dois atributos destrutorados ou retirados do função rand
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}
console.log(rand([50,40])) // uma das forma de chamar a funçao, perceba que nao precisa indicar quem o max ou quem o min 
console.log(rand([992])) // pode colocar a apenas o maximo que fica entendido que o minimo e 0
console.log(rand([, 10]))// pode passa como ex. o min vazio e max 10  que ele entende o min  e 0
console.log(rand([]))// pode passar o vazio e sera lançando os valores padrões entre 0 e 1000
//console.log(rand()) esta forma ele mostra um problema undfined ou nulo 
