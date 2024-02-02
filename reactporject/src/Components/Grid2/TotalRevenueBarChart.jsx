import React, { useState } from "react"
import { Bar } from "react-chartjs-2"

export default function TotalRevenueBarChart() {
  //-------------------第一个bar chart----------------------------
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        // label: "none",
        data: [18, 5, 12, 28, 18, 11, 8],
        backgroundColor: "#696cff"
      },
      {
        // label: "2022",
        data: [-15, -15, -9, -12, -3, -17, -14],
        backgroundColor: "#35c6df"
      }
    ]
  })
  //第一个chartJS
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例
    barThickness: 12,
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
    // title: {
    //   display: true,
    //   text: "Total Revenue",
    //   align: "start",
    //   padding: {
    //     top: 0,
    //     bottom: 5
    //   },
    //   color: "#32475cde",
    //   font: {
    //     size: 15,
    //     weight: "normal"
    //   }
    // }
    // },
    scales: {
      x: {
        stacked: true, //堆叠
        // reverse: true,
        ticks: {
          color: "#32475c99" //x轴下标颜色
        },
        grid: {
          display: false //移除y轴线条
        }
      },
      y: {
        max: 30, //y轴最大值
        min: -20, //y轴最小值
        ticks: {
          color: "#32475c99",
          stepSize: 10 //数值间隔
        }
        // grid: {
        //   drawBorder: false
        // }
      }
    }
  })
  return (
    <>
      <Bar className="total-revenue-chart" data={chartData} options={chartOptions} />
    </>
  )
}
