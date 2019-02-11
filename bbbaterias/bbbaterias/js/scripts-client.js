/* liguenos mascara */
function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1$2");
    return v;
}
function id(el) {
    return document.getElementById(el);
}
window.onload = function() {
    if(!$( "body" ).hasClass( "login" )){
        id('telefone-input-liguenos').onkeypress = function() {
            mascara(this, mtel);
        }
    }
    
}

/* Liguenos */
$(document).ready(function() {
    $(".abre-liguenos").click(function() {
        setTimeout(function() {
            $(".transparente-liguenos").fadeIn("slow");
        }, 200);
        setTimeout(function() {
            $(".box-liguenos").fadeIn("slow");
        }, 1200);
    });
});
$(document).ready(function() {
    $(".liguenos-icone-fechar").click(function() {
        setTimeout(function() {
            $(".box-liguenos").fadeOut("slow");
        }, 200);
        setTimeout(function() {
            $(".transparente-liguenos").fadeOut("slow");
        }, 1200);
    });
});
$(function() {
    $(".abre-r-liguenos-r").click(function(e) {
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();
    });
});

/* esconder TRUSTEDCOMPANY em rolagem pg produtos */
window.onscroll = function() {
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top > 350 ) { $( "#TRUSTEDCOMPANY_widget_104693" ).hide( 0 ); }
   else if( top < 350 ) { $( "#TRUSTEDCOMPANY_widget_104693" ).show( 0 ); }
}

/* Diminuir tamanho img compre junto com js e delay */
setTimeout(function(){
    $("#divCompreJunto a img").attr("width", "160px").attr("height", "160px;").removeAttr("style").attr("style", "display: block !important;");
}, 1000);

/* alert select sku */
$("#produto .product-checkout .buy-button").click(function() {

    window.alert = function(){}

    var hrefButtonBuy = $(this).attr('href');

    if (hrefButtonBuy == "javascript:alert('Por favor, selecione o modelo desejado.');") {
        
        if($( window ).width() > 1024) {

            var topAlertSelectSKU = $("#produto .product-content-header").offset().top;
            $("html, body").animate({ 
                scrollTop: topAlertSelectSKU - 80
            }, 500);

        } else {

            var topAlertSelectSKU = $("#produto .product-checkout").offset().top;
            $("html, body").animate({ 
                scrollTop: topAlertSelectSKU - 40
            }, 500);

        }
        
        setTimeout(function(){
            $(".alertSelectSKU").remove();    
            $("#produto .product-selection-sku").prepend('<div class="alertSelectSKU">Por favor, selecione o modelo desejado.</div>');
        }, 1000);

    }

});

/* adicionar linha selecionada em select */
$(document).ready(function() {
    var categoryRedesignLine = $(".category-redesign .bread-crumb>ul li:nth-child(4)").text();
    var categorySelectLine = $("body.category-redesign .category-select .title-brand");
    if(categoryRedesignLine == "") {
        $(categorySelectLine).text("Selecione");
    } else {
        $(categorySelectLine).text(categoryRedesignLine);
    }
});

/* ajuste ancora descricão pg prod */
$(".product-navigation-link").click(function(e) {

    widhtPGProd = $(window).width();

    if(widhtPGProd < 1025) {

        e.preventDefault();

        var href = $(this).attr("href");

        setTimeout(function(){

            var element = $(href).offset().top;

            $("html, body").animate({
                scrollTop: element
            }, 500);

        }, 500);

    }

});