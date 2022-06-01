$(function () {
    //Run AOS
    AOS.init();

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('hidden');
        $(window).scrollTop(0);
        return false;
    });

    $('.menu li .sub-menu').parent().append('<span class="sub-down"><i class="fa fa-angle-down"></i></span>');
    $('.sub-down').parent().find('a').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').toggle();
    });
    
    let mainProductImage = document.getElementById('main-product');
    let productImage = document.querySelector(".product-list");

    productImage.addEventListener('clicks',e => {
        mainProductImage.setAttribute("data-aos", "fade-in");
        if (e.target.matches("img")) {
            if((e.target).getAttribute("data-img")==undefined){
                mainProductImage.setAttribute("data-aos", "");
            }else{
                /* Set data-img attribute for main-product */
                setProductImage((e.target).getAttribute("data-img"));
                
            }
        }
    });

    function setProductImage(parameter){
        setTimeout(function(){
            mainProductImage.setAttribute("data-aos", "");
        },800);
        setTimeout(function(){
            mainProductImage.src = parameter;
        },500)
        //mainProductImage.removeAttribute("data-aos");
    }
});