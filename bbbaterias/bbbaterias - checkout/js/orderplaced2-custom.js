// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
textoCompraFinalizada = function() {
    var el = "<div class=\"x-share\">"+
                "<p class=\"x-share-text\">Compartilhe nas redes sociais e conte para os seus amigos o que achou! <br/> Abraços, Equipe BB baterias.</p>"+
                "<div class=\"x-share-icons\">"+
                    "<a href=\"#\" class=\"x-facebook\">Facebook</a>"+
                    "<a href=\"#\" class=\"x-twitter\">Twitter</a>"+
                    "<a href=\"#\" class=\"x-gplus\">Google Plus</a>"+
                "</div>"+
            "</div>";
    $(el).appendTo("#checkout-confirmation-bottom")
    var title = encodeURIComponent("BB Baterias - Veja minhas compras!");
    var descr = "Veja minhas compras em https://www.bbbaterias.com.br : \n ";
    var image = encodeURIComponent("https://bbbaterias.vteximg.com.br/arquivos/bb-logo-black.png");

    var winTop = (screen.height / 2);
    var winLeft = (screen.width / 2);
    
    $( ".x-facebook" ).click(function(e) {
        e.preventDefault();
        var url = encodeURIComponent("https://www.bbbaterias.com.br"+$('td.product-name>a').eq(0).attr('href'));
        var URLconsulta = 'https://www.facebook.com/sharer.php?u='+url;
        window.open(URLconsulta,'_blank','toolbar=0, status=0, width=650, height=450');
    });
    $( ".x-twitter" ).click(function(e) {
        var url = "https://www.bbbaterias.com.br";

        e.preventDefault();
        $('td.product-name>a').each(function() {
            descr += "\n"+url+$(this).attr('href');
        })

        var winTop = (screen.height / 2);
        var winLeft = (screen.width / 2);

        var URLconsulta = 'https://twitter.com/home?status='+descr;
        window.open(URLconsulta,'_blank','toolbar=0, status=0, width=650, height=450');
    });
    $( ".x-gplus" ).click(function(e) {
        e.preventDefault();

        var url = encodeURIComponent("https://www.bbbaterias.com.br"+$('td.product-name>a').eq(0).attr('href'));

        var winTop = (screen.height / 2);
        var winLeft = (screen.width / 2);

        var URLconsulta = 'https://plus.google.com/share?url='+url;
        window.open(URLconsulta,'_blank','toolbar=0, status=0, width=650, height=450');
    });

    
}
, $(document).ready(function() {
    setTimeout(function() {
        textoCompraFinalizada()
    }, 1500)
});