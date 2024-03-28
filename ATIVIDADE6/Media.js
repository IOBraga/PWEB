var nota1;
var nota2;
var nota3;
var nome;
var media = 0.0;

nome = promt("Informe o seu nome: ")
nota1 = prompt("Digite a sua nota 1: ");
nota2 = prompt("Digite a sua nota 2: ");
nota3 = prompt("Digite a sua nota 3: ");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

var mediaaritmetica = function () {

    media = (nota1 + nota2 + nota3) / 3;
    return media;
}

alert("A média aritmética do aluno", nome , " é:" + mediaaritmetica().toFixed(2));
