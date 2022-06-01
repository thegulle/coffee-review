$(function(){

   $('.loop').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.loop').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    //Responsive transaction
    if ($(window).width() < 960) {
        $('.loop').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
     }
     else {
        $('.loop').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
     }
    
          
    
    $(".left").on("click",function(){
        $(this).next().slick('slickPrev');
    });
    $(".right").on("click",function(){
        $(this).prev().slick('slickNext');
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});
