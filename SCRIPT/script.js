$(document).ready(function(){
    $("#Home").hover(function(){
        var div = $(".heading-1");
        div.show(1000);
        div.animate({paddingLeft: '0px', opacity: '1'}, 1000);
        div.animate({paddingLeft: '50px', opacity: '1'}, 1000);
    });
    $("#Gallery").hover(function(){
        var div = $(".profile-image");
        div.animate({padding:'50px'});
    });
    $("#Gallery").hover(function(){
        var div = $(".Profile-area");
        div.show(1000)
    });
});