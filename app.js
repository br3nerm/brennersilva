
let btn = document.querySelector('#button-mobile-menu');
let menuList = document.querySelector('#menu');




btn.addEventListener('click', function () {

    

    if (menuList.style.display === 'block') {

        menuList.style.display = 'none';
    }

    else {
        menuList.style.display = 'block'
    }


});


function clique() {

    document.querySelector("#info").innerHTML = 'Minhas esperiências com HTML5<br>são de 10 meses e breve vou estar<br> mostrando mais projetos';

}

function cliqueDois() {

    document.querySelector("#info").innerHTML = 'Minhas esperiências com CSS<br>são de 8 meses e breve vou estar<br> mostrando mais projetos';

}


function cliqueTres() {

    document.querySelector("#info").innerHTML = 'Minhas esperiências com JS<br>é de 6 mês e breve vou estar<br> mostrando mais projetos';

}









