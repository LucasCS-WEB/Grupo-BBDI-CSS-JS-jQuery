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

    
}, $(document).ready(function() {
    setTimeout(function() {
        textoCompraFinalizada()
    }, 1500)    
});


$(window).load(function() {
    function daysInMonth(month,year) {
        var dd = new Date(year, month, 0);
        return dd.getDate();
    }

    var vencimento = new Date();
    var dd = vencimento.getDate()+3;
    var mm = vencimento.getMonth()+1; //January is 0!

    var yyyy = vencimento.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
    if(dd > daysInMonth(mm,yyyy)) {
        var nextMonth = dd - 30
        dd = '0'+nextMonth
        mm + 1
    }   

    var vencimento = dd+'/'+mm+'/'+yyyy; 

    if($('.cconf-payment').find('span:contains("Boleto")').length == 1){
        $('.pa4').after('<div class="validade-blt" style="border: 1px dashed #29f407; padding: 10px; margin-top: 15px;">Boleto válido até o dia '+ vencimento +'.</div>')
    }
  
  $('.cart-items tbody .product-item').each(function(){
    var valor1 = $(this).find('.old-product-price').text().split('R$')
    var valor2 = $(this).find('.new-product-price').text().split('R$')
    
    var continha1 = valor1[1].replace(',', '.')
    var continha2 = valor2[1].replace(',', '.')
    
    console.log(parseInt(continha1 - continha2))
  })
    
});








var url = location.href;

if(url.indexOf("orderPlaced") != -1) {

	var cookie_estimated_delivery_date = document.cookie.replace(/(?:(?:^|.*;\s*)cookie_estimated_delivery_date\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  
	window.renderOptIn = function() { 
		window.gapi.load('surveyoptin', function() {
	    	window.gapi.surveyoptin.render(
	        	{
	        		"merchant_id": 7941775,
	          		"order_id": $("#order-id").text(),
	          		"email": $(".cconf-client-email").text(),
	          		"delivery_country": "BR",
	          		"estimated_delivery_date": cookie_estimated_delivery_date
	        	}
	       	); 
	  	});
	}

	window.___gcfg = {
		lang: 'pt_BR'
	};

}