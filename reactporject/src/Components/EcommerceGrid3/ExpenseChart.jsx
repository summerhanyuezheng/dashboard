import React, { useState } from "react"
import { Bar } from "react-chartjs-2"

export default function ExpenseChart() {
  //-------------------第一个bar chart----------------------------
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July",'Aug','sep','oct'],
    datasets: [
      {
        // label: "none",
        data: [18, 5, 12, 28, 18, 11, 8,10,9,7],
        backgroundColor: "#696cff"
      },
      {
        // label: "2022",
        data: [-15, -15, -9, -12, -3, -17, -14,-9,-10,-12],
        backgroundColor: "rgb(255, 171, 0)"
      }
    ]
  })
  //第一个chartJS
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例
    barThickness: 6,
    borderRadius: 10,
    

    layout: {
      padding: {
        top: 0,
        right: 10,
        // bottom: 160, // Increase the bottom padding
        left: 0
      }
    },
    plugins: {
      legend: {
        //legend 是关于labels 的修改
        display: false
        // position: "top",
        // align: "start",

        // labels: {
        //   usePointStyle: true,
        //   boxHeight: 6 //小圆点的大小
        // }
      }
    },
   
    scales: {
      x: {
        stacked: true, //堆叠
        // reverse: true,
        ticks: {
         display:false,
        },
        grid: {
          display: false //移除y轴线条
        },
        
        
      },
      y: {
        max: 30, //y轴最大值
        min: -20, //y轴最小值
        ticks: {
          display:false,
          stepSize: 10 //数值间隔
        },
        grid: {
          display:false,
        }
      }
    }
  })
  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  )
}
