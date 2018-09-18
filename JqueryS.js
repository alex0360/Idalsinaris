$(document).ready(function () {
    LoadDocument();
    configurarInicio();
    MostrarLista();
    SaberBoton();
    
    function LoadDocument(){
        $('.Mas').hide('fast');
    }
    function SaberBoton(){
    $(function() {
        $(document).on('click', 'input[type="button"]', function(event) {
           let id = this.id;
           id= '#'+id;
           MostrarOcurtar(id)
         });
       });
    }
    function MostrarOcurtar(idBoton){
        var Clase = idBoton + ' .Mas';
        $(Clase).toggle(1200);
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