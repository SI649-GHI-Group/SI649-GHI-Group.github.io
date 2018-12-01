var textPositionBottom_0 = $('#text_0_undernourishment').offset().top + $(window).height()/2 + $('#text_0_undernourishment').children().children().outerHeight(true)/2,
    textPositionBottom_1 = $('#text_1_undernourishmentToGHI').offset().top + $(window).height()/2 + $('#text_1_undernourishmentToGHI').children().children().outerHeight(true)/2,
    textPositionBottom_2 = $('#text_2_GHI').offset().top + $(window).height()/2 + $('#text_2_GHI').children().children().outerHeight(true)/2,
    textPositionBottom_3 = $('#text_3_GHIWorldMap').offset().top + $(window).height()/2 + $('#text_3_GHIWorldMap').children().children().outerHeight(true)/2,
    textPositionBottom_4 = $('#text_4_RadarChart').offset().top + $(window).height()/2 + $('#text_4_RadarChart').children().children().outerHeight(true)/2,
    // textPositionTop_5 = $('#text_5_economyImpact').offset().top,

    visIds = ["#vis_0_pieChart", "#vis_2_GHIIntro", "#vis_3_GHIMap", "#vis_4_RadarChart", "#vis_5_BarLineChart"];


var currentVisId = visIds[0],
    earlierVisId = visIds[0],
    currentWindoeScrollTop = 0,
    earlierWindowScrollTop = 0,
    currentStage = 0,
    earlierStage = 0;



function checkStageNum(scrollTop){
    // console.log()
    if(scrollTop >= 0 && scrollTop < textPositionBottom_1){
        return 0;
    // } else if (scrollTop >= textPositionTop_1 && scrollTop < textPositionTop_2) {
    //     return 1;
} else if (scrollTop >= textPositionBottom_1 && scrollTop < textPositionBottom_2) {
        return 1;
    } else if (scrollTop >= textPositionBottom_2 && scrollTop < textPositionBottom_3) {
        return 2;
    } else if (scrollTop >= textPositionBottom_3 && scrollTop < textPositionBottom_4) {
        return 3; //affect "vis_4&5", "vis_4_RadarChart"
    } else if (scrollTop >= textPositionBottom_4) {
        return 4; //affect "vis_4_RadarChart", "vis_5_BarLineChart"
    }
}

//actions based on the stage Change
function stageToAction(currentStage, earlierStage){
    let direction = currentStage - earlierStage;

    currentVisId = visIds[currentStage];
    earlierVisId = visIds[earlierStage];

    switch(currentStage){
        case 0:
        case 1:
        case 2:
            earlierVisMove(earlierVisId, direction, 105);
            currentVisMove(currentVisId, direction, 100);
            break;

        case 3:
            if(earlierStage == 2){
                earlierVisMove(earlierVisId, direction, 105);
                currentVisMove(currentVisId, direction, 70);
            } else if (earlierStage == 4) {
                earlierVisMove(earlierVisId, direction, 105);
                currentVisMove(currentVisId, direction, 130);
            }
            break;

        case 4:
            earlierVisMove(earlierVisId, direction, -1);
            currentVisMove(currentVisId, direction, 63);


    }

}

//if scrollnum increases, should fade upwards (direction == 1); else, fade downwards (direction == -1)
function earlierVisMove(earlierVisId, direction, moveDist){
    let fadeTopValue = (-direction * moveDist).toString() + 'vh';

    $(earlierVisId).animate({ top: fadeTopValue}, {duration: 600});

}

function currentVisMove(currentVisId, direction, moveDist){
    // let comeFromTopValue = (direction * fromTopValue).toString() + 'vh';
    let comeToTopValue = (direction * 100 - direction * moveDist).toString() + 'vh';

    $(currentVisId).animate({ top: comeToTopValue}, {duration: 600});

}


$(document).ready()


$(window).scroll(function(){
    currentWindoeScrollTop = $(this).scrollTop();

    //check where it is on the left and update the right part accordingly
    currentStage = checkStageNum(currentWindoeScrollTop);

    //based on the stage, actions happens
    if (currentStage != earlierStage){
        console.log(currentStage);
        console.log(earlierStage);
        stageToAction(currentStage, earlierStage);
    }


    //for next iteration
    earlierWindowScrollTop = currentWindoeScrollTop;
    earlierStage = currentStage;
})
