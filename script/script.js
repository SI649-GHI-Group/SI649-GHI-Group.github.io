var textPositionTop_0 = $('#text_0_undernourishment').offset().top,
    textPositionTop_1 = $('#text_1_undernourishmentToGHI').offset().top,
    textPositionTop_2 = $('#text_2_GHI').offset().top,
    textPositionTop_3 = $('#text_3_GHIWorldMap').offset().top,
    textPositionTop_4 = $('#text_4_RadarChart').offset().top,
    textPositionTop_5 = $('#text_5_economyImpact').offset().top;




function checkStageNum(scrollTop){
    if(scrollTop >= textPositionTop_0 && scrollTop < textPositionTop_1){
        return 0;
    } else if (scrollTop >= textPositionTop_1 && scrollTop < textPositionTop_2) {
        return 1;
    } else if (scrollTop >= textPositionTop_2 && scrollTop < textPositionTop_3) {
        return 2;
    } else if (scrollTop >= textPositionTop_3 && scrollTop < textPositionTop_4) {
        return 3;
    } else if (scrollTop >= textPositionTop_4 && scrollTop < textPositionTop_5) {
        return 4;
    } else if (scrollTop >= textPositionTop_5) {
        return 5;
    }
}



$(window).scroll(function(){
    var windowScrollTop = $(this).scrollTop();

    //check where it is on the left and update the right part accordingly
    var currentStage = checkStageNum(windowScrollTop);

    console.log(currentStage)
})
