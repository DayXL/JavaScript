let numEsc = [];

function gerarNumero() {

    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;

}

let botao1 = document.getElementById("botao1");
let myHeading = document.querySelector('h2');
let mensagem = document.querySelector('p');
let botao2 = document.getElementById("botao2");

botao1.onclick = function() {
    let num = gerarNumero();
    myHeading.innerHTML = 'Números sorteados:' + num;
}

botao2.onclick = function() {
    let input = document.querySelector("#number");
    let texto = input.value;
    console.log(texto);

    if (texto === num) {
        mensagem.innerHTML ('Parabéns você acertou!');
    } 

    else if (numEscolhido > num) {
        mensagem.innerHTML ('O número sorteado é menor!');
    } 

    else {
        mensagem.innerHTML ('O número sorteado é maior!');
    }

}