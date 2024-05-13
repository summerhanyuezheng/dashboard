import React, { useState } from "react"
import { Bar } from "react-chartjs-2"

export default function ProfitChart() {


  const [chartData2, setChartData2] = useState({
    labels: ['Jan', 'Apr', 'Jul', 'Oct'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 15, 20, 25],
            backgroundColor: 'rgba(102, 204, 0, 0.9)',
           
            borderWidth: 0
        },
        {
            label: 'Dataset 2',
            data: [8, 10, 15, 20],
            backgroundColor: 'rgba(153, 255, 51, 0.6)',
            
            borderWidth:0
        }
    ]
  })

  const [chartOptions2, setChartOptions2] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例
    // barThickness: 15,
    borderRadius: 5,
    barPercentage: 0.6, 
    categoryPercentage: 0.6, 

    layout: {
      padding: {
        top: 0,
        right: 10,
        bottom: 0, // Increase the bottom padding
        left: 0
      }
    },
    plugins: {
      legend: {
        //legend 是关于labels 的修改
        display: false
      }
    },

    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#32475c99" ,//x轴下标颜色
          

        },
        grid: {
          display: false, //移除y轴线条
          drawBorder: false, //移除
          zeroLineColor: "transparent"
        }
      },
      y: {
        //ticks 是轴方向的数值/文字显示
        beginAtZero: true,
        ticks: {
          color: "#32475c99",
          display: false,
        },
        grid: {
          display: false, //移除x轴线条
          drawBorder: false,
          zeroLineColor: "transparent"
        }
      }
    }
  })
  return (
    <>
      <Bar data={chartData2} options={chartOptions2} />
    </>
  )
}
