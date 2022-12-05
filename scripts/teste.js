
let myImage = document.querySelector('img');

myImage.onclick = function() {

    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'Imagens/gato.png') {
        myImage.setAttribute ('src','Imagens/gato2.png');
    } 

    else {
        myImage.setAttribute ('src','Imagens/gato.png');
    }

}
