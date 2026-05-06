$(document).ready(function(){

    //paralax
    setTimeout(function() {

        $("#valores").parallax({imageSrc: 'img/fundo-valores.png'});
        $("#img-contact").parallax({imageSrc: 'img/contato2.jpg'});
    //$('#contato').parallax({imageSrc: 'img/cont-img.png'});
    }, 250)
});

/*Scrool*/
    let navBtn = $('.nav-link');

    let mainSection = $('#carouselIndicators');
    let aboutSection = $('#sobre');
    let serviceSection = $('#services');
    let contactSection = $('#contato');
    let clienttSection = $('#clientes');

    let scrolTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');
        console.log(btnId);

        if(btnId == 'about-menu') {
            scrolTo = aboutSection;
        } else if (btnId == 'service-menu') {
            scrolTo = serviceSection;
        } else if (btnId == 'contact-menu') {
            scrolTo = contactSection;
        } else if (btnId == 'client-menu') {
            scrolTo = clienttSection;
        } else {
            scrolTo = mainSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrolTo).offset().top - 70
        }, 1000);
    });