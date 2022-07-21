$('#count').countdown('2022/07/28', function(event) {
    $(this).html(event.strftime('' + 
        '<div class="count-block days">%D<span class="count-label">day%!d</span></div>' + 
        '<div class="count-block hours">%H<span class="count-label">%!H:hour,hours;</span></div>' + 
        '<div class="count-block minutes">%M<span class="count-label">%!M:minute,minutes;</span></div>' + 
        '<div class="count-block seconds">%S<span class="count-label">%!S:second,seconds;</span></div>'
    ));
});