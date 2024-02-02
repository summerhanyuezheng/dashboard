import React, { useState } from "react"
import { Doughnut } from "react-chartjs-2"

export default function DonutChart() {
  const [hoveredSegment, setHoveredSegment] = useState(null)

  const [DonutChartData, setDonutChartData] = useState({
    labels: ["Fashion", "Electronic", "Sport", "Decor"],

    datasets: [
      {
        data: [45, 80, 20, 40],
        backgroundColor: [
          "rgb(113, 221, 55)", //green
          "rgb(105, 108, 255)", //purple
          "rgb(133, 146, 163)", //grey
          "rgb(3,195,236)" //blue
        ]
      }
    ]
  })
  //----------------Doughnut chart---------------
  const [DonutchartOptions, setDonutChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5, //调节整个表格比例
    barPercentage: 0.1,
    cutout: "80%", //bar 粗细
    spacing: 3 //bar之间的间隙大小
  })
  return (
    <div>
      <Doughnut data={DonutChartData} options={DonutchartOptions} />
    </div>
  )
}
