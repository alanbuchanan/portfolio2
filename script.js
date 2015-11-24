$(document).ready(function () {

    $('ul').circleMenu({
        item_diameter: 100,
        circle_radius: 300,
        direction: 'full',
        speed: 2000,
        delay: 2000
    });

    $('.circle').hide();

    $('.container').hover(

        function(){
            $("#main-image").fadeOut(function() {
                //$(this).load(function() { $(this).fadeIn(); });
                $('.circle').fadeIn();
                $('#bg').animate({'backgroundColor': '#000'},800);
                $(this).attr("src", "http://i.imgur.com/3J5tWR5.png");
            });
        }

        //TODO: fix animations, make it look pretty

    );
});

