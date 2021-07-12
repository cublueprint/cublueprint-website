function scrollToBottom() {
    document.body.scrollBottom = 0; // For Safari
    document.documentElement.scrollBottom = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){
    $(".unavailable").click(function(){
        $('.toast').toast({delay: 1500});
        $('.toast').toast('show');
    });
});