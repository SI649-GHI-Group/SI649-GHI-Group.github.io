var windowW = $(window).width();
var windowH = $(window).height();


var ghiIntroSvg = d3.select('#GHIIntroSvg')
                    .attr('width', windowW * 4/5)
                    .attr('height', windowH);


var cx0 = windowW/2 - 150,
    cy0 = windowH/2 - 50,
    r_parent = 150,
    r_child = 75,
    font_size_parent = 28,
    font_size_child = 14,

    color_ghi = '#FFB533',
    color_undernourishment = '#EC654D',
    color_stunting = '#0bb',
    color_wasting = '#FA9C21',
    color_motality = '#3C73B9',

    cx_ghi = cx0,
    cy_ghi = cy0;


var lineGenerator = d3.line();





function drawEntity(name, x, y, r, color, font_size, parentOrChild){
    // let className = parentOrChild === 'parent' ? 'introParentG' : 'introChildG';
    // let color = parentOrChild === 'parent' ? parentColor : childColor;
    // let r = parentOrChild === 'parent' ? r_parent : r_child;
    // let font_size = parentOrChild === 'parent' ? font_size_parent : font_size_child;

    let idName_G = 'introG_' + name;
    let getIdName_G = '#' + idName_G;
    d3.select(getIdName_G).remove();


    let G = ghiIntroSvg.append('g')
                        .attr('id', idName_G);

    //there are lines linking each parent-child pair
        if (parentOrChild === 'child'){
            let points = [
                [cx_ghi,cy_ghi],
                [x,y]
            ];
            let pathData = lineGenerator(points);
            let line = G.append('path')
                                .attr('d', pathData)
                                .attr('id', () => 'line_' + name)
                                .style('stroke-width', '2px')
                                .style('stroke-linecap', 'round')
                                .style('stroke-dasharray', ("2,8"));
        }

    let Circle = G.append('circle')
                            .attr('id', () => 'circle_' + name)
                              .attr('cx', x + "px")
                              .attr('cy', y + "px")
                              .attr('r', r + "px")
                              .attr('fill', color);
    let Text = G.append('text')
                            .attr('id', () => 'text_' + name)
                            .attr('x', x + "px")
                            .attr('y', y + "px")
                            .attr('text-anchor', 'middle')
                            .attr('alignment-baseline', 'middle')
                            .attr('fill', 'white')
                            .attr('font-size', font_size + 'px')
                            .text(() => parentOrChild === 'parent' ? 'Global Hunger Index' : name);


}


//step1 only undernourishment circle

    //stunting,wasting,motality corcles hide at the bottom
        // otherChildrenFactors = ['Stunting', 'Wasting', 'Motality'];
        drawEntity('Stunting', cx0, cy0, r_child, color_stunting, font_size_child, 'child');
        drawEntity('Wasting', cx0, cy0, r_child, color_wasting, font_size_child, 'child');
        drawEntity('Motality', cx0, cy0, r_child, color_motality, font_size_child, 'child');

    //GHI Circle hides behind
        drawEntity('GHI', cx_ghi, cy_ghi, r_parent, color_ghi, font_size_parent, 'parent');

    //have undernourishment circle at the top
        drawEntity('Undernourishment', cx0, cy0, r_parent, color_ghi, font_size_parent, 'child');


//step2 undernourishment circle start to shrink and change position and change color, and GHI circle move a little
var cy_child_target = windowH * 3/4,
    cy_parent_target = windowH * 3/8,

    cx_un_target = windowW * 7/48,
    cx_s_target = windowW * 15/48,
    cx_w_target = windowW * 23/48,
    cx_m_target = windowW * 31/48;
