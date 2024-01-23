import React from "react"
import "./Grid2Com.css"
import chart78 from "./78chart.jpg"
import Avatar from "@mui/material/Avatar"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import SnippetFolderOutlinedIcon from "@mui/icons-material/SnippetFolderOutlined"

export default function Grid2Com() {
  return (
    <div className="whole-grid2">
      <div className="left-grid2 grid-style">
        <div className="row2-left-chart">Chart width531px</div>
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
                  bgcolor: "#696cff29", // Use your custom color here
                  width: 38, // Set the width to 38px
                  height: 38 // Set the height to 38px
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
                  bgcolor: "#03c3ec29", // Use your custom color here
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
