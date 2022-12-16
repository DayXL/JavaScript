var numEsc = [];
var numSorteado;

var num;

function gerarNumero() {

    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;

}

var botao1 = document.getElementById("botao1");
var myHeading = document.querySelector('h2');
var corpoDois = document.querySelector('h3');
var corpoTres = document.querySelector('h4');
var mensagem = document.querySelector('h5');
var botao2 = document.getElementById("botao2");

botao1.onclick = function() {
    if (numEsc.length == 0) {
        num = gerarNumero();
        numSorteado = num;

        corpoTres.innerHTML = 'Chances restantes: 10';
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

    corpoTres.innerHTML = 'Chances restantes: ' + (10 - numEsc.length);

    if (numEsc.length <= 10) {

        if (numParCom == numSorteado) {
            corpoDois.innerHTML = 'Número sorteado: ' + numSorteado;
            numEsc.length = 0;
            myHeading.innerHTML = 'Números escolhidos:';
            alert('Parabéns você acertou!');
            alert('Se quiser jogar novamente faça o sorteio de um novo número!');
            mensagem.innerHTML = ('');

        } 
        
        else if (numParCom > 100 || numParCom < 0) {
            corpoDois.innerHTML = 'Número sorteado: ' + numSorteado;
            numEsc.length = 0;
            myHeading.innerHTML = 'Números escolhidos:';
            alert('Digite um numero valido!!');
            alert('Sortei novamente um numero!');
            mensagem.innerHTML = ('');
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
        corpoTres.innerHTML = 'Chances restantes: 0';
        alert('Suas chances acabaram!');
        alert('Se quiser jogar novamente faça o sorteio de um novo número!');
        mensagem.innerHTML = ('');

    }

}