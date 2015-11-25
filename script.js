$(document).ready(function () {

    $('.circle').hide();

    var niceBlue = '#02577a';

    $('ul').circleMenu({
        item_diameter: 100,
        circle_radius: 400,
        direction: 'full',
        speed: 2000,
        delay: 2000,
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
            $('#main-image').attr("src", "http://i.imgur.com/yeKUURJ.png");

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
            $('#main-image').attr("src", "http://i.imgur.com/3J5tWR5.png");

            // Hide link circles
            $('.circle').fadeOut(1000);

            // Turn background blue
            $('#bg').animate({'backgroundColor': niceBlue}, 800);
        }
    });


    //$('.container').hover(
    //
    //    function(){
    //        $("#main-image").fadeOut(function() {
    //            //$(this).load(function() { $(this).fadeIn(); });
    //            $('.circle').fadeIn();
    //            $('#bg').animate({'backgroundColor': '#000'},800);
    //            $(this).attr("src", "http://i.imgur.com/3J5tWR5.png");
    //        });
    //    }
    //
    //
    //);
    //TODO: fix animations, make it look pretty
});

