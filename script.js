$(document).ready(function () {

    $('.circle').hide();

    var niceBlue = '#02577a';

    $('ul').circleMenu({
        item_diameter: 100,
        circle_radius: 250,
        direction: 'full',
        speed: 1500,
        delay: 5000,
        init: function () {
            // When page opens, hide link circles
            $('.circle').hide();

            // When page opens, turn background blue
            $('#bg').animate({'backgroundColor': niceBlue}, 800);
        },
        open: function () {
            // Hide light-coloured logo
            $('#light').fadeOut();
            // Fade in light-coloured logo
            $('#dark').css('visibility', 'visible').fadeIn();
            // Change main image from light to dark
            $('#main-image').attr("src", "http://i.imgur.com/75MVQFw.png");

            // Fade in link circles
            $('.circle').fadeIn();

            // Change background color from dark to light
            $('#bg').animate({'backgroundColor': 'ghostwhite'}, 800);

        },
        close: function () {
            // Fade in light-coloured logo
            $('#light').fadeIn();
            // Hide light-coloured logo
            $('#dark').fadeOut();
            // Change main image from dark to light
            $('#main-image').attr("src", "http://i.imgur.com/uxNvl8p.png");

            // Hide link circles
            $('.circle').fadeOut(1000);

            // Turn background blue
            $('#bg').animate({'backgroundColor': niceBlue}, 800);
        }

    });

    var zoom = '20';

    $('.circle').hover(function() {
        $(this).animate({height: '+=' + zoom + '%', width: '+=' + zoom + '%'}, 100);
    }, function() {
        $(this).animate({height: '-=' + zoom + '%', width: '-=' + zoom + '%'}, 100);
    });

    //TODO: make images and link to appropriate sites
    //TODO: buy site and upload to it
});

