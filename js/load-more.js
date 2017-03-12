
/* Load More */

$(function() {
    $(".works-list .works-item").slice(0, 4).show();
    $("#works-loadmore").on('click', function(e) {
        e.preventDefault();
        $(".works-list .works-item:hidden").slice(0, 4).slideDown();
        if ($(".works-list .works-item:hidden").length == 0) {
            $("#works-loadmore").fadeOut('slow');
        }

    });
   }); 

