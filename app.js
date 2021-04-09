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


$(window).on('scroll', function() {
    if($(window).scrollTop()){
        $('#nav-logo').show('slow');
        $('.show-onscroll').slideDown();
    }else{
        $('#nav-logo').hide('slow');
        $('.show-onscroll').slideUp();
    }
});