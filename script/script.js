var textPositionTop_0 = $('#text_0_undernourishment').offset().top,
    textPositionTop_1 = $('#text_1_undernourishmentToGHI').offset().top,
    textPositionTop_2 = $('#text_2_GHI').offset().top,
    textPositionTop_3 = $('#text_3_GHIWorldMap').offset().top,
    textPositionTop_4 = $('#text_4_RadarChart').offset().top,
    textPositionTop_5 = $('#text_5_economyImpact').offset().top,

    visIds = ["vis_0_pieChart", "vis_2_GHIIntro", "vis_3_GHIMap", "vis_4&5", "vis_4_RadarChart", "vis_5_BarLineChart"];


var currentVisId = visIds[0],
    earlierVisId = visIds[0],
    currentWindoeScrollTop = 0,
    earlierWindowScrollTop = 0,
    currentStage = 0,
    earlierStage = 0;



function checkStageNum(scrollTop){
    if(scrollTop >= textPositionTop_0 && scrollTop < textPositionTop_2){
        return 0;
    // } else if (scrollTop >= textPositionTop_1 && scrollTop < textPositionTop_2) {
    //     return 1;
    } else if (scrollTop >= textPositionTop_2 && scrollTop < textPositionTop_3) {
        return 1;
    } else if (scrollTop >= textPositionTop_3 && scrollTop < textPositionTop_4) {
        return 2;
    } else if (scrollTop >= textPositionTop_4 && scrollTop < textPositionTop_5) {
        return 3; //affect "vis_4&5", "vis_4_RadarChart"
    } else if (scrollTop >= textPositionTop_5) {
        return 5; //affect "vis_4_RadarChart", "vis_5_BarLineChart"
    }
}

//actions based on the stage Change
function stageToAction(stage, direction){
    let direction = -1;

}

//if scrollnum increases, should fade upwards (direction == -1); else, fade downwards (direction == 1)
function earlierVisFade(earlierVisId, direction){
    if(direction == -1){

    } else if(direction == 1){

    }
}

function currentVisCome(currentVisId, direction){
    if(direction == -1){

    } else if(direction == 1){

    }
}



$(window).scroll(function(){
    currentWindoeScrollTop = $(this).scrollTop();

    let direction;
    direction = currentWindoeScrollTop > earlierWindowScrollTop ? -1 : 1

    //check where it is on the left and update the right part accordingly
    currentStage = checkStageNum(currentWindoeScrollTop);

    console.log(currentStage)

    //based on the stage, actions happens
    stageToAction(currentStage, direction)

    //for next iteration
    earlierWindowScrollTop = currentWindoeScrollTop;
})
