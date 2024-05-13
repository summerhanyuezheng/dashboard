import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

export default function ExpenseChart() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [72, 28], // 72% filled, 28% remaining
        backgroundColor: ["#4b73ff", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  });

  const [chartOptions, setChartDataOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //调节整个表格比例
    rotation: -90, // Start angle for the chart
    circumference: 180, // Draw only half of the doughnut
    cutout: "85%", // Adjust the cutout percentage,粗细
    borderRadius: 5,
    
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
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
  });

  return (
    <>
      <Doughnut data={chartData} options={chartOptions} />
    </>
  );
}
