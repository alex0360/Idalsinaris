$(document).ready(function () {
    LoadDocument();
    configurarInicio();
    MostrarLista();
    SaberBoton();
    // inicio
    function LoadDocument(){
        $('.Mas').hide('fast');
    }
    // Saber cual es el ID del botons
    function SaberBoton(){
    $(function() {
        $(document).on('click', 'input[type="button"]', function(event) {
           let id = this.id;
           id= '#'+id;
           obtenerTexto(id)
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
    // Cambiar el texto del boton
    function obtenerTexto(idBoton){
        var boton = idBoton + ' input';
            if($(boton).val() == 'Mas...'){
                $(boton).val('...Menos')
            } else $(boton).val('Mas...');        
    }
    // la pagina actual
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