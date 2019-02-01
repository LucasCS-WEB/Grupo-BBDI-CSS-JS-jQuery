/* v0.0.3 */
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
/* Liguenos */

/* esconder TRUSTEDCOMPANY em rolagem pg produtos */
window.onscroll = function() {
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top > 350 ) { $( "#TRUSTEDCOMPANY_widget_104693" ).hide( 0 ); }
   else if( top < 350 ) { $( "#TRUSTEDCOMPANY_widget_104693" ).show( 0 ); }
}
/* esconder TRUSTEDCOMPANY em rolagem pg produtos */

/* Aumentar tamanho imagem compre junto */

setTimeout(function(){
    $("#divCompreJunto a img").attr("width", "160px").attr("height", "160px;");
    $("#divCompreJunto a img").removeAttr("style");
    $("#divCompreJunto a img").show();
}, 1000);

/* end*/