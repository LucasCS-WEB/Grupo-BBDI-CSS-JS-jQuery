var BBDI_Geral = {

    methods: {

        NavFixed: function() {

            if ($(window).width() > 768) {
                $(window).scroll(function () { 
                    if ($(this).scrollTop() > 90) {
                        $(".header-nav-fixed").css("margin-top", "0px");
                    } else {
                        $(".header-nav-fixed").css("margin-top", "-60px");
                        $(".nav-container-fixed nav").css("display", "none");
                    }
                });
            }
            
        },

        NavContainerFixed: function() {

            var navContainerFixedTime;

            $(".nav-container-fixed").hover(
                function() {
                    navContainerFixedTime = setTimeout(function() { 

                        $(".nav-container-fixed").addClass("hover");
                        $(".nav-container-fixed nav").stop().slideDown(200, function() {
                            $(this).css("display", "block");
                        });

                    }, 200);
                },
                function() {
                    clearTimeout(navContainerFixedTime);

                        $(".nav-container-fixed").removeClass("hover");
                        $(".nav-container-fixed nav").stop().slideUp(100, function() {
                            $(this).css("display", "none");
                        });

                }
            );

        },

        searchFixedOpen: function() {

            $(".search-close").css("width","0");
            $("#js-typeahead-search-fixed").hide();

            $(".js-header-search").on("click", function() {

                $('.search-close').show().animate({
                        "width": "60" 
                }, 200);  

                $('#js-typeahead-search-fixed').show().animate({
                        "width": "420",
                        "right": "120"
                }, 200);

            });

            $(".search-close").on("click", function() {

                $('#js-typeahead-search-fixed').animate({
                    "width": "0",
                    "right": "60"
                }, 100, function() {
                     $(this).hide();
                });

                $('.search-close').animate({
                    "width": "8"
                }, 100, function() {
                     $(this).hide();
                });

            });

        },

        menuTodosProdutos: function() {

            $('.nav-container > ul > li.menuTodosProdutos').mouseenter(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideDown(200);
            });

            $('.nav-container > ul > li.menuTodosProdutos').mouseleave(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideUp(100);
            });


            $('li.menuTodosProdutos .subNavList > li').each(function() {
                $(this).on('touchend', function(a) {
                    a.preventDefault();
                    $('li.menuTodosProdutos .subNavList > li').removeClass('hover').eq(b).addClass('hover');
                    $('li.menuTodosProdutos .subNavContent > li').removeClass('active').eq(b).addClass('active');
                });
            });

            $('li.menuTodosProdutos .subNavList > li').each(function(b) {
                $(this).on('mouseenter', function () {
                    $('li.menuTodosProdutos .subNavList > li').removeClass('hover').eq(b).addClass('hover');
                    $('li.menuTodosProdutos .subNavContent > li').removeClass('active').eq(b).addClass('active');
                });
            });
           
        },

        menuLancamentos: function() {

            $('.nav-container > ul > li.menuLancamentos').mouseenter(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideDown(200);
            });

            $('.nav-container > ul > li.menuLancamentos').mouseleave(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideUp(100);
            });


            $('li.menuLancamentos .subNavList > li').each(function() {
                $(this).on('touchend', function(a) {
                    a.preventDefault();
                    $('li.menuLancamentos .subNavList > li').removeClass('hover').eq(b).addClass('hover');
                    $('li.menuLancamentos .subNavContent > li').removeClass('active').eq(b).addClass('active');
                });
            });

            $('li.menuLancamentos .subNavList > li').each(function(b) {
                $(this).on('mouseenter', function () {
                    $('li.menuLancamentos .subNavList > li').removeClass('hover').eq(b).addClass('hover');
                    $('li.menuLancamentos .subNavContent > li').removeClass('active').eq(b).addClass('active');
                });
            });
           
        },

        menuSegmentos: function() {

            $('.nav-container > ul > li.menuSegmentos').mouseenter(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideDown(200);
            });

            $('.nav-container > ul > li.menuSegmentos').mouseleave(function() {
                $(this).find('.sub-nav').stop(true, true, true).delay(100).slideUp(100);
            });
          
        },

        HeaderSearch: function() {

            $(".h-search-btn").on("click", function() {

                $("#js-header-submit-form").css("z-index","12");

                $('.h-search-input').show().animate({
                    "width": "100%"
                }, 200);

                $('.h-search-close').show().animate({
                    "width": "40"
                }, 200);

                $('.h-search-elm').animate({
                    "margin-right": "80"
                }, 200);
               
            });

            $(".h-search-close").on("click", function() {

                $("#js-header-submit-form").css("z-index","12");

                $('.h-search-input').show().animate({
                    "width": "0"
                }, 200, function() {
                     $(this).hide();
                });

                $('.h-search-close').show().animate({
                    "width": "0"
                }, 200);

                $('.h-search-elm').animate({
                    "margin-right": "0"
                }, 200);

            });

        },

        HeaderSearchNav: function() {

            $('.header-nav .nav-icon').on("click", function() {
                $(this).toggleClass('active');
                $(window).scrollTop(0);
                $('html , body').toggleClass('unscroll');
                $('#headerNav').find('.jc-store-cov').show().next().addClass('hide');
                $('#headerNav').slideToggle(100);
            });

        },

        checkSessionUserLogin: function() {

            setTimeout(function() {   
                // se logado  
                if ( $(".welcome em #login").length <= 0 ) {
                    $("#logged-welcomeMessage, #logged-orders, #logged-logout, .shoppingCartAmount, .grid-model .start-price").show();
                } 
                // se deslogado
                else {
                    $("#logged-login, #logged-register, #login-or-register, .rf-header").show(),
                    $(".grid-model .start-price").text("Entre ou cadastre-se e veja nossos preços");
                }
            }, 2000);

        },

        login: function() {

            $("#logged-login").live( "click", function(e) {
                $("header .BBDI-mensagem-login").show();
                $("header .BBDI-messagem-box").removeClass("top-hidden");
                e.preventDefault();
            });

            $("#login-submit").click(function() {

                var emailLogin = $("#login-email").val();
                    lengthEmailLogin = $("#login-email").val().length;

                if(lengthEmailLogin > "0") {

                    var filterEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                
                    if(!filterEmail.test(emailLogin)) {

                        $("#error-email-login").text("Este endereço de e-mail não é válido."),
                        $("#login-email").addClass("error"),
                        $("#error-email-login").show();
                        $("#login-email").focus();

                    } else {

                        $.ajax({
                            async: true,
                            crossDomain: true,
                            url: "https://bbdi.vtexcommercestable.com.br/api/dataentities/CL/search?email="+emailLogin+"&_fields=approved",
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/vnd.vtex.ds.v10+json",
                                "REST-Range": "resources=0-10"
                            },
                            success: function(check) {

                                if(check[0] == null) {

                                    $("header #BBDI-mensagem").css("display", "none");
                                    $("header #BBDI-mensagem .BBDI-messagem-box").addClass("top-hidden");

                                    $("header .BBDI-mensagem-alert h3").html("O email não corresponde a nenhuma conta. <br><a href=\"\">Cadastre-se</a> para abrir uma conta.");
                                    $("header .BBDI-mensagem-alert").show();
                                    $("header .BBDI-messagem-box").removeClass("top-hidden");

                                } else if (check[0].approved == true) {

                                    $("header #BBDI-mensagem").css("display", "none");
                                    $("header #BBDI-mensagem .BBDI-messagem-box").addClass("top-hidden");
                                    
                                    vtexid.setScope('09ab571d-6fb5-4099-a067-f304d4a27519');
                                    vtexid.setScopeName('bbdi');

                                    vtexid.start({
                                        returnUrl: '/',
                                        userEmail: emailLogin,
                                        locale: 'pt-BR',
                                        forceReload: true
                                    });


                                } else {

                                    $("header #BBDI-mensagem").css("display", "none");
                                    $("header #BBDI-mensagem .BBDI-messagem-box").addClass("top-hidden");

                                    $("header .BBDI-mensagem-alert h3").html("Comprador aguardando aprovação do cadastro!");
                                    $("header .BBDI-mensagem-alert").show();
                                    $("header .BBDI-messagem-box").removeClass("top-hidden");

                                }

                            }
                        });

                    }

                } else {

                    $("#error-email-login").text("Insira seu endereço de e-mail para efetuar o login.");
                    $("#login-email").addClass("error");
                    $("#error-email-login").show();
                    $("#login-email").focus();

                }

            });

            $("#login-email").click(function() {
                $("#login-email").removeClass("error");
                $("#error-email-login").hide();
            });

        },

        shoppingCartAmount: function() {

            setTimeout(function() {   
                var amountItems = $("em.amount-items-em").text();    
                $("span.shoppingCartAmount").text(amountItems);
            }, 1000);

        },

        delayQuickLinkTop: function() {

            $(".quicklink-link").css("color","transparent");

            setTimeout(function() {   
                $(".quicklink-link").css("color","#FFFFFF");
            }, 1000);

        },

        HeaderSearchVtexCustomAuto: function() {


            /* search - start */

            $("#search-text").click(function() {

                $("#search-text").vtexCustomAutoComplete({
                    shelfId: "824644e0-d16b-48e8-8d6b-4bd049918994",
                    appendTo: $("#ta-product-list"),
                    notFound: function() {
                        $("#ta-product-list").html("");
                    },
                    limit: 24
                }), 
                $("#search-text").keyup(function(event) {
                    var _text = $(this).val();
                    "" != _text ? (
                        $("#search-result").show(),
                        $("#ta-product-list").show(),
                        $("#search-button").click(function() {
                            var _search = _text.replace(/%20/g, " ");
                            return window.location.href = "/" + _search, !1
                        })
                    ) : ( $("#ta-product-list").html("") )
                });

            });

            $(document).mouseup(function(e) {
                var $searchResult = $("#search-result"),
                    $searchText = $("#search-text");
                if (!$searchResult.is(e.target) && $searchResult.has(e.target).length === 0) {
                    if (!$searchText.is(e.target) && $searchText.has(e.target).length === 0) {
                        if ($searchResult.is(':visible')) {
                            $searchResult.hide();
                        }
                    }
                }
            });

            $(window).scroll(function () { 
                if ($(this).scrollTop() > 90) {
                    $("#ta-product-list").html("");
                }
            });

            /* search - end */


            /* search mobile - start */

            $("#search-text-mobile").click(function() {

                $("#search-text-mobile").vtexCustomAutoComplete({
                    shelfId: "ef5b9bad-8cf0-4f8a-857a-8902b7e2988c",
                    appendTo: $("#ta-product-list-mobile"),
                    notFound: function() {
                        $("#ta-product-list-mobile").html("")
                    },
                    limit: 24
                }), 
                $("#search-text-mobile").keyup(function(event) {
                    var _text = $(this).val();
                    "" != _text ? (
                        $("#search-result-mobile").show(),
                        $("#ta-product-list-mobile").show(),
                        $(".h-search-search").click(function() {
                            var _search = _text.replace(/%20/g, " ");
                            return window.location.href = "/" + _search, !1
                        })
                    ) : ( $("#ta-product-list-mobile").hide() )
                });

            });

            $("a.h-search-close").click(function() {
                $("#search-result-mobile").hide();
            });

            $(".h-search-search").hide();

            $(".h-search-btn").click(function() {
                $(".h-search-search").show();
            });

            $(".h-search-close").click(function() {
                $(".h-search-search").hide();
            });

            /* search mobile - end */


            /* search fixed - start */

            $("#js-typeahead-search-fixed").click(function() {
            
                $("#js-typeahead-search-fixed").vtexCustomAutoComplete({
                    shelfId: "ef5b9bad-8cf0-4f8a-857a-8902b7e2988c",
                    appendTo: $(".ta-result-list-fixed"),
                    notFound: function() {
                        $(".ta-result-list-fixed").html("")
                    },
                    limit: 10
                }), 
                $("#js-typeahead-search-fixed").keyup(function(event) {
                    var _text = $(this).val();
                    "" != _text ? (
                        $("#search-result-fixed").show(),
                        $(".ta-result-list-fixed").show(),
                        $(".search-search").click(function() {
                            var _search = _text.replace(/%20/g, " ");
                            return window.location.href = "/" + _search, !1
                        })
                    ) : ( $(".ta-result-list-fixed").hide() )
                });

            });

            $(document).mouseup(function(e) {
                var $searchResultFixed = $("#search-result-fixed"),
                    $searchTextFixed = $("#js-typeahead-search-fixed");
                if (!$searchResultFixed.is(e.target) && $searchResultFixed.has(e.target).length === 0) {
                    if (!$searchTextFixed.is(e.target) && $searchTextFixed.has(e.target).length === 0) {
                        if ($searchResultFixed.is(':visible')) {
                            $searchResultFixed.hide();
                        }
                    }
                }
            });

            $("a.search-close").click(function() {
                $("#search-result-fixed").hide();
            });

            $(window).scroll(function () { 
                if ($(this).scrollTop() < 90) {
                    $(".ta-result-list-fixed").html("");
                }
            });

            $(".search-search").hide();

            $("#search-button-fixed").click(function() {
                $(".search-search").show();
            });

            $(".search-close").click(function() {
                $(".search-search").hide();
            });

            /* search fixed - end */


        },

        openCloseRefinementItem: function() {

            $('.js-refine-item').on('click', '.ri-title', function (e) {
                e.stopPropagation();
                e.preventDefault();

                var $this = $(this),
                    $refinItem = $(e.delegateTarget);

                if ($refinItem.hasClass('ri-open')) {
                    $this.next().slideUp('fast', function () {
                        $refinItem.removeClass('ri-open');
                        $refinItem.addClass('ri-close');
                    });
                    $refinItem.find('.refine-showmore').hide();
                } else {
                    $this.next().slideDown('fast');
                    $refinItem.removeClass('ri-close');
                    $refinItem.addClass('ri-open');
                    $refinItem.find('.refine-showmore').show();
                }
            });

        },

        searchFilterOpenClose: function() {

            $("#search-filter-open-close").click(function() {
                $(".box-left").slideToggle("fast").css("overflow","visible");
            });

            $(".hide-filter-box .button.tertiary").click(function() {
                $(".box-left").slideToggle("fast").css("overflow","visible");
            });

        },

        searchfCheckbox: function() {

            $(".fcheckbox").click(function() {
                $(this).addClass("fchecked");
            });

        },

        returnTop: function() {

            $("#returnTop").click(function() {
                $("html, body").animate({scrollTop : 0},800);
            });

        },

        showMoreHide: function() {

            $(".show-more-category").click(function() {
                $(".show-more-hide-category").slideToggle("fast");
                $(".show-more-category").toggle();
            });

            $(".show-more-brand").click(function() {
                $(".show-more-hide-brand").slideToggle("fast");
                $(".show-more-brand").toggle();
            });

        },

        clearParenthesis: function() {

            $(".refine-item .ri-cont a").each(function() {
                var text = $(this).text();
                $(this).html("").append(text.replace(/(\s\(.*?\))/, ""));
            });

            setTimeout(function(){
                $(".box-left .ri-cont").show();
            }, 1);

        },

        searchNavigatorListCategoryAllLess: function() {

            $(".searchNavigator-list-category-all-less a").click(function() {
                $(".searchNavigator-list-category").toggleClass("searchNavigator-list-category-minor");
            });

        },

        searchNavigatorListBrandAllLess: function() {

            $(".searchNavigator-list-brand-all-less a").click(function() {
                $(".searchNavigator-list-brand").toggleClass("searchNavigator-list-brand-minor");
            });

        },

        paginationBarDepartament: function() {

            $(".pagination-bar .display-desc").prepend("<span class=\"search-number\"></span><span class=\"search-key\"></span>");


            var searchResulInsertKey = $(".grid-model .searchResultsTime .resultado-busca-numero .value").first().text();

            $(".pagination-bar .display-desc .search-number").text(searchResulInsertKey + ' resultados para');


            var serchResultInsertNumber = $(".search-single-navigator h3 a").text();

            $(".pagination-bar .display-desc .search-key").text(' "'+serchResultInsertNumber+'"');

        },   

        orderProduct: function() {

            $(".sim-head").toggle(function() {
                $(".sim-select").addClass("open");
                $(".sim-select").find(".sim-list").slideDown(100);
            }, function() {
                $(".sim-select").removeClass("open");
                $(".sim-select").find(".sim-list").slideUp(100);
            });

            $(document).mouseup(function(e) {
                var container = $(".sim-head span");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $(".sim-select").removeClass("open");
                    $(".sim-select").find(".sim-list").slideUp(100);
                }
            });

            $(".sim-select ul li").hover(
                function() {
                    $(this).addClass("hover");
                },
                function() {
                    $(this).removeClass("hover");
                }
            );

            $(".sim-select .sim-list a").click(function(event){
                event.preventDefault();
                var locationHref = window.location.href;
                var orderSelected = $(this).attr("href");
                var locationHrefReplace = locationHref.replace(/orderbytopsaledesc/ig, '').replace(/orderbyreleasedatedesc/ig, '').replace(/orderbypricedesc/ig, '').replace(/orderbypriceasc/ig, '').replace(/o=&/ig, '').replace(/&o=/ig, '');
                window.location.href = locationHrefReplace+orderSelected;
            });

        },

        structureListGrid: function() {

            $(".structure-list").click(function() {

                $(".structure-list").addClass("selected");

                $(".structure-grid").removeClass("selected");

                $(".structure-list-style").html("<link rel=\"stylesheet\" href=\"https://bbdi.vteximg.com.br/arquivos/css.css?v=1111111\">");

            });

            $(".structure-grid").click(function() {

                $(".structure-grid").addClass("selected");

                $(".structure-list").removeClass("selected");

                $(".structure-list-style").html("");

            });

        },

        alertBox: function() {

            $(".abnav-header").prepend("<div id=\"BBDI-mensagem\" class=\"BBDI-mensagem-alert\" style=\"display: none;\"><div class=\"BBDI-messagem-box top-hidden\"><div class=\"messageWrapper\"><div class=\"close\">X</div><h3></h3></div></div></div>");

            $("header #BBDI-mensagem").click(function(e) {
                if (e.target.id == "BBDI-mensagem") {
                    $("header #BBDI-mensagem").css("display", "none");
                    $("header #BBDI-mensagem .BBDI-messagem-box").addClass("top-hidden");
                }
            });

            $("header #BBDI-mensagem .close, button.close.vtexIdUI-close").click(function() {
                $("header #BBDI-mensagem").css("display", "none");
                $("header #BBDI-mensagem .BBDI-messagem-box").addClass("top-hidden");
            });

        },

        register: function() {

            $("#phone-register").mask("(00) 000000000");
            $("#cnpj-register").mask("00.000.000/0000-00");

            $(".New-BBDI-register .rf-submit-section input[type=button]").click(function() {

                var lengthRazaoRegister = $("#razao-register").val().length;
                var lengthEmailRegister = $("#email-register").val().length;
                var lengthCnpjRegister = $("#cnpj-register").val().length;
                var lengthPhoneRegister = $("#phone-register").val().length;

                var mail = $("#email-register").val();
                var regMail = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
                var resultMail = regMail.test(mail);

                var cnpj = $("#cnpj-register").val();
                var regCnpj = /^\d{1,2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}$/;
                var resultCnpj = regCnpj.test(cnpj);

                var phone = $("#phone-register").val();
                var regPhone = /^\(\d{2}\)?\s*\d{4,5}\d{4}$/;
                var resultPhone = regPhone.test(phone);

                if(lengthRazaoRegister <= "0") { 
                    $("#error-nome-register").text("Nome é obrigatório.").show();
                    $("#razao-register").addClass("error");
                }

                else if(lengthRazaoRegister <= "3") { 
                    $("#error-nome-register").text("Nome é inválido.").show();
                    $("#razao-register").addClass("error");
                }

                else if(lengthEmailRegister <= "0") { 
                    $("#error-email-register").text("Email é obrigatório.").show();
                    $("#email-register").addClass("error");
                }

                else if(resultMail == false) {
                    $("#error-email-register").text("Email é inválido.").show();
                    $("#email-register").addClass("error");
                }

                else if(lengthCnpjRegister <= "0") { 
                    $("#error-cnpj-register").text("CNPJ é obrigatório.").show();
                    $("#cnpj-register").addClass("error");
                }

                else if(resultCnpj == false) { 
                    $("#error-cnpj-register").text("CNPJ é inválido.").show();
                    $("#cnpj-register").addClass("error");
                }

                else if(lengthPhoneRegister <= "0") { 
                    $("#error-telefone-register").text("Telefone é obrigatório.").show();
                    $("#phone-register").addClass("error");
                }

                else if(resultPhone == false) {
                    $("#error-telefone-register").text("Telefone é inválido.").show();
                    $("#phone-register").addClass("error");
                }

                else {

                    function postInMasterData(name, email, fields) {

                        var store = 'bbdi';
                        var urlProtocol = window.location.protocol;
                        var apiUrl = urlProtocol + '//api.vtexcrm.com.br/' + store + '/dataentities/' + name + '/documents';
                        var response;

                        var who = {
                            "email": email
                        };

                        var data = $.extend(who, fields);

                        $.ajax({
                            "headers": {
                                "Accept": "application/vnd.vtex.ds.v10+json",
                                "Content-Type": "application/json"
                            },
                            "url": apiUrl,
                            "async": false,
                            "crossDomain": true,
                            "type": "POST",
                            "data": JSON.stringify(data)
                        }).success(function (data) {

                            $("header .BBDI-mensagem-alert h3").html("Usuário cadastrado com sucesso! </br> <span style=\"font-size: 14px;\">Seu cadastro esta sendo analisado, logo entraremos em contato.</span>");
                            $("header .BBDI-mensagem-alert").show();
                            $("header .BBDI-messagem-box").removeClass("top-hidden");

                            $("#razao-register, #email-register, #cnpj-register, #phone-register").val("");

                        }).fail(function (data) {

                            response = data.status;

                            if(data.status == 400){
                                $("#error-email-register").text("Esse email já existe.").show();
                                $("#email-register").addClass("error");
                            }

                        });

                        return response;
                    }

                    var someAttributes = {
                        corporateName: $('#razao-register').val(),
                        email: $('#email-register').val(),
                        corporateDocument: $('#cnpj-register').val(),
                        homePhone: $('#phone-register').val(),
                        approved: false
                    };

                    postInMasterData('CL', $('#email-register').val(), someAttributes);

                }

                $("#razao-register").on("keyup", function() {
                    if(this.value.length > "0") {
                        $(this).removeClass("error");
                        $("#error-nome-register").hide();
                    }
                });

                $("#email-register").on("keyup", function() {
                    if(this.value.length > "0") {
                        $(this).removeClass("error");
                        $("#error-email-register").hide();
                    }
                });

                $("#cnpj-register").on("keyup", function() {
                    if(this.value.length > "0") {
                        $(this).removeClass("error");
                        $("#error-cnpj-register").hide();
                    }
                });

                $("#phone-register").on("keyup", function() {
                    if(this.value.length > "0") {
                        $(this).removeClass("error");
                        $("#error-telefone-register").hide();
                    }
                });

            });

        },

        breadcrumb: function() {

            $(".breadcrumb li:first-child a").text("Home");

            $(".breadcrumb").show();

        },

        breadcrumbProduct: function() {

            $(".New-BBDI-product .last-breadcrumb-title-product").insertAfter(".New-BBDI-product .breadcrumb .last");

            $(".New-BBDI-product .last-breadcrumb-title-product").show();

        },

        addCart: function() {

            $(".total-content").show();

            $(".js-add-to-cart").click(function() {

                var qtyProduct = $(".New-BBDI-product .total-content .total-qty .text-input").val();

                var erQtyProduct = /^[0-9]+$/;

                var testQtyProduct = erQtyProduct.test(qtyProduct);

                if (testQtyProduct == true) {

                    if (qtyProduct >= "1") {
                        
                        var skucorrenteProduct = $("#calculoFrete").attr('skucorrente');
                        var qtyProduct = $(".qty-label input").val();
                        var urlAddCartProduct = "https://www.bgrupo.com.br/checkout/cart/add?sku=" + skucorrenteProduct + "&qty=" + qtyProduct + "&seller=1&redirect=true&sc=1";
                        window.location.href = urlAddCartProduct;

                    } else {

                        $(".New-BBDI-product .total-content .total-qty .text-input").addClass("error");
                        $(".New-BBDI-product .total-content .total-qty p.error").show();

                    }

                } else {

                    $(".New-BBDI-product .total-content .total-qty .text-input").addClass("error");
                    $(".New-BBDI-product .total-content .total-qty p.error").show();

                }
                
            });

            $(".New-BBDI-product .total-content .total-qty .text-input").keyup(function() {

                $(".New-BBDI-product .total-content .total-qty .text-input").removeClass("error");
                $(".New-BBDI-product .total-content .total-qty p.error").hide();

            });

        },

        productEsgotado: function() {

            if($("body").hasClass("New-BBDI-product")) {

                var ifNotifymeTitleActived = $(".notifyme-title-div").attr('style');

                if(ifNotifymeTitleActived.indexOf("none") != -1) {

                    $(".New-BBDI-product .total-content .buy-button.buy-button-ref").hide();

                } else {

                    $(".New-BBDI-product .total-content .total-price.no-arrow, .New-BBDI-product .total-content .total-qty, .New-BBDI-product .total-content .total-button").hide();

                }

            }

        },

        shippingProduct: function() {

            //ShippingValue();

            $(window).load(function() {

                setTimeout(function(){
                    
                    $(".New-BBDI-product .store-shipping .prefixo input").attr("placeholder", "00000-000").addClass("text-input");
                    $(".New-BBDI-product .store-shipping #btnFreteSimulacao").addClass("button primary");

                    $(".store-shipping").after("<div class=\"freight-values-closed\"><style>.New-BBDI-product .store-shipping .freight-values{padding:0;overflow:hidden;height:0;}</style></div>");

                    $(".frete-calcular.btBordas.btBordasInput").click(function(e) {

                        $(".store-shipping").after("<div class=\"freight-values-closed\"><style>.New-BBDI-product .store-shipping .freight-values{padding:0;overflow:hidden;height:0;}</style></div>");

                        $("#btnFreteSimulacaoClose").remove();

                        $(".new-bbdi-loading-blue-50").show();

                        setTimeout(function(e){

                            $("#btnFreteSimulacaoClose").remove();
                            
                            $('.New-BBDI-product .store-shipping .freight-values').append("<input type=\"button\" id=\"btnFreteSimulacaoClose\" class=\"button primary form-control\" value=\"Fechar\">");
                        
                            $(".new-bbdi-loading-blue-50").hide();

                            $(".freight-values-closed").remove();

                            $("#btnFreteSimulacaoClose").click(function() {
                     
                                $(".store-shipping").after("<div class=\"freight-values-closed\"><style>.New-BBDI-product .store-shipping .freight-values{padding:0;overflow:hidden;height:0;}</style></div>");

                            });

                            e.preventDefault();

                        }, 1500);

                        e.preventDefault();

                    });

                }, 400);

            });

        },

        qvvtProduct: function () {

            $(".New-BBDI-product .slick-slide-qvvt-product ul .helperComplement").remove();

            $(".New-BBDI-product .slick-slide-qvvt-product ul").slick({
                slidesToShow: 4,
                speed: 800,
                infinite: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });

            var allMarcasBreadCrumbAddQvvt = $(".New-BBDI-product .breadcrumb li.last a").attr("href");
            $(".New-BBDI-product .entire-collection a.ver-tudo.blue").attr("href", allMarcasBreadCrumbAddQvvt);

            var qvvtNumberLi = $(".New-BBDI-product .entire-collection .slick-track li").length;
            $(".New-BBDI-product .entire-collection .carousel-head > .pagers span").text(qvvtNumberLi + " Itens");

            function ShowQvvt() {
                var countQvvt = $(".New-BBDI-product .entire-collection .slick-track li").length;
                if(countQvvt > 0) {
                    setTimeout(function(){
                        $(".New-BBDI-product .entire-collection .carousel-head, .New-BBDI-product .entire-collection .ver-tudo.blue, .New-BBDI-product .entire-collection ul li").show();
                    }, 100);
                }
            }

            ShowQvvt();

            $(window).resize(function() {
                ShowQvvt();
            });

        },

        pageProduct: function() {  

            setTimeout(function(){
                $(".New-BBDI-product #image-main").elevateZoom();
            }, 1000);
            
            $(".New-BBDI-product .apresentacao").click(function() {
                $(".New-BBDI-product #image-main").elevateZoom();
            });


            function thumbsSlick() {

                $(".New-BBDI-product .pro-img .thumbs").slick({
                    slidesToShow: 5,
                    speed: 800,
                    infinite: false,
                    dots: true,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    }]
                });

            }

            function checkThumbsSlick() {

                var countThumbsWidth = $(window).width();

                var countThumbsLi = $(".New-BBDI-product .pro-img .thumbs li").length;
                var countThumbsLiSlick = $(".New-BBDI-product .pro-img .slick-track li").length;

                if(countThumbsWidth >= 1024) {

                    if (countThumbsLi > 6) {

                        if (countThumbsLiSlick > 5) {

                            $(".New-BBDI-product .pro-img ul.slick-dots").show();

                        }

                    }

                }

                if(countThumbsWidth <= 1023) {

                    if (countThumbsLi > 5) {

                        if (countThumbsLiSlick > 4) {

                            $(".New-BBDI-product .pro-img ul.slick-dots").show();

                        }

                    }

                }

            }

            thumbsSlick();
            checkThumbsSlick();

            $(window).resize(function() {
                checkThumbsSlick();
            });

            $(".New-BBDI-product .thumbs").show();
            
        },

        breadcrumbAllDepartament: function() {

            $('body.all-departament .breadcrumb ul').append('<li class="last" typeof="v:Breadcrumb"><a href="" rel="v:url" property="v:title">Todos Departamentos</a></li>');

        },

        hrefSecondBreadcrumb: function() {

            var hrefSecondBreadcrumb = $('.breadcrumb li:nth-child(2) a').attr('href');
            $('.refine-item .ri-cont.selec-cont li a, .refine-item .selec-button-box a').attr('href', hrefSecondBreadcrumb);

        },

        newPaginationSearchkey: function() {
            
            var categoryName = $(".New-BBDI-category .right-cont .breadcrumb li:nth-child(2) a").text();
            var categoryBrand = $(".New-BBDI-category .right-cont .breadcrumb li:nth-child(3) a").text();
            var categoryLine = $(".New-BBDI-category .right-cont .breadcrumb li:nth-child(4) a").text();

            if(categoryLine.indexOf("R$") != -1) {

                $(".New-BBDI-category .display-desc .search-key").text(' " ' + categoryName + ' ' + categoryBrand + ' "');

            } else {

                $(".New-BBDI-category .display-desc .search-key").text(' " ' + categoryName + ' ' + categoryBrand + ' ' + categoryLine + ' "');

            }

        },

        titleSearchSingleNavigator: function() {

            setTimeout(function(){
                var categoryName = $(".New-BBDI-category .right-cont .breadcrumb li:nth-child(2) a").text();
                $(".title-search-single-navigator").text(categoryName);
            }, 500);

        },

        dev: function() {

            var paginationSearchNumber = $(".pagination-bar.clearfix.top .search-number").text();
            var paginationSearchNumberClear = paginationSearchNumber.replace(/[^0-9]/g,'');
            
            if(paginationSearchNumberClear == "0") {
            
                $(".pagination-bar.clearfix.top .search-number").text(paginationSearchNumberClear + ' resultado para');
                $(".pagination-bar.clearfix.bottom .search-number").text('Mostrando ' + paginationSearchNumberClear + ' item');
            
                $(".pagination-bar.clearfix .search-number, .pagination-bar.clearfix.top .search-key").show();
            
            } else if (paginationSearchNumberClear == "1") {
            
                $(".pagination-bar.clearfix.top .search-number").text(paginationSearchNumberClear + ' resultado para');
                $(".pagination-bar.clearfix.bottom .search-number").text('Mostrando ' + paginationSearchNumberClear + ' item');
            
                $(".pagination-bar.clearfix .search-number, .pagination-bar.clearfix.top .search-key").show();
            
            } else {
            
                $(".pagination-bar.clearfix.top .search-number").text(paginationSearchNumberClear + ' resultados para');
                $(".pagination-bar.clearfix.bottom .search-number").text('Mostrando ' + paginationSearchNumberClear + ' items');
            
                $(".pagination-bar.clearfix .search-number, .pagination-bar.clearfix.top .search-key").show();
            
            }

        },

        hrefBreadcrumbMobileReturn: function() {

            var hrefBreadcrumbMobileReturn = $('.breadcrumb li:nth-child(2) a').attr('href');
            $('.New-BBDI-category .breadcrumb.hide-desktop a').attr('href', hrefBreadcrumbMobileReturn);

        },

        checkShowMoreCat: function() {

            setTimeout(function(){

                if ($(window).width() > 768) {

                    var searchSingleNavigatorHeight = $('.search-single-navigator').height();

                    if(searchSingleNavigatorHeight <= 220) {
                        $(".searchNavigator-list-brand-minor").css("height", "auto");
                        $(".refine-item .refine-showmore").remove();
                    } else {
                        $(".refine-item .refine-showmore").show();
                    }

                } else {
                    
                    $("p#search-filter-open-close").click(function() {

                        setTimeout(function(){

                            var searchSingleNavigatorHeightMobile = $('.search-single-navigator').height();

                            if(searchSingleNavigatorHeightMobile <= 220) {
                                $(".refine-item .refine-showmore").remove();
                            } else {
                                $(".refine-item .refine-showmore").show();
                            }

                        }, 500);

                    });

                }

            }, 500);

        },

        init: function() {
            this.NavFixed(),
            this.NavContainerFixed(),
            this.searchFixedOpen(),
            this.menuTodosProdutos(),
            this.menuLancamentos(),
            this.menuSegmentos(),
            this.HeaderSearch(),
            this.HeaderSearchNav(),
            this.checkSessionUserLogin(),
            this.login(),
            this.shoppingCartAmount(),
            this.delayQuickLinkTop(),
            this.HeaderSearchVtexCustomAuto(),
            this.openCloseRefinementItem(),
            this.searchFilterOpenClose(),
            this.searchfCheckbox(),
            this.returnTop(),
            this.showMoreHide(),
            this.clearParenthesis(),
            this.searchNavigatorListCategoryAllLess(),
            this.searchNavigatorListBrandAllLess(),
            this.paginationBarDepartament(),
            this.orderProduct(),
            this.structureListGrid(),
            this.alertBox(),
            this.register(),
            this.breadcrumb(),
            this.breadcrumbProduct(),
            this.addCart(),
            this.productEsgotado(),
            this.shippingProduct(),
            this.breadcrumbAllDepartament(),
            this.hrefSecondBreadcrumb(),
            this.newPaginationSearchkey(),
            this.titleSearchSingleNavigator(),
            this.dev(),
            this.hrefBreadcrumbMobileReturn(),
            this.checkShowMoreCat()
        },
        init_ajax: function() {
            this.pageProduct(),
            this.qvvtProduct()
        }
        
    },

    ajax: function() {
        return this.methods.init_ajax()
    },
    mounted: function() {
        return this.methods.init()
    }

};

$(document).ready(function() {
    BBDI_Geral.mounted()
}), $(document).ajaxStop(function() {
    BBDI_Geral.ajax()
});