import Chart from 'chart.js';
import './App.js';

// data: [{
//     x: "Jan 1 2020",
//     y: "8:20 AM"
// }, {
//     x: "Jan 1 2020",
//     y: "10:45 AM"
// }, {
//     x: "Jan 2 2020",
//     y: "5:00 PM"
// }]

let data = data [{
    x: "Jan 1 2020",
    y: "8:20 AM"
}, {
    x: "Jan 1 2020",
    y: "10:45 AM"
}, {
    x: "Jan 2 2020",
    y: "5:00 PM"
}]


let historyChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                stacked: true,
                type: 'time',
                time: {
                    displayFormats: {
                        day: 'MMM D YYYY' // Format example: Jan 1 2020
                    }
                }
            }],
            yAxes: [{
                stacked:true,
                time: {

                    displayFormats: {
                        minute: 'h:mm a' // Format example: 11:20 AM
                    }

                }
            }]


        }
    }
})


