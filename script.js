// console.log('alou alou testando')

// Prática Guiada - Parte 1
// Array 1
const strings = ['caneta', 'régua', 'isqueiro'];
//  índices         0         1         2 

// Array 2
const numeros = [2, 13, -78];

// Array 3
const arrayMisto = ['bloquinho de notas', 4, true];

// Array 4
const numeroUnico = [1990];

// Array 5
const arrayVazio = [];

// Prática Guiada - Parte 2
// imprimindo o tamanho do Array 1
console.log('TAMANHO ARRAY STRINGS', strings.length);

// imprimindo o item de índice 3
console.log('ACESSANDO ITEM ÍNDICE 3', strings[3]); // undefined
console.log('ACESSANDO ITEM ÍNDICE 2', strings[2]);
console.log('ACESSANDO ITEM ÍNDICE 1', strings[1]);
console.log('ACESSANDO ITEM ÍNDICE 0', strings[0]);

// verificando itens do Array 3
console.log(arrayMisto.includes(4));
console.log(arrayMisto.includes('bloquinho de notas'));
console.log(arrayMisto.includes(true));

//imprimindo item único do Array 4
console.log('ITEM ARRAY 4', numeroUnico[0]);
console.log('TAMANHO ARRAY 4', numeroUnico.length);

// Prática Guiada - Parte 3
// cópia do Array 1 usando sinal de igual
// const copiaStrings = strings;

//cópia do Array 1 usando método slice()
const copiaStrings = strings.slice();
console.log(strings);
console.log('Cópia de Strings:', copiaStrings);

// adicionando mais um item à copiaStrings
copiaStrings.push('agenda');
console.log(strings);
console.log('Cópia de Strings:', copiaStrings);

// removendo os itens de índice 2 e 3 do copiaStrings
console.log('copiaStrings antes da remoção', copiaStrings);

copiaStrings.splice(2, 2);
console.log('copiaStrings depois da remoção', copiaStrings);

// ordenando Array 1
console.log('array strings antes da ordenação', strings);

strings.sort();
console.log('array strings depois da ordenação', strings);

// ordenando Array 2
console.log('array números antes da ordenação', numeros);

numeros.sort();
console.log('array números depois da ordenação', numeros);

// pra guardar na cabeça
const onlyNum = [13, 2, -5, 78, 26];

console.log('array onlyNum antes da ordenação', onlyNum);

onlyNum.sort((a, b) => a - b);
console.log('array onlyNum após ordenação crescente', onlyNum);

onlyNum.sort((a, b) => b - a);
console.log('array onlyNum após ordenação decrescente', onlyNum);

onlyNum.splice(4, 1);
console.log('onlyNum após remoção', onlyNum);

onlyNum.push(6);
console.log('onlyNum após adição', onlyNum);

onlyNum.splice(2,1);
console.log('onlyNum após segunda remoção', onlyNum);