
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                10.8,
                89.2,
            ],
                backgroundColor: [
                // "#F7464A",
                "#FFB533"


            ],
            borderWidth: 0.2,
        }],
        labels: [
        "Undernourished",
            "Nourished",


        ]
    },
    options: {
        responsive: true,
        rotation: 2.2 * Math.PI,
    }
};

var ctx = document.getElementById("chart-area").getContext("2d");
var myDoughnut = new Chart(ctx, config);




var config1 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                2.59,
                0.42,
                0.69,
                0.69,
                0.17,
                3.52,
                2.72,
                89.2,
            ],
                backgroundColor: [
                "#FFD42C",
                "#ffcccc",
                "#ffb3b3",
                "#ffb3b3",
                "#ffe6e6",
                "#FF9A2C",
                "#FFB533",

            ],

            borderWidth: 0.2,
        }],
        labels: [
            "East Asia & Pacific",
            "Europe & Central Asia",
             "Latin America & Caribbean",
            "Middle East & North Africa",
             "North America",
            "South Asia",
            "Sub-Saharan Africa"

        ],
    },
    options: {
        responsive: true,
        rotation: 2.2 * Math.PI,
        animation:{
        animateRotate: false},
        legend:{
            display:false},
        tooltips:{
            yAlign: 'bottom'}
    }
};

var ctx1 = document.getElementById("chart-area1").getContext("2d");
var myDoughnut1 = new Chart(ctx1, config1);
