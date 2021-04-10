// -------------------------------------------------------------- //
//                                       ::::::::::: :::::::::    //
//                                          :+:     :+:    :+:    //
//    By: Ilyas Benhssine                  +:+     +:+    +:+     //
//                                        +#+     +#++:++#+       //
//                                       +#+     +#+    +#+       //
//    ilyasbenhssine@gmail.com          #+#     #+#    #+#        //
//                                 ########### #########          //
// -------------------------------------------------------------- //


new Vue({
    el: '#app',
    bodyAttrs: {

    },
    data: {
        APP_NAME: "Ilyas Benhssine Portfolio",

    },
    methods: {

    }
})


//.show-onscroll

$(window).on('load', function() {
    $('#nav-logo').hide();
    $('.show-onscroll').slideUp();
    responsive();
    $('#loader').fadeOut('slow');
});



$(window).resize(function() {
    responsive();
});


$(window).on('scroll', function() {
    if($(window).scrollTop()){
        $('#nav-logo').show('slow');
        $('.show-onscroll').slideDown();
    }else{
        $('#nav-logo').hide('slow');
        $('.show-onscroll').slideUp();
    }
});

function closeElement(e) {
    $(e).slideUp();
}
function openElement(e) {
    $(e).slideDown();
}

function SwitchElements(open, close){
    $(open).slideDown();
    $(close).slideUp();
}

function responsive() {
    if($(window).width() < 700) {
        $('#main-navbar').slideUp('fast').addClass('responsive');
        $('#responsive-btn').slideDown();
        $('#ntf-responsive-wrapper').slideDown('fast');
        $('#notif-list').slideUp().addClass('responsive');
    } else{
        $('#main-navbar').removeClass('responsive');
        $('#main-navbar').slideDown();
        $('#responsive-btn').slideUp();
        $('#ntf-responsive-wrapper').slideUp();
        $('#notif-list').slideDown().removeClass('responsive');
    }
}