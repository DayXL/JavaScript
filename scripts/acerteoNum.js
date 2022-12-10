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

}

botao2.onclick = function() {
    let numParCom = document.getElementById("numEscolhido").value
    
    numEsc.push(numParCom);

    myHeading.innerHTML = 'Números escolhidos:' + numEsc;

    if (numEsc.length <= 9) {

        if (numParCom == numSorteado) {
            mensagem.innerHTML = ('Parabéns você acertou!');
            numEsc.length = 0;

        } 

        else if (numParCom > numSorteado) {
            mensagem.innerHTML = ('O número sorteado é menor!');
        } 

        else {

            mensagem.innerHTML = ('O número sorteado é maior!');
        }
    
    }

    else {
        mensagem.innerHTML = ('Suas chances acabaram!');
        numEsc.length = 0;

    }

}