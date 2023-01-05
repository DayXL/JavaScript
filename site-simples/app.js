'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;

    if(className == "light-theme") {

        this.textContent = "Tema escuro";

    }

    else {

        this.textContent = "Tema claro";

    }

    console.log('Nome da classe atual: ' + className);

});
