// ---------- CWK Individual jQuary Ver. 2020101 ----------

$(document).ready(function() { // jQuery Load
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('aside#mnuQuick.q_main').fadeIn(300);
        } else {
            $('aside#mnuQuick.q_main').fadeOut(100);
        }
    }); // Quick Menu Scroll

    $('.main-slick').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        arrows: false,
        zIndex: 1
    }); // Main Slide - Slick

    $('.rev-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '0',
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        fade: false,
        dots: false,
        arrows: true,
        zIndex: 1
    }); // Review Slide - Slick

    var newsticker = setInterval(function() {
        $('ul.listNotice > li:first-child').animate({'marginTop': '-1.75rem'}, function() {
            $(this).appendTo('ul.listNotice');
            $(this).css({'marginTop': '0'});
        });

        $('ul.listEvent > li:first-child').animate({'marginTop': '-1.75rem'}, function() {
            $(this).appendTo('ul.listEvent');
            $(this).css({'marginTop': '0'});
        });
    }, 5000); // Line Scrolling Function

    $('p.secCategory_selected').click(function() {
        $('ul.secCategory_sel').slideToggle();
    }) // Category Search Option Selector

    $('ul.secCategory_sel > li').each(function() {
        $(this).click(function () {
            $('p.secCategory_selected').text($(this).text());
            $(this).parent('ul').fadeOut();
        });
    }); // Category Search Option Dropdown Function

    $('section#secCategory article').each(function() {
        $(this).hover(function() {
            $(this).siblings().removeClass('checked');
            $(this).addClass('checked');
        }, function() {
            $(this).removeClass('checked');
        });
    }); // Category Item Hovering
}) // jQuery Closed