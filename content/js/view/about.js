Chart.defaults.global.hover.mode = 'nearest';
Chart.defaults.global.defaultFontFamily = 'Raleway';

// Attendance Details
var chartAttendance = new Chart($("canvas#attendance-chart"), { 
    type: 'line', 
    data: {
        labels: ["", "01", "02", "03", "04"],
        datasets: [
        {
            label: "Attendees",
            fill: false,
            lineTension: 0.1,         
            backgroundColor: "rgba(0,204,255,0.8)",
            borderColor: "rgba(0,204,255,0.4)",
            data: [0,43,155,73,129],
            spanGaps: false,
        },
        {
            label: "Jammers",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,102,0,0.8)",
            borderColor: "rgba(255,102,0,0.4)",
            data: [0,17, 80,60,71],
            spanGaps: false,
        },
        {
            label: "No Shows",
            fill: false,
            hidden: true,
            lineTension: 0.1,
            backgroundColor: "rgba(255,204,0,0.8)",
            borderColor: "rgba(255,204,0,0.4)",
            data: [0,5, 41,20, 16],
            spanGaps: false,
        },
        {
            label: "Registered",
            fill: false,
            hidden: true,
            lineTension: 0.1,
            backgroundColor: "rgba(102,102,102,0.8)",
            borderColor: "rgba(102,102,102,0.4)",
            data: [0,27, 163,84, 120],
            spanGaps: false,
        },
        {
            label: "Local",
            hidden: true,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(67,133,2,0.8)",
            borderColor: "rgba(67,133,2,0.4)",
            data: [0,40, 73,25,49],
            spanGaps: false,
        },
        
        ]
    }, 
    options: { 
        title: {
            display: true,
            text: 'ATTENDANCE',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'Raleway',
                    fontStyle: 'bold',
                    fontSize: 26
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true
    } 
});

// Games Made Chart
var chartGames = new Chart($("canvas#games-chart"), { 
    type: 'line', 
    data: {
        labels: ["", "01", "02", "03", "04"],
        datasets: [
        {
            label: "Total",
            fill: false,
            lineTension: 0.1,         
            backgroundColor: "rgba(0,204,255,0.8)",
            borderColor: "rgba(0,204,255,0.4)",
            data: [0,11, 33, 21, 20],
            spanGaps: false,
        },
        {
            label: "Solo",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,102,0,0.8)",
            borderColor: "rgba(255,102,0,0.4)",
            data: [0,8, 15, 12, 7],
            spanGaps: false,
        },
        {
            label: "Team",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,204,0,0.8)",
            borderColor: "rgba(255,204,0,0.4)",
            data: [0,3, 18,9, 13],
            spanGaps: false,
        }]
    }, 
    options: { 
        title: {
            display: true,
            text: 'GAMES MADE',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'Raleway',
                    fontStyle: 'bold',
                    fontSize: 26
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});

// Engine Usage Chart
var chartEngines = new Chart($("canvas#engine-chart"), { 
    type: 'pie', 
    data: {
        labels: ["Unity", "Unreal", "Game Maker", "Scratch", "Other"],
        datasets: [{
            data: [70, 1, 2, 3, 2],
            backgroundColor: [
                "#00bcd4",
                "#dda209",
                "#71b417",
                "#FF6600"
            ],
            hoverBackgroundColor: [
                "#00bcd4",
                "#dda209",
                "#71b417",
                "#FF6600"
            ]
        }]
    },
    options: { 
        title: {
            display: true,
            text: 'ENGINE USAGE (GAMES)',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});

// Funding Model
var chartFunding = new Chart($("canvas#funding-chart"), { 
    type: 'radar', 
    data: {
        labels: ["Municipal Grants", "Provincial Grants", "Federal Grants", "Local Sponsorship", "Industry Sponsorship"],
        datasets: [
            {
                label: "04",
                backgroundColor: "rgba(255, 102, 0,0.2)",
                borderColor: "rgba(255, 102, 0,1)",
                data: [0, 0, 11, 39, 61]
            },
            {
                hidden: true,
                label: "03",
                backgroundColor: "rgba(255,0,204,0.2)",
                borderColor: "rgba(255,0,204,1)",
                data: [0, 0, 5, 52, 43]
            },
             {
                hidden: true,
                label: "02",
                backgroundColor: "rgba(0,204,255,0.2)",
                borderColor: "rgba(0,204,255,1)",
                data: [0, 0, 2, 25, 73]
            },
             {
                hidden: true,
                label: "01",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                data: [0, 0, 0, 16, 84]
            }

        ]
    },
     options: { 
        title: {
            display: true,
            text: 'FUNDING MODEL (PERCENT)',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        scale: {
            ticks: {
                    fixedStepSize: 25
                }
        },
        defaultFontSize: '20',
        legend: {
            position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});

// Age Chart
var chartAge = new Chart($("canvas#age-chart"), { 
    type: 'doughnut', 
    data: {
        labels: [
            "0-14",
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40+",
        ],
        datasets: [
        {
            data: [8, 8, 35, 16,15,9,9],

            backgroundColor: [
                "rgba(0, 204, 255, .14)",
                "rgba(0, 204, 255, .28)",
                "rgba(0, 204, 255, .42)",
                "rgba(0, 204, 255, .57)",
                "rgba(0, 204, 255, .71)",
                "rgba(0, 204, 255, .85)",
                "rgba(0, 204, 255, 1)"
            ],
            hoverBackgroundColor: [
                "rgba(0, 204, 255, .14)",
                "rgba(0, 204, 255, .28)",
                "rgba(0, 204, 255, .42)",
                "rgba(0, 204, 255, .57)",
                "rgba(0, 204, 255, .71)",
                "rgba(0, 204, 255, .85)",
                "rgba(0, 204, 255, 1)"
            ]
        }]
    },
    options: { 
        title: {
            display: true,
            text: 'ATTENDEE AGE (PERCENT)',
            position: 'top',
            fontFamily: 'Raleway',
            fontStyle: 'bold',
            fontSize: 26
        },
        defaultFontSize: '20',
        legend: {
            position: 'right'
        },
        responsive: true,
        maintainAspectRatio: false
    } 
});