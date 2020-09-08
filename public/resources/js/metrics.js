
$(document).ready(function () {

$('.pointer').on('mouseover', function (e) {
    $(this).css({
        transform: 'scale(1.5)',
    });

    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    //console.log($(this).css("top"));
    top = (parseFloat(top) + $(".pointer").height() + 15.0);
    var left = $(this).css("left").replace(/[^-\d\.]/g, '');
    left = (parseFloat(left) + 10.0);


    var regionMetrics = '';
    var region = $(this).attr('id');

    switch (region) {
        case 'amer':
            regionMetrics =
                '<div class="region-container"><p class="region-text">Opty : 128 - 1065 hrs</p><p class="region-text">ACV : $96.7M - 31%</p></div>';
            break;
        case 'emea':
            regionMetrics =
                '<div class="region-container"><p class="region-text">Opty : 138 - 1105 hrs</p><p class="region-text">ACV : $46M - 33%</p></div>';
            break;
        case 'india':
            regionMetrics =
                '<div class="region-container"><p class="region-text">Opty : 87 - 1105 hrs</p><p class="region-text">ACV : $9M - 21%</p></div>';
            break;
        case 'asia':
            regionMetrics =
                '<div class="region-container"><p class="region-text">Opty : 59 - 561 hrs</p><p class="region-text">ACV : $11.7M - 14%</p></div>';
            break;
        case 'anz':
            regionMetrics =
                '<div class="region-container"><p class="region-text">Opty : 3 - 24.5 hrs</p><p class="region-text">ACV : $181K - 0.7%</p></div>';
            break;
    }

    if (region === 'anz')
        left = left - 140.0;


    $('#hiddenregion').css({
        position: 'absolute',
        left: left + 'px',
        top: top + 'px',
        display: 'block',
        padding: '5px',
        borderRadius: '7px',
    }).html(regionMetrics);
});


$('.pointer').on('mouseleave', function (e) {

    $(this).css({
        transform: 'scale(1.0)',
    });

    $('#hiddenregion').css({
        display: 'none',
    });
});

var charts = function () {
    var ctx = document.getElementById('demandHours');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["AMER Q1", "AMER Q2", "EMEA Q1 ", "EMEA Q2", "APAC Q1", "APAC Q2"],
            datasets: [
                {
                    label: "AMER",
                    backgroundColor: "#006F99",
                    data: [395, 571]
                },
                {
                    label: "EMEA",
                    backgroundColor: "#DE234C",
                    data: [0, 0, 414, 375]
                },
                {
                    label: "UKI",
                    backgroundColor: "#86152E",
                    data: [0, 0, 38, 184]
                },
                {
                    label: "INDIA",
                    backgroundColor: "#05B7FF",
                    data: [0, 0, 0, 0, 583, 1135]
                }, {
                    label: "ASIA",
                    backgroundColor: "#4D4D4D",
                    data: [0, 0, 0, 0, 154, 364]
                },
                {
                    label: "ANZ",
                    backgroundColor: "#002633",
                    data: [0, 0, 0, 0, 3.5, 21]
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: 'FY21 H1 On-demand Hours'
            },
            legend: {
                display: true,
                position: 'bottom',
                boxWidth: 200,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            },
            scales: {
                xAxes: [{
                    barPercentage: 2.5,
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0)",

                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0)",

                    },
                }]

            },
        }
    });

    var acv = document.getElementById('acv');
    new Chart(acv, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
            51.1,
            14.1,
            8.7,
            7.05,
            4.8,
            0.08

        ],
                backgroundColor: [
            "#006F99",
            "#DE234C",
            "#86152E",
            "#05B7FF",
            "#4D4D4D",
            "#002633",

        ],
    }, {
                data: [
            44,
            16,
            2.9,
            3.5,
            3.8,
            0.1
        ],
                backgroundColor: [
            "#006F99",
            "#DE234C",
            "#86152E",
            "#05B7FF",
            "#4D4D4D",
            "#002633",

        ],
    }],
            labels: [
        "AMER",
        "EMEA",
        "UKI",
        "INDIA",
        "ASIA",
        "ANZ"
    ]
        },
        options: {
            title: {
                display: false,
                text: 'ACV Influenced in millions'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            },
        }
    });

}
charts();
});
