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

$('#nav-logo').hide();
$('.show-onscroll').slideUp();
responsive();

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

function closenav() {
    $('#main-navbar').slideUp();
}
function opennav() {
    $('#main-navbar').slideDown();
}

function responsive() {
    if($(window).width() < 700) {
        $('#main-navbar').slideUp('fast').addClass('responsive');
        $('#responsive-btn').slideDown();
    } else{
        $('#main-navbar').removeClass('responsive');
        $('#main-navbar').slideDown();
        $('#responsive-btn').slideUp();
    }
}