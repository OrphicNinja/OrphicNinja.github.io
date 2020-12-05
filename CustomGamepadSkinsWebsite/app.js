$("#xbox-one").click(function() {
        $("#p4-free").animate({
          opacity: 1
        }, 500);
    });


    $("#t4-free").click(function() {
        $("#p4-premium, #p4-custom").animate({
          opacity: 0
        }, 500, function() {
            $("#p4-free").animate({
                opacity: 1
            }, 500);
        });
    });