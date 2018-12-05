var textPositionBottom_0 = $('#text_0_undernourishment').offset().top + $(window).height()/2 + $('#text_0_undernourishment').children().children().outerHeight(true)/2,
    textPositionBottom_1 = $('#text_1_undernourishmentToGHI').offset().top + $(window).height()/2 + $('#text_1_undernourishmentToGHI').children().children().outerHeight(true)/2,
    textPositionBottom_2 = $('#text_2_GHI').offset().top + $(window).height()/2 + $('#text_2_GHI').children().children().outerHeight(true)/2,
    textPositionBottom_3 = $('#text_3_GHIWorldMap').offset().top + $(window).height()/2 + $('#text_3_GHIWorldMap').children().children().outerHeight(true)/2,
    textPositionBottom_4 = $('#text_4_RadarChart').offset().top + $(window).height()/2 + $('#text_4_RadarChart').children().children().outerHeight(true)/2,
    textPositionBottom_5 = $('#text_5_economyImpact').offset().top + $(window).height()/2 + $('#text_5_economyImpact').children().children().outerHeight(true)/2,

    visIds = ["#vis_0_pieChart", "#vis_2_GHIIntro", "#vis_3_GHIMap", "#vis_4_RadarChart", "#vis_5_BarLineChart"],


    ghi_interpretation_0_start = textPositionBottom_1 + windowH/4,
    ghi_interpretation_1_ghiAppear = textPositionBottom_1 + windowH/2,
    ghi_interpretation_2_done = textPositionBottom_1 + windowH* 3/4;


var currentVisId = visIds[0],
    earlierVisId = visIds[0],
    currentWindoeScrollTop = 0,
    earlierWindowScrollTop = 0,
    currentStage = 0,
    earlierStage = 0;

var GLOBAL_COUNTRY = 'Djibouti';
var YEAR = 1992;
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


