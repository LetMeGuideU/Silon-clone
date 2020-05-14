
$( document ).ready(function() {
    function centerVerticalText(love="normal"){
        $( ".nav-brand a,.tools li" ).css( "lineHeight", function() {
            return $(".main-nav").innerHeight()+"px";
          });
    }
    centerVerticalText()
    $( window ).resize(()=>{
        centerVerticalText("resize")
        $(".item-list").attr('style',"")
    })
    $(".nav-slide-toggler").click(function(){
        $(".item-list").slideToggle(500)
    })
    
    $(".rating .fas").hover(function(){
        $(this).css("color","#ff5353")
        $(this).prevAll().css("color","#ff5353")
        
        
    },function(){
        $(this).parent().children().css("color","#565656")
    })

});