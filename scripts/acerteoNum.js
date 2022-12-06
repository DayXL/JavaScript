function gerarNumero() {

    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let mensagem = document.querySelector('p');

myButton.onclick = function() {
    let num = gerarNumero();
    myHeading.innerHTML = 'Números sorteados:' + num;
}

function numeroEscolhido() {
    let numEscolhido = document.querySelector('input');

    if (numEscolhido === num) {
        mensagem.innerHTML ('Parabéns você acertou!');
    } 

    else if (numEscolhido > num) {
        mensagem.innerHTML ('O número sorteado é menor!');
    } 

    else {
        mensagem.innerHTML ('O número sorteado é maior!');
    }

}