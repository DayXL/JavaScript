var numEsc = [];
var numSorteado;

function gerarNumero() {

    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;

}

var botao1 = document.getElementById("botao1");
var myHeading = document.querySelector('h2');
var corpoDois = document.querySelector('h3');
var mensagem = document.querySelector('p');
var botao2 = document.getElementById("botao2");

botao1.onclick = function() {
    if (numEsc.length == 0) {
        let num = gerarNumero();
        numSorteado = num;

        corpoDois.innerHTML = 'Número sorteado: ???';
    
    }

    else {
        alert('Você só pode sortear novamente após ganhar ou perder!')

    }

}

botao2.onclick = function() {
    let numParCom = document.getElementById("numEscolhido").value
    
    numEsc.push(numParCom);

    myHeading.innerHTML = 'Números escolhidos:' + numEsc;

    if (numEsc.length <= 10) {

        if (numParCom == numSorteado) {
            corpoDois.innerHTML = 'Número sorteado: ' + numSorteado;
            numEsc.length = 0;
            myHeading.innerHTML = 'Números escolhidos:';
            alert('Parabéns você acertou!');
            alert('Se quiser jogar novamente faça o sorteio de um novo número!');

        } 

        else if (numParCom > numSorteado) {
            mensagem.innerHTML = ('O número sorteado é menor!');
        } 

        else {

            mensagem.innerHTML = ('O número sorteado é maior!');
        }
    
    }

    else {
        corpoDois.innerHTML = 'Número sorteado: ' + numSorteado;
        numEsc.length = 0;
        myHeading.innerHTML = 'Números escolhidos:';
        alert('Suas chances acabaram!');
        alert('Se quiser jogar novamente faça o sorteio de um novo número!');

    }

}