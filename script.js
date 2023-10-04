/*

let nomes = ["thiago", "matheus","thais","leticia"]
console.log(nomes)
console.log("tamanho do array: " + nomes.length)  
console.log(nomes[1])
let listacompras = ["amaciante","farinha de trigo","pão de queijo",7,true]
console.log(listacompras[3])
*/

/*
let listadenomes = ["mario","ricardo","amanda","luiza"]
for(contador = 0; contador < listadenomes.length;contador++){
let mensagem = ("Boas vindas " + listadenomes[contador])
console.log(mensagem)
}  */

/*
let listadeaprovados = [
    'viviane',
    'matheus',
    'thiago',
    'thais',
    'leticia',
]
const enviarEmail = (nome) => {
    console.log("bem vindo " +nome+ " você foi aprovado")
}
listadeaprovados.forEach((nome) => {
    enviarEmail(nome)
})*/

/*
let filmes = ["Os incriveis","Senhor dos Aneis", "xuxa e os trapalhoes","procurando nemo"]
console.log(filmes)
/*filmes.push("Harry potter")*/
/*filmes.pop()*/
/*filmes.shift()*/
/*filmes.unshift("velozes e furiosos")
console.log(filmes.indexOf("Senhor dos Aneis"))
console.log(filmes)
*/
/*   map
const nums = [14,9,32,50,100,120]
let resutado = nums.map(function(valor){
    return valor *2

})
console.log(resutado)
*/
/*
let lista = [45,9,16,25]
let lista2 = []
lista2 = lista.filter(function(item){
    if(item < 20){
        return true
    }else{
        return false
    }
})
*/
/*
const produtos = [
    {nome:"Ipod",preco: 200, fragil:true},
    {nome:"celular", preco: 1500,fragil:false},
    {nome:"televisão",preco:4000, fragil:false},
    {nome:"notebook", preco: 8000,fragil:false},

]
console.log(produtos.filter(function(p){
    if(p.preco >2000 && p.fragil == false){
        return p
    }
}))
   */
  /*
const nomes =[
    {nome:"ana paula",idade: 15, sexo:"feminino"},
    {nome:"carlos",idade: 17, sexo:"masculino"},
    {nome:"cristiano",idade: 14, sexo:"masculino"},
    {nome:"aline",idade: 13, sexo:"femino"},
    {nome:"pedro",idade: 15, sexo:"masculino"},
    {nome:"sofia",idade: 12, sexo:"feminino"},
    {nome:"paloma",idade: 16, sexo:"femino"},
]
console.log(nomes.filter(function(p){
    if(p.idade >= 15 &&  p.idade <= 17)
    return p
}))

*/
let numeros=[12,4,22,46,18,29,44,43,39]
let n2=[]


n2 = numeros.filter(function(numeros){

    if(numeros>18){
        return numeros
    }

})

console.log(n2)








