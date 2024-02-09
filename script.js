// 01 
let hora = new Date().getHours();
if (hora >= 5 && hora < 18) {
    console.log('Está claro');
} else {
    console.log('Está de noite');
}

// 02
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 03
function exibirMensagem() {
    console.log('Hello Vai na Web🙋🏻‍♀️.');
}
exibirMensagem();

// 04 
function exibirNome(nome) {
    console.log(nome);
}
exibirNome('Meu nome é Karol');

// 05 
function exibirInformacoes(nome, idade, estiloMusical) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical: ${estiloMusical}`);
}
exibirInformacoes('Karol', 29, 'Eletrônica');

// 06 
function exibirFilmeMusica(filme, musica) {
    console.log(`Filme: ${filme}, Música: ${musica}`);
}
exibirFilmeMusica('Harry Potter', 'Papaoutai');

// 07 
function triplo(numero) {
    return numero * 3;
}
console.log(triplo(17));

// 08 
function verificarBooleano(valor) {
    return typeof valor === 'boolean';
}
console.log(verificarBooleano(false));

// 09 
let linguagens = ['Java', 'JavaScript', 'PHP', 'Ruby', 'Cobol' ];
console.log(linguagens);

// 10

linguagens.unshift('C#');
console.log(linguagens);

// 11 
linguagens.pop();
console.log(linguagens);

// 12 
linguagens.push('Python', 'C');
console.log(linguagens);

// 13 
linguagens.shift();
console.log(linguagens);

// 14 
let nome = ["João",  "Maria",  "Jose",  "Pedro"];
nome.splice(2, 0, 'Karol');
console.log(nome);

// 15
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort((a, b) => a - b);
console.log(numbers);
