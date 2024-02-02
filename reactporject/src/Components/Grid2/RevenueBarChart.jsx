import React, { useState } from "react"
import { Bar } from "react-chartjs-2"

export default function RevenueBarChart() {
  // -------------------第二个bar chart-----------------------

  const [chartData2, setChartData2] = useState({
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "none",
        data: [2, 8, 6, 3, 12, 5, 6],
        backgroundColor: ["#696cff29", "#696cff29", "#696cff29", "#696cff29", "#696cff", "#696cff29", "#696cff29"]
      }
    ]
  })
  //第二个chartJS
  const [chartOptions2, setChartOptions2] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例
    // barThickness: 15,
    borderRadius: 2,
    barPercentage: 0.8,
    // categoryPercentage: 1,

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
        ticks: {
          color: "#32475c99" //x轴下标颜色
        },
        grid: {
          display: false, //移除y轴线条
          drawBorder: false, //移除
          zeroLineColor: "transparent"
        }
      },
      y: {
        //ticks 是轴方向的数值/文字显示
        ticks: {
          color: "#32475c99",
          display: false
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
      <Bar className="revenue-chart" data={chartData2} options={chartOptions2} />
    </>
  )
}
