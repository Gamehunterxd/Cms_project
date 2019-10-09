$(document).ready(function () {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['måned', 'profit', 'Expenses'],
            ['August',  65842,      32541],
            ['September',  64567,      33145],
            ['Oktober',  55214,       33254],
            ['November',  77512,      34251]
        ]);

        var options = {
            title: 'Indkomst og udgifter',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('differential'));

        chart.draw(data, options);
    }
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
            ['måned', 'salg'],
            ["August", 21523],
            ["September", 21643],
            ["Oktober", 19251],
            ["November", 23125]
            ]);

        var options = {
            chart: {
                title: 'Salg',
                subtitle: 'fra august til november' },
            axes: {
                x: {
                    0: { side: 'top', label: 'salg'}
                }
            },
            bar: { groupWidth: "100%" }
        };
        var chart = new google.charts.Bar(document.getElementById('sales'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
});
