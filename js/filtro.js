$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let novedades = $('#novedades').offset().top,
        servicios = $('#servicios').offset().top,
        trabajos = $('#trabajos').offset().top,
        contactos = $('#contactos').offset().top;

    window.addEventListener('resize', function(){
        let novedades = $('#novedades').offset().top,
        servicios = $('#servicios').offset().top,
        trabajos = $('#trabajos').offset().top,
        contactos = $('#contactos').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-novedades').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: novedades -100
        },600);
    });

    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios -100
        },600);
    });

    $('#enlace-trabajos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajos -100
        },600);
    });

    $('#enlace-contactos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactos -100
        },600);
    });
});