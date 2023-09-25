$('.burger').click(function(){
    $('.burger_menu').addClass('burger_menu-active')
    $('.menu_background').show()
})
$('.burger_close').click(function(){
    $('.burger_menu').removeClass('burger_menu-active')
    $('.menu_background').hide()
})
$('.what_goes').click(function(){
    $('.what_goes_contant').addClass('what_goes-active')
    
})

$('.what_goes-close').click(function(){
    $('.what_goes_contant').removeClass('what_goes-active')
    
})

$('.menu_list li').click(function(){
    $('.menu_list li').removeClass("active-menu_list")
    $(this).addClass("active-menu_list")
})























