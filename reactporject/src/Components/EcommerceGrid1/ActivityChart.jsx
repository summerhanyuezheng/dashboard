import React, { useState } from "react"
import { Line } from "react-chartjs-2"

export default function ActivityChart() {
  //------------------第三个 line chart-----------------------
  const [chartData3, setChartData3] = useState({
    labels: ["M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [60, 70, 62, 66, 65, 75],
        fill: true,
        backgroundColor: "#8fdf8250", //fill color

        borderColor: "#8fdf82",
        tension: 0.3,
        pointRadius: 1, //移除了每个节点的空心点
        borderWidth: 3
      }
    ]
  })
  //第三个line chart
  const [chartOptions3, setChartOptions3] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.8,
    plugins: {
      legend: {
        //legend 是关于labels 的修改
        display: false
      }
    },

    scales: {
      x: {
        ticks: {
          color: "#32475c99", //x轴下标颜色
          display: true
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
      <Line data={chartData3} options={chartOptions3} />
    </>
  )
}
