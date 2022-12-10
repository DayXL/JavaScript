var numEsc = [];
var numSorteado;

function gerarNumero() {

    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;

}

var botao1 = document.getElementById("botao1");
var myHeading = document.querySelector('h2');
var mensagem = document.querySelector('p');
var botao2 = document.getElementById("botao2");

botao1.onclick = function() {
    let num = gerarNumero();
    numSorteado = num;

    myHeading.innerHTML = 'Números sorteados:' + num;

}

botao2.onclick = function() {
    let numParCom = document.getElementById("numEscolhido").innerHTML
    
    if (numParCom === numSorteado) {
        mensagem.innerHTML = ('Parabéns você acertou!');
    } 

    else if (numParCom > numSorteado) {
        mensagem.innerHTML = ('O número sorteado é menor!');
    } 

    else {
        mensagem.innerHTML = ('O número sorteado é maior!');
    }

}