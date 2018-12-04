var windowW = $(window).width();
var windowH = $(window).height();

console.log(windowW)

var ghiIntroSvg = d3.select('#GHIIntroSvg')
                    .attr('width', windowW * 4/5)
                    .attr('height', windowH);



var g_r1 = '200px';

//step1 only undernourishment circle
    var cx1 = windowW/2 - 150,
        cy1 = windowH/2 - 50,
        r1 = 200,

        parentColor = 'red',
        childColor = 'orange';

    //GHI Circle hides behind
        var ghiG = ghiIntroSvg.append('g')
                                        .attr('class', 'introParentG')
                                        .attr('id', 'introParentG_ghi')

        var ghiCircle = ghiG.append('circle')
                                              .attr('cx', cx1 + "px")
                                              .attr('cy', cy1 + "px")
                                              .attr('r', r1 + "px")
                                              .attr('fill', parentColor)
        var ghiText = ghiG.append('text')
                                            .attr('x', cx1 + "px")
                                            .attr('y', cy1 + "px")
                                            .attr('text-anchor', 'middle')
                                            .attr('alignment-baseline', 'middle')
                                            .attr('fill', 'white')
                                            .attr('font-size', "28px")
                                            .text('Global Hunger Index')



    //have undernourishment circle
        // var underNourishG = ghiIntroSvg.append('g')
        //                                 .attr('class', 'introChildG')
        //                                 .attr('id', 'introChildG_undernourishment')
        //
        // var underNourishCircle = underNourishG.append('circle')
        //                                       .attr('cx', cx1 + "px")
        //                                       .attr('cy', cy1 + "px")
        //                                       .attr('r', r1 + "px")
        //                                       .attr('fill', parentColor)
        // var underNourishText = underNourishG.append('text')
        //                                     .attr('x', cx1 + "px")
        //                                     .attr('y', cy1 + "px")
        //                                     .attr('text-anchor', 'middle')
        //                                     .attr('alignment-baseline', 'middle')
        //                                     .attr('fill', 'white')
        //                                     .attr('font-size', "28px")
        //                                     .text('Undernourishment')
