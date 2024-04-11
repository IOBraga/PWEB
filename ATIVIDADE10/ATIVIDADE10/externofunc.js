var num1, num2, num3;

num1 = parseFloat(prompt("Digite o primeiro número: ", num1));
num2 = parseFloat(prompt("Digite o segundo número: ", num2));
num3 = parseFloat(prompt("Digite o terceiro número: ", num3));

function maior(num1, num2, num3) {
    return(Math.max(num1, num2, num3));
}

function crescente(num1, num2, num3) {
    var array1 = [num1, num2, num3];
    return array1.sort(function(a,b) {return a - b});
}

alert("Maior númeor encontrado: " + maior(num1, num2, num3));
alert("Ordem crescente: " + crescente(num1, num2, num3));

// <<---------------------------------------------------------->> //

function verificarTriangulo(num1, num2 , num3) {
    // Verificar se os lados formam um triângulo
    if (Math.abs(num2-num3) < num1 && num1 < num2 + num3 &&
        Math.abs(num1-num3) < num2 && num2 < num1 + num3 &&
        Math.abs(num1-num2) < num3 && num3 < num1 + num2) {
        // Verificar o tipo de triângulo
        if (num1 === num2 && num2 === num3) {
            return "Equilátero"; // Todos os lados são iguais
        } else if (num1 === num2 || num1 === num3 || num2 === num3) {
            return "Isósceles"; // Dois lados são iguais
        } else {
            return "Escaleno"; // Todos os lados são diferentes
        }
    }
}

alert("O resultado da comparação é: " + verificarTriangulo(num1, num2, num3));

// <<---------------------------------------------------------->> //

// Função para verificar se uma string é um palíndromo
function verificarPalindromo(str) {
    // Remover espaços em branco e converter para minúsculas para evitar problemas de comparação
    const strFormatada = str.toLowerCase().replace(/\s/g, '');
    // Comparar a string original com sua versão invertida
    return strFormatada === strFormatada.split('').reverse().join('');
}

// Variável string obtida através de um prompt
const entrada = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");

// Verificar se a entrada é um palíndromo usando a função verificarPalindromo
if (verificarPalindromo(entrada)) {
    alert(`A entrada "${entrada}" é um palíndromo.`);
} else {
    alert(`A entrada "${entrada}" não é um palíndromo.`);
}

// <<---------------------------------------------------------->> //

