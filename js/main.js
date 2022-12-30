// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
//lo que hacemos aqui es que cuando el usuario vaya bajando por hay en el desplzamiento cuando pase por 300
//remove nav2 lo borre y me agrege nav1
//nav.style.transition = '1s'quiero que solo demore 1 segundo cuando baje
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
//menu.style.top = '80px' este lo hacemos para cuando estamos en el nav1;
//menu.style.top = '100px'; este lo hacemos cuando este en el nav2;
    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
//fadeOut para cuando haga el load en la pgina desaparezca por eso usamos el removeclass;
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
//e.target cuando damos click en cualquier parte de la pantalla nos dice de inmediato
//
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
//queremos que hagas un evento cada vez que se haga scroll me agreges un valor
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
//este le usamos cuando el usuario voltea el dispositivo para que no se le cierre el menú hamburguesa
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});