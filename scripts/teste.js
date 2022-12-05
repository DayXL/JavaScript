
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

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Qual seu nome?');
    if(!myName) {
        setUserName();
    } 
    
    else {
        localStorage.setItem('Nome', myName);
        myHeading.innerHTML = 'Gatos são demais, ' + myName;
    }
}

if(!localStorage.getItem('Nome')) {
  setUserName();
} 

else {
  let storedName = localStorage.getItem('Nome');
  myHeading.innerHTML = 'Gatos são demais, ' + storedName;

}

myButton.onclick = function() {
  setUserName();
}