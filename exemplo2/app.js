const calculadora = require('./calculadora');

console.log(calculadora.nome)
console.log('soma: ' + calculadora.soma(4,8));
console.log('subtração: ' + calculadora.sub(4,8));
console.log('divisão: ' + calculadora.div(4,8));
console.log('Multiplicação: ' + calculadora.multi(4,8));