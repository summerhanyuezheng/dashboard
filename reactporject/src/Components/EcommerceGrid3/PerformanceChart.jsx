import React, { useState } from 'react'
import { Radar } from 'react-chartjs-2'

export default function PerformanceChart() {


    const[charData, setCharData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Income',
                data: [105, 79, 110, 70, 76, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'none',
                borderWidth: 0,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Earning',
                data: [80, 85, 90, 120, 96, 65],
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'none',
                borderWidth: 0,
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
            }
        ]

    })


    const [charOptions,setChartOptions] = useState({
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.15, //调节整个表格比例s
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {
                    display: false,  // This hides the tick labels
                    stepSize: 20
                }
            }
        },
        elements: {
            line: {
                borderWidth: 10
            }
        }

    })









  return (
    <> <Radar data={charData} options={charOptions} /></>
  )
}
