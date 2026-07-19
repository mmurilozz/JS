alert("Jogo do Número Secreto!!!"); // Serve para mostrar uma mensagem dentro da página.
const base = 1000;
const numeroSecreto = parseInt(Math.random() * base + 1); // Declaração de variável automaticamente conversível por meio do const.
// o valor não pode ser alterado depois.
let chute = prompt (`Escolha um número entre 1 e ${base}`); // Escreve uma mensagem na página e recebe
// um valor do usuário. Valores "let" podem ser alterados.
let tentativas = 0;
console.log ('Valor digitado: ' + chute);


if (chute == numeroSecreto) {
    alert(`Parabéns!!! O número secreto ${numeroSecreto} foi descoberto!!!`); //Em JS, para fazer interpolação,
    // é preciso mudar as aspas para cráses ``, e colocar ${variável_concatenada}.
    console.log("Número Secreto Descoberto."); // Cria uma mensagem log que pode ser vista no inspecionar
    // da página, na aba "console".
} else {
    alert ("ERROU!!!");
    while (chute != numeroSecreto) { // O JS não lida bem com variáveis dentro de blocos que precisam ser 
                                     // condições fora.
        chute = prompt("Digite um novo valor: ");
        if(chute == numeroSecreto) {
            alert("Parabéns!!! Acertou em " + tentativas + ".");
            break;
        }
        else if (chute < numeroSecreto) {
            alert(`Número Incorreto!!! O valor é maior que " ${chute}. De novo!`);
        }
            else{
                alert(`Número Incorreto!!! O valor é menor do que ${chute}. De novo!`);
            }   
        tentativas++;
    }
}

