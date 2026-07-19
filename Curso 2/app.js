//let titulo = document.querySelector('h1'); // Atribui para "titulo" o h1, dentro do html.
//titulo.innerHTML = "Jogo do número secreto"; // Atribui para "titulo", dentro do html, a string.

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";


function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag); // Atribui a tag para "campo".
    campo.innerHTML = texto; // "campo" já contendo a tag, atribui a string "texto" para ela.
}

exibirTexto('h1', "Jogo do número secreto!");
exibirTexto('p', "Escolha um número entre 1 e 10: ");

let numerosSorteados = []; // Criação de Array. Pode incluir valor na declaração
// ou não. Não precisa dizer o tamanho.
function getNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (numerosSorteados.length == 10) {
        alert("Acabou o jogo!!! Reinicie a Página");
    }
    if (numerosSorteados.includes(numeroEscolhido)) { // Includes verifica se o valor parâmetro existe no array.
        return getNumeroSecreto();
    }
    else {
        numerosSorteados.push(numeroEscolhido); // Adiciona um valor ao final da lista.
        return numeroEscolhido;
    }
}
let numeroSecreto = getNumeroSecreto();

let tentativa = 0;
function verificarChute() {
    let chute = document.querySelector('input').value; // o .value indica que quer puxar o valor digitado
    // pelo usuário na interação.
    if (chute == numeroSecreto) {
        exibirTexto('h1', "Acertou!");
        exibirTexto('p', "O número secreto é " + numeroSecreto + "!!!");
        let tent = tentativa > 1 ? "tentativas" : "tentativa";
        alert (`Foram ${tentativa} ${tent}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // Para pegar um valor pelo ID, usar document.getElementById("nome_id").
        // Em seguida foi feito um removeAttribute para tirar um atributo específico, como o disabled.
    }
    
    else if (chute > numeroSecreto) {
        exibirTexto('h1', "Errou!");    
        exibirTexto('p', "O número é menor do que " + chute + ".");
        tentativa++;
        limparCampo();
    }

    else {
        exibirTexto('h1', "Errou!");
        exibirTexto('p', "O número é maior do que " + chute + ".");
        tentativa++;
        limparCampo();
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exibirTexto('h1', "Jogo do número secreto!");
    exibirTexto('p', "Escolha um número entre 1 e 10: ");
    tentativa = 0;
    numeroSecreto = getNumeroSecreto();
    alert("Jogo Reiniciado!");
    limparCampo();
    console.log (numerosSorteados);
}

