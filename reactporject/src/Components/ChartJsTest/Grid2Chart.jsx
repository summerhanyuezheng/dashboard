import React, { useState } from "react"

import chart78 from "./78chart.jpg"
import Avatar from "@mui/material/Avatar"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import SnippetFolderOutlinedIcon from "@mui/icons-material/SnippetFolderOutlined"
import { Bar } from "react-chartjs-2"
import "chart.js/auto"

export default function Grid2Chart() {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "2023",
        data: [18, 5, 12, 28, 18, 11, 8],
        backgroundColor: "#696cff"
      },
      {
        label: "2022",
        data: [-15, -15, -9, -12, -3, -17, -14],
        backgroundColor: "#35c6df"
      }
    ]
  })

  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 12,
    borderRadius: 10,
    plugins: {
      legend: {
        //legend 是关于labels 的修改
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          boxHeight: 6 //小圆点的大小
        }
      },
      title: {
        display: true,
        text: "Total Revenue",
        align: "start",
        color: "#32475cde",
        font: {
          size: 15,
          weight: "normal"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#32475c99" //x轴下标颜色
        },
        grid: {
          display: false //移除y轴线条
        }
      },
      y: {
        ticks: {
          color: "#32475c99"
        }
      }
    }
  })
  return (
    <div className="whole-grid2">
      <div className="left-grid2 grid-style">
        <div className="row2-left-chart">
          <Bar className="total-revenue-chart" data={chartData} options={chartOptions} />
        </div>
        <div className="row2-left-right">
          <select id="year-select" class="row2-year-dropdown">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <img className="chart78" src={chart78} alt="chart78" />
          <h3 className="grey-bold-sub">62% Company Growth</h3>
          <div className="bottom-section">
            <div className="bs-l">
              <Avatar
                sx={{
                  bgcolor: "#696cff29",
                  width: 38,
                  height: 38
                }}
                variant="rounded"
              >
                <AttachMoneyOutlinedIcon
                  sx={{
                    color: "#696cff",
                    width: 22,
                    height: 22
                  }}
                />
              </Avatar>
              <div className="yn-flex">
                <span className="grey-year">2024</span>
                <span className="cash-num" style={{ fontSize: "16px" }}>
                  $32.5k
                </span>
              </div>
            </div>
            <div className="bs-r">
              <Avatar
                sx={{
                  bgcolor: "#03c3ec29",
                  width: 38, // Set the width to 38px
                  height: 38 // Set the height to 38px
                }}
                variant="rounded"
              >
                <SnippetFolderOutlinedIcon
                  sx={{
                    color: "#35c6df",
                    width: 22,
                    height: 22
                  }}
                />
              </Avatar>
              <div className="yn-flex">
                <span className="grey-year">2023</span>
                <span className="cash-num" style={{ fontSize: "16px" }}>
                  $32.5k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section-grid2 ">
        <div className="right-top-grid2">
          <div className="right-1 grid-style">1</div>
          <div className="right-2 grid-style">2</div>
        </div>
        <div className="right-3 grid-style">3</div>
      </div>
    </div>
  )
}
