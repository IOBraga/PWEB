altura = prompt("Digite a sua altura: ")
peso = prompt("Digite o seu peso: ")

function calculo_imc(altura, peso) {
    const calculo = parseFloat(peso) / parseFloat(Math.pow(altura, 2))
    const imc = calculo.toFixed(1)

    let classificacao

    switch (true) {
        case imc <= 18.5:
            classificacao = "Magreza"
            break
        case imc > 18.5 && imc <= 24.9:
            classificacao = "Normal"
            break
        case imc > 24.9 && imc <= 29.9:
            classificacao = "Sobrepeso"
            break
        case imc > 29.9 && imc <= 39.9:
            classificacao = "Obesidade"
            break
        case imc > 39.9:
            classificacao = "Obesidade Grave"
            break
        default:
            classificacao = "Classificação desconhecida"
    }

    return `${imc} - ${classificacao}`
}

alert("O resultado do seu IMC é: " + calculo_imc(altura, peso))