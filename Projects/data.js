function draw() {
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
            datasets: [{
                data: [839,651,593,614,583,498,357,365,372,819,631],
                label: "Brooklyn",
                borderColor: "#9912b3",
                fill: false
            }, {
                data: [571,531,371,446,409,308,306,313,267,504,701],
                label: "Bronx",
                borderColor: "#f1a6ff",
                fill: false
            }, {
                data: [215,196,138,143,187,167,117,105,146,272,343],
                label: "Manhattan",
                borderColor: "#1200fe",
                fill: false
            }, {
                data: [264,290,185,218,205,191,144,150,156,303,296],
                label: "Queens",
                borderColor: "#127fb3",
                fill: false
            }, {
                data: [50,49,52,43,50,44,46,25,26,50,40],
                label: "Staten Island",
                borderColor: "#99deff",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'NYPD Shooting Incident Data'
            }
        }
    });
    //pie
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Brooklyn", "Bronx","Manhattan","Queens","Staten Island"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#9912b3", "#f1a6ff","#1200fe","#127fb3","#99deff"],
            data: [1171,904,343,480,97]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Resulting in Deaths 2011-2021'
          }
        }
    });
}