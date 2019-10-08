$(document).ready(function () {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['måned', 'profit', 'Expenses'],
            ['August',  65842,      32541],
            ['Semptember',  64567,      33145],
            ['November',  55214,       33254],
            ['December',  77512,      34251]
        ]);

        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('differential'));

        chart.draw(data, options);
    }
});
