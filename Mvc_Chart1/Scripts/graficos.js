$(function () {
    var myNewChart;
    var geral = "/Home/GraficoGeral";
    $.ajax({
        type: "GET",
        url: geral,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (mems) {
            var aData = mems;
            var aLabels = aData[0];
            var aDatasets1 = aData[1];
            var aDatasets2 = aData[2];
            var dataT = {
                labels: aLabels,
                datasets: [{
                    label: "Sucesso",
                    data: aDatasets1,
                    fill: false,
                    backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                    borderColor: ["rgb(0, 255, 0, 0.5)"],
                    borderWidth: 4
                }, {
                    label: "Falha",
                    data: aDatasets2,
                    fill: false,
                    backgroundColor: ["rgba(255, 0, 0, 0.5"],
                    borderColor: ["rgb(255, 0, 0, 0.5"],
                    borderWidth: 4
                }]
            };
            var ctx = $("#mChart1").get(0).getContext("2d");
            myNewChart = new Chart(ctx, {
                type: 'line',
                data: dataT,
                options: {
                    responsive: true,
                    title: { display: true, text: 'Relatórios' },
                    legend: { position: 'bottom' },
                    scales: {
                        xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                        yAxes: [{
                            gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                            ticks: { stepSize: 10, beginAtZero: true }
                        }]
                    },
                }
            });
        }
    });


    $("#Drop").change(function () {
        if (this.value == "Geral") {
            $.ajax({
                type: "GET",
                url: geral,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (mems) {
                    var aData = mems;
                    var aLabels = aData[0];
                    var aDatasets1 = aData[1];
                    var aDatasets2 = aData[2];
                    var dataT = {
                        labels: aLabels,
                        datasets: [{
                            label: "Sucesso",
                            data: aDatasets1,
                            fill: false,
                            backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                            borderColor: ["rgb(0, 255, 0, 0.5)"],
                            borderWidth: 4
                        }, {
                            label: "Falha",
                            data: aDatasets2,
                            fill: false,
                            backgroundColor: ["rgba(255, 0, 0, 0.5"],
                            borderColor: ["rgb(255, 0, 0, 0.5"],
                            borderWidth: 4
                        }]
                    };
                    var ctx = $("#mChart1").get(0).getContext("2d");
                    myNewChart.destroy();
                    myNewChart = new Chart(ctx, {
                        type: 'line',
                        data: dataT,
                        options: {
                            responsive: true,
                            title: { display: true, text: 'Relatórios' },
                            legend: { position: 'bottom' },
                            scales: {
                                xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                                yAxes: [{
                                    gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                                    ticks: { stepSize: 10, beginAtZero: true }
                                }]
                            },
                        }
                    });
                    console.log(myNewChart);
                }
            });
        }
        else if (this.value == "Dese") {
            console.log(myNewChart);
            $.ajax({
                type: "GET",
                url: "/Home/Dese",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (mems) {
                    var aData = mems;
                    var aLabels = aData[0];
                    var aDatasets1 = aData[1];
                    var aDatasets2 = aData[2];
                    var dataT = {
                        labels: aLabels,
                        datasets: [{
                            label: "Sucesso",
                            data: aDatasets1,
                            fill: false,
                            backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                            borderColor: ["rgb(0, 255, 0, 0.5)"],
                            borderWidth: 4
                        }, {
                            label: "Falha",
                            data: aDatasets2,
                            fill: false,
                            backgroundColor: ["rgba(255, 0, 0, 0.5"],
                            borderColor: ["rgb(255, 0, 0, 0.5"],
                            borderWidth: 4
                        }]
                    };
                    var ctx = $("#mChart1").get(0).getContext("2d");
                    myNewChart.destroy();
                    myNewChart = new Chart(ctx, {
                        type: 'line',
                        data: dataT,
                        options: {
                            responsive: true,
                            title: { display: true, text: 'Relatórios' },
                            legend: { position: 'bottom' },
                            scales: {
                                xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                                yAxes: [{
                                    gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                                    ticks: { stepSize: 10, beginAtZero: true }
                                }]
                            },
                        }
                    });
                }
            });
        }
        else if (this.value == "QA") {
            $.ajax({
                type: "GET",
                url: "/Home/QA",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (mems) {
                    var aData = mems;
                    var aLabels = aData[0];
                    var aDatasets1 = aData[1];
                    var aDatasets2 = aData[2];
                    var dataT = {
                        labels: aLabels,
                        datasets: [{
                            label: "Sucesso",
                            data: aDatasets1,
                            fill: false,
                            backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                            borderColor: ["rgb(0, 255, 0, 0.5)"],
                            borderWidth: 4
                        }, {
                            label: "Falha",
                            data: aDatasets2,
                            fill: false,
                            backgroundColor: ["rgba(255, 0, 0, 0.5"],
                            borderColor: ["rgb(255, 0, 0, 0.5"],
                            borderWidth: 4
                        }]
                    };
                    var ctx = $("#mChart1").get(0).getContext("2d");
                    myNewChart = new Chart(ctx, {
                        type: 'line',
                        data: dataT,
                        options: {
                            responsive: true,
                            title: { display: true, text: 'Relatórios' },
                            legend: { position: 'bottom' },
                            scales: {
                                xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                                yAxes: [{
                                    gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                                    ticks: { stepSize: 10, beginAtZero: true }
                                }]
                            },
                        }
                    });
                }
            });
        }
        else if (this.value == "PreProd") {
            $.ajax({
                type: "GET",
                url: "/Home/PreProd",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (mems) {
                    var aData = mems;
                    var aLabels = aData[0];
                    var aDatasets1 = aData[1];
                    var aDatasets2 = aData[2];
                    var dataT = {
                        labels: aLabels,
                        datasets: [{
                            label: "Sucesso",
                            data: aDatasets1,
                            fill: false,
                            backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                            borderColor: ["rgb(0, 255, 0, 0.5)"],
                            borderWidth: 4
                        }, {
                            label: "Falha",
                            data: aDatasets2,
                            fill: false,
                            backgroundColor: ["rgba(255, 0, 0, 0.5"],
                            borderColor: ["rgb(255, 0, 0, 0.5"],
                            borderWidth: 4
                        }]
                    };
                    var ctx = $("#mChart1").get(0).getContext("2d");
                    myNewChart.destroy();
                    myNewChart = new Chart(ctx, {
                        type: 'line',
                        data: dataT,
                        options: {
                            responsive: true,
                            title: { display: true, text: 'Relatórios' },
                            legend: { position: 'bottom' },
                            scales: {
                                xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                                yAxes: [{
                                    gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                                    ticks: { stepSize: 10, beginAtZero: true }
                                }]
                            },
                        }
                    });
                }
            });
        }
        else if (this.value == "Producao") {
            $.ajax({
                type: "GET",
                url: "/Home/Producao",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (mems) {
                    var aData = mems;
                    var aLabels = aData[0];
                    var aDatasets1 = aData[1];
                    var aDatasets2 = aData[2];
                    var dataT = {
                        labels: aLabels,
                        datasets: [{
                            label: "Sucesso",
                            data: aDatasets1,
                            fill: false,
                            backgroundColor: ["rgba(0, 255, 0, 0.5)"],
                            borderColor: ["rgb(0, 255, 0, 0.5)"],
                            borderWidth: 4
                        }, {
                            label: "Falha",
                            data: aDatasets2,
                            fill: false,
                            backgroundColor: ["rgba(255, 0, 0, 0.5"],
                            borderColor: ["rgb(255, 0, 0, 0.5"],
                            borderWidth: 4
                        }]
                    };
                    var ctx = $("#mChart1").get(0).getContext("2d");
                    myNewChart.destroy();
                    myNewChart = new Chart(ctx, {
                        type: 'line',
                        data: dataT,
                        options: {
                            responsive: true,
                            title: { display: true, text: 'Relatórios' },
                            legend: { position: 'bottom' },
                            scales: {
                                xAxes: [{ gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' } }],
                                yAxes: [{
                                    gridLines: { display: false }, display: true, scaleLabel: { display: false, labelString: '' },
                                    ticks: { stepSize: 10, beginAtZero: true }
                                }]
                            },
                        }
                    });
                }
            });
        } else {

        }
    })
});
