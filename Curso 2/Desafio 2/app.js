function olaMundo() {
    console.log("Olá Mundo!");
}

function getNome() {
    let nome = document.querySelector('input').value;
    console.log ("Olá " + nome);
}

function dobro(numero) {
    let resultado = parseInt(numero) * 2;
    console.log(resultado);
}

function media(n1, n2, n3) {
    let soma = parseFloat(n1 + n2 + n3);
    let media = soma / 3;
    return media;
}

function maior() {
    let num1 = prompt("Digite um número:");
    let num2 = prompt("Digite outro número:");

    if (num1 > num2) {
        alert(`O número ${num1} é maior do que o ${num2}`)
    }
    else if (num1 == num2) {
        alert(`Ambos são iguais!`);
    }
    else {
        alert(`O número ${num2} é maior que o ${num1}.`);
    }
}

function power() {
    const numero = parseInt(prompt("Digite um número: "));
    alert(Math.pow(numero, 2));
}