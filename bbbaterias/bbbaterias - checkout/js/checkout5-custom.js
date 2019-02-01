function verifica() {
	var a = $("#iframe-placeholder-debitCardPaymentGroup iframe")[0];
	! function (b) {
		a.contentWindow.postMessage({
			event: "__temporaryHackForDisablingTwoCards.vtex",
			arguments: [b]
		}, "https://io.vtexpayments.com.br")
	}(!1)
}


function balaoDesconto() {
	$("body").hasClass("body-cart") && $("table.cart-items .product-item").each(function () {
		var a = parseFloat($(this).find(".old-product-price").text().replace(",", ".").replace("R$ ", "")) || 0,
			b = parseFloat($(this).find(".new-product-price").text().replace(",", ".").replace("R$ ", "")) || 0;
		if (0 != a && 0 != b) {
			var c = a - b;
			$(this).find(".product-price .field-help").append("<span class='discountvalue'>R$ " + c.toFixed(2).toString().replace(". ", ",") + "</span>")
		}
	})
}


function travaInfoPagamento() {
	$(window).scroll(function () {
		$(".cart-fixed-transition").offset().top > 310 && $(".body-order-form").addClass("x-trava-info"), $(".cart-fixed-transition").offset().top < 300 && $(".body-order-form").removeClass("x-trava-info")
	})
}


function travaInfoPagamento() {
	$(window).scroll(function () {
		$(".cart-fixed-transition").offset().top > 310 && $(".body-order-form").addClass("x-trava-info"), $(".cart-fixed-transition").offset().top < 300 && $(".body-order-form").removeClass("x-trava-info")
	})
}
$(window).load(function () {
	$("td.quantity").append('<span class="removeclick">REMOVER</span>'), $("td.quantity .removeclick").click(function () {
		$(this).closest(".product-item").find(".item-link-remove").click()
	}), $("#cart-coupon").attr("placeholder", "Adicionar cupom de desconto")
}), $(window).load(function () {
	balaoDesconto(), $(document).click("#payment-group-debitCardPaymentGroup", function () {
		verifica()
	}), $("#payment-group-debitCardPaymentGroup").hasClass("active") && verifica(), $("#cart-coupon").attr("placeholder", "Adicionar cupom de desconto")
}), $(document).ready(function () {
	travaInfoPagamento()
}), $(window).on("orderFormUpdated.vtex", function (a, b) {
	setTimeout(function () {
		balaoDesconto()
	}, 100)
});


function correcaoRemove() {

	$(".removeclick").remove();

	$("td.quantity").append('<span class="removeclick">REMOVER</span>');

	$("td.quantity .removeclick").click(function () {
		$(this).closest(".product-item").find(".item-link-remove").click()
	});

	$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {});

}

$("body").mousemove(function() {

	correcaoRemove();

});

$("body").click(function() {

	setTimeout(function(){

		correcaoRemove();

	}, 2000);
	
});


$(document).ready(function () {
	$("form.form-step.box-edit").attr("id", "form-step-box-edit");
});