// 토글 버튼
$(document).ready(function() {
    $("#toggle-on").click(function(event){
        $("#toggle-menu").slideToggle();
        event.stopPropagation(); 
        // $("#header").toggleClass("menuon");
    });
    $(document).click(function() {
        $("#toggle-menu").slideUp();
        // $(".menuon").removeClass();
    });
    $(window).resize(function() {
        $("#toggle-menu").slideUp();
        // $(".menuon").removeClass("on");
    });
});