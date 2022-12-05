const myHeading = document.querySelector("h1");

myHeading.textContent = "Tá aqui!";

alert("Seja bem vindo!");

document.querySelector("h1").addEventListener("click", function () {

    alert("Você clicou no título principal");
    
});

document.querySelector("h2").addEventListener("click", function () {

    alert("Você clicou no subtítulo ");
    
});

document.querySelector("h1").addEventListener("click", function () {

    alert("Você clicou no subtítulo ");
    
});