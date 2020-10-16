const portfolio = {};

portfolio.init = function () {
    let home = $('.home-page');
    $('#navbar .nav-link').each((index, element) => {

        let clickedPageId = $(element).attr('href') + '-page';
        $(element).click(() => {
            home.addClass('inactive-page');
            $(clickedPageId).addClass('active-page').removeClass('inactive-page');
        })
        $('.close-button').click(() => {
          $(clickedPageId).addClass('inactive-page').removeClass('active-page');
          home.removeClass('inactive-page');  
        })
    })
}

$(function() {
    portfolio.init();
})