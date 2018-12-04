var textPositionBottom_0 = $('#text_0_undernourishment').offset().top + $(window).height()/2 + $('#text_0_undernourishment').children().children().outerHeight(true)/2,
    textPositionBottom_1 = $('#text_1_undernourishmentToGHI').offset().top + $(window).height()/2 + $('#text_1_undernourishmentToGHI').children().children().outerHeight(true)/2,
    textPositionBottom_2 = $('#text_2_GHI').offset().top + $(window).height()/2 + $('#text_2_GHI').children().children().outerHeight(true)/2,
    textPositionBottom_3 = $('#text_3_GHIWorldMap').offset().top + $(window).height()/2 + $('#text_3_GHIWorldMap').children().children().outerHeight(true)/2,
    textPositionBottom_4 = $('#text_4_RadarChart').offset().top + $(window).height()/2 + $('#text_4_RadarChart').children().children().outerHeight(true)/2,
    textPositionBottom_5 = $('#text_5_economyImpact').offset().top + $(window).height()/2 + $('#text_5_economyImpact').children().children().outerHeight(true)/2,

    visIds = ["#vis_0_pieChart", "#vis_2_GHIIntro", "#vis_3_GHIMap", "#vis_4_RadarChart", "#vis_5_BarLineChart"];


var currentVisId = visIds[0],
    earlierVisId = visIds[0],
    currentWindoeScrollTop = 0,
    earlierWindowScrollTop = 0,
    currentStage = 0,
    earlierStage = 0;

var GLOBAL_COUNTRY = 'Djibouti';
// var GLOBAL_COUNTRY = 'China';



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
        return 3; //affect "vis_4_RadarChart"
    } else if (scrollTop >= textPositionBottom_4 && scrollTop < textPositionBottom_5) {
        return 4; //affect "vis_5_BarLineChart"
    } else if (scrollTop >= textPositionBottom_5) {
        return 5; //can select countries
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
            //before, case3 and case4 may go together, but finally it seems fine to not
                // if(earlierStage == 2){
                //     earlierVisMove(earlierVisId, direction, 105);
                //     currentVisMove(currentVisId, direction, 100); //70
                // } else if (earlierStage == 4) {
                //     earlierVisMove(earlierVisId, direction, 105);
                //     currentVisMove(currentVisId, direction, 130);
                // }
            earlierVisMove(earlierVisId, direction, 105);
            if(earlierStage == 2){
                currentVisMove(currentVisId, direction, 98);
            } else if (earlierStage == 4) {
                currentVisMove(currentVisId, direction, 102);
            }
            break;

        case 4:
            //before, case3 and case4 may go together, but finally it seems fine to not
                // earlierVisMove(earlierVisId, direction, -1);
                // currentVisMove(currentVisId, direction, 63);
            if(earlierStage == 3){
                earlierVisMove(earlierVisId, direction, 105);
                currentVisMove(currentVisId, direction, 95);
            }
            break;


        case 5:

            $('.vis_5_finalInteraction').animate({ opacity: 1}, {duration: 600})


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
        // console.log(currentStage);
        // console.log(earlierStage);
        stageToAction(currentStage, earlierStage);
    }


    //for next iteration
    earlierWindowScrollTop = currentWindoeScrollTop;
    earlierStage = currentStage;
})
