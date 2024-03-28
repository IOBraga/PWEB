var numero1;
var numero2;
var soma;
var subtracao;
var produto;
var divisao;
var restodiv;

numero1 = prompt("Digite o primeiro número: ");
numero2 = prompt("Digite o segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

var soma = function(){
    soma = numero1 + numero2;
    return soma;
}

var sub = function(){
    subtracao = numero1 - numero2;
    return subtracao;
}

var prod = function(){
    produto = numero1 * numero2;
    return produto;
}

var divisaozinha = function(){
    divisao = numero1 / numero2;
    return divisao;
}

var resto = function(){
    restodiv = numero1 % numero2;
    return restodiv
}

alert("Soma: " + soma() +
    "\nSubtração: " + sub() +
    "\nProduto: " + prod() +
    "\nDivisão: " + divisaozinha() +
    "\nResto: " + resto())
