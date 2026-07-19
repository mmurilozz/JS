let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

function registrarLog() {
    console.log("Clicado!");
}

function gerarAlerta() {
    alert("ALERTA!");
}

function gerarPrompt() {
    let cidade = prompt("De qual cidade você é?");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function soma() {
    const num1 = parseInt(prompt("Digite o primeiro número: "));
    const num2 = parseInt(prompt("Digite o segundo número: "));
    const resultado = num1 + num2;
    alert("A soma desses valores é: " + resultado + ".");
}