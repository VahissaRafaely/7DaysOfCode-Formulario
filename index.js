document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturando os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;

    // Exibindo a mensagem personalizada
    var mensagem = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    alert(mensagem);

    // Pergunta adicional
    var resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

    // Gerando a resposta
    var respostaFinal;
    if (resposta === "1") {
        respostaFinal = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else if (resposta === "2") {
        respostaFinal = "Ahh que pena... Já tentou aprender outras linguagens?";
    } else {
        respostaFinal = "Resposta inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.";
    }

    // Exibindo a resposta final
    alert(respostaFinal);

// Limpando os campos do formulário
    
   
document.getElementById("nome").value = "";
    
   
document.getElementById("idade").value = "";
    
   
document.getElementById("linguagem").value = "";
});