// $(document).ready()



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

    //scroll to change pieChart
    if(currentStage == 0){
        if(currentWindoeScrollTop > windowH/2){
            $('#first').animate({ opacity: 0}, {duration: 600})
            $('#second').animate({ opacity: 1}, {duration: 1200})
            // //start to build #second
            // var config1 = {
            //     type: 'doughnut',
            //     data: {
            //         datasets: [{
            //             data: [
            //                 2.59,
            //                 0.42,
            //                 0.69,
            //                 0.69,
            //                 0.17,
            //                 3.52,
            //                 2.72,
            //                 89.2,
            //             ],
            //                 backgroundColor: [
            //                 "#ff4d4d",
            //                 "#ffcccc",
            //                 "#ffb3b3",
            //                 "#ffb3b3",
            //                 "ffe6e6",
            //                 "#cc0000",
            //                 "#ff3333",
            //
            //             ],
            //
            //             borderWidth: 0.2,
            //         }],
            //         labels: [
            //             "East Asia & Pacific",
            //             "Europe & Central Asia",
            //              "Latin America & Caribbean",
            //             "Middle East & North Africa",
            //              "North America",
            //             "South Asia",
            //             "Sub-Saharan Africa"
            //
            //         ],
            //     },
            //     options: {
            //         responsive: true,
            //         rotation: 2.2 * Math.PI,
            //         animation:{
            //         animateRotate: false},
            //         legend:{
            //             display:false},
            //         tooltips:{
            //             yAlign: 'bottom'}
            //     }
            // };
            //
            // var ctx1 = document.getElementById("chart-area1").getContext("2d");
            // var myDoughnut1 = new Chart(ctx1, config1);

        }
    }

    //scroll-animation to interpret GHI
    if(currentStage == 1){
        // first triger, to let "undernourishment" shrink and show "GHI"
            if (currentWindoeScrollTop >= ghi_interpretation_0_start && currentWindoeScrollTop < ghi_interpretation_1_ghiAppear){
                if ( !y_un_scale ){
                    var y_un_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_0_start, ghi_interpretation_1_ghiAppear])
                                            .range([cy0, cy_child_target]);
                };
                if ( !y_ghi_scale ){
                    var y_ghi_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_0_start, ghi_interpretation_1_ghiAppear])
                                            .range([cy0, cy_parent_target]);
                };
                if ( !r_un_scale ){
                    var r_un_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_0_start, ghi_interpretation_1_ghiAppear])
                                            .range([r_parent, r_child]);
                };
                if ( !color_un_scale ){
                    var color_un_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_0_start, ghi_interpretation_1_ghiAppear])
                                            .range([color_ghi, color_undernourishment]);
                };
                if ( !font_size_un_scale ){
                    var font_size_un_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_0_start, ghi_interpretation_1_ghiAppear])
                                            .range([font_size_parent, font_size_child]);
                };

                cy_ghi = y_ghi_scale(currentWindoeScrollTop);
                let cy_un = y_un_scale(currentWindoeScrollTop),
                    r_un = r_un_scale(currentWindoeScrollTop),
                    color_un = color_un_scale(currentWindoeScrollTop),
                    font_size_un = font_size_un_scale(currentWindoeScrollTop);

                // these three moce with ghi
                    drawEntity('Stunting', cx_ghi, cy_ghi, r_child, color_stunting, font_size_child, 'child');
                    drawEntity('Wasting', cx_ghi, cy_ghi, r_child, color_wasting, font_size_child, 'child');
                    drawEntity('Motality', cx_ghi, cy_ghi, r_child, color_motality, font_size_child, 'child');
                // ghi moves
                    drawEntity('GHI', cx_ghi, cy_ghi, r_parent, color_ghi, font_size_parent, 'parent');
                // un moves and shrinks and changes color
                    drawEntity('Undernourishment', cx_ghi, cy_un, r_un, color_un, font_size_un, 'child');

            } else if (currentWindoeScrollTop >= ghi_interpretation_1_ghiAppear && currentWindoeScrollTop < ghi_interpretation_2_done) {
                if ( !x_un_scale ){
                    var x_un_scale = d3.scaleLinear()
                                        .domain([ghi_interpretation_1_ghiAppear, ghi_interpretation_2_done])
                                        .range([cx_ghi, cx_un_target]);
                };
                if ( !x_s_scale ){
                    var x_s_scale = d3.scaleLinear()
                                        .domain([ghi_interpretation_1_ghiAppear, ghi_interpretation_2_done])
                                        .range([cx_ghi, cx_s_target]);
                };
                if ( !x_w_scale ){
                    var x_w_scale = d3.scaleLinear()
                                        .domain([ghi_interpretation_1_ghiAppear, ghi_interpretation_2_done])
                                        .range([cx_ghi, cx_w_target]);
                };
                if ( !x_m_scale ){
                    var x_m_scale = d3.scaleLinear()
                                        .domain([ghi_interpretation_1_ghiAppear, ghi_interpretation_2_done])
                                        .range([cx_ghi, cx_m_target]);
                };
                if ( !y_children_scale ){
                    var y_children_scale = d3.scaleLinear()
                                            .domain([ghi_interpretation_1_ghiAppear, ghi_interpretation_2_done])
                                            .range([cy_ghi, cy_child_target]);
                };

                let cy_child = y_children_scale(currentWindoeScrollTop),
                    cx_un = x_un_scale(currentWindoeScrollTop),
                    cx_s = x_s_scale(currentWindoeScrollTop),
                    cx_w = x_w_scale(currentWindoeScrollTop),
                    cx_m = x_m_scale(currentWindoeScrollTop);

                // these three move x&y
                    drawEntity('Stunting', cx_s, cy_child, r_child, color_stunting, font_size_child, 'child');
                    drawEntity('Wasting', cx_w, cy_child, r_child, color_wasting, font_size_child, 'child');
                    drawEntity('Motality', cx_m, cy_child, r_child, color_motality, font_size_child, 'child');
                // un moves x
                    drawEntity('Undernourishment', cx_un, cy_child_target, r_child, color_undernourishment, font_size_child, 'child');
                // ghi stays
                    drawEntity('GHI', cx_ghi, cy_ghi, r_parent, color_ghi, font_size_parent, 'parent');

            }
    }



    //for next iteration
    earlierWindowScrollTop = currentWindoeScrollTop;
    earlierStage = currentStage;
})
