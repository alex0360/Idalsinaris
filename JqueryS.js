$(document).ready(function () {

    configurarInicio();
    MostrarLista();
    SaberBoton();
    
    function SaberBoton(){
    $(function() {
        $(document).on('click', 'input[type="button"]', function(event) {
           let id = this.id;
           if(true){}
           MostrarMenos(id)
         });
       });
    }
    function MostrarMenos(idBoton){
        var Clase = '#'+idBoton + ' .Mas';
        $(Clase).hide(1200);
    }
    function MostrarMas(idBoton){
        var Clase = '#'+idBoton + ' .Mas';
        $(Clase).show(1200);
    }
    function MostrarLista() {
        $('.iconBars').click(function (e) {

            $('#Nav ul').toggleClass('Lista');

        })
    }
    function configurarInicio() {
        var urlPath = window.location.pathname;
        //console.log(urlPath);
        $('nav a').each(function () {
            var href = $(this).attr('href');
            //console.log(href);
            var indice = urlPath.length - href.length;
            //console.log(urlPath.substring(indice));
            if (urlPath.substring(indice) === href) {
                //console.log('match');
                $(this).closest('li').addClass('active');
            }
        })
    }
})