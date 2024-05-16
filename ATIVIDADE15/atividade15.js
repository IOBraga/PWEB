function validar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let comentarios = document.getElementById('comentarios').value;
    let primeiraVez = document.querySelector('input[name="primeiraVez"]:checked').value;

    let erros = [];

    if (nome.length < 10) {
        erros.push("Nome deve ter no mínimo 10 caracteres.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        erros.push("Email inválido.");
    }

    if (comentarios.length < 20) {
        erros.push("Comentário deve ter no mínimo 20 caracteres.");
    }

    if (!primeiraVez) {
        erros.push("Selecione uma opção para 'Primeira vez nesta página?'");
    }

    if (erros.length > 0) {
        alert(erros.join("\n"));
        return false;
    } else {
        alert(primeiraVez === "sim" ? "Que bom que você voltou a visitar esta página!" : "Volte sempre à está página!");
        return true;
    }
}

function limparFormulario() {
    document.getElementById('formulario').reset();
}
