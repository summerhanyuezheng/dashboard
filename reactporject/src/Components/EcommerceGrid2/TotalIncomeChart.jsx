import React, { useState } from "react";
import { Line } from "react-chartjs-2";

export default function TotalIncomeChart() {
  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          3200, 3200, 4000, 4000, 3000, 3000, 1800, 1800, 3700, 3700, 5700,
          5700,
        ],
        borderColor: "rgba(105, 108, 255,1)",
        backgroundColor: "rgba(105, 108, 255, 0.2)",
        fill: true,
        borderWidth: 3,
        tension: 0, // Adjust the line curve,0 is sharp turn
        pointRadius: 1, // Hide points
        pointHoverRadius: 5, // Point radius on hover
      },
    ],
  });

  const [chartOptions, setChartDataOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例

    borderRadius: 5,

    plugins: {
      tooltip: {
        enabled: true, // Disable tooltips
      },
      legend: {
        display: false, // Hide legend
      },
    },
    layout: {
      padding: {
        top: 10,
      },
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
            beginAtZero: false,
            min: 1000,
            max: 6000,
            ticks: {
              stepSize: 1000,
              color: "#32475c99", // y-axis label color
              callback: function (value) {
                return `$${value / 1000}k`;
              },
            },
            grid: {
              display: true, //移除x轴线条
              drawBorder: false,
              zeroLineColor: "transparent"
            }
          },
 } });

  return (
    <>
      <Line data={chartData} options={chartOptions} />
    </>
  );
}
