import React, { useState } from "react"
import "./Grid2Com.css"
import chart78 from "./78chart.jpg"
import Avatar from "@mui/material/Avatar"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import SnippetFolderOutlinedIcon from "@mui/icons-material/SnippetFolderOutlined"

import "chart.js/auto"
import CircleIcon from "@mui/icons-material/Circle"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import TotalRevenueBarChart from "./TotalRevenueBarChart"
import RevenueBarChart from "./RevenueBarChart"
import ProfileLineChart from "./ProfileLineChart"

export default function Grid2Com() {
  //----------------右边盒子meun dropdown的state-------------------
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="whole-grid2">
      <div className="left-grid2 grid-style">
        <div className="row2-left-chart">
          <h3 className="total-Revenue-text">Total Revenue</h3>

          <div className="big-flex">
            <div className="dot-and-label-one">
              <CircleIcon sx={{ color: "#696cff", fontSize: "5px" }}></CircleIcon> <span style={{ color: "#32475c99", fontSize: "14px", marginLeft: "5px" }}>2023</span>
            </div>
            <div className="dot-and-label-two">
              <CircleIcon sx={{ color: "#35c6df", fontSize: "5px" }}></CircleIcon>

              <span style={{ color: "#32475c99", fontSize: "14px", marginLeft: "5px" }}>2022</span>
            </div>
          </div>

          <TotalRevenueBarChart></TotalRevenueBarChart>
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
          <div className="right-1 grid-style">
            <img src="https://greakproject.vercel.app/images/cards/stats-vertical-paypal.png" alt="" />
            <h3 className="grey-bold-sub">Payments</h3>
            <h1 className="cash-num">$2,468</h1>
            <h5 className="percent-num" style={{ color: "red" }}>
              ↓ 14.82%
            </h5>
            {/* meun drop down这里开始 */}

            <div className="grid1-position-ui-menu">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // {/* 这里改变button mouse over 时候阴影成透明 */}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent"
                  }
                }}
              >
                <MoreVertIcon
                  className="menu-icon-row1 "
                  // {/* 这里改变mouse over 时候阴影的形状成圆形 ，浅灰*/}
                  sx={{
                    "&:hover": {
                      borderRadius: "50%",
                      backgroundColor: "#32475c20"
                    }
                  }}
                />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                //对于meun,用paperpros去定制其他属性
                PaperProps={{
                  style: {
                    width: "98px" // Set your desired width
                  }
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "right",
                  horizontal: "center"
                }}
                //用‘meunlistpros‘ style 每一个meunlist
                MenuListProps={{
                  sx: {
                    ".MuiMenuItem-root": {
                      fontSize: "16px" // Set your desired font size for all items
                    }
                  }
                }}
              >
                <MenuItem onClick={handleClose}>Refresh</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Update</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="right-2 grid-style">
            <h3 className="grey-bold-sub" style={{ marginTop: "-5px" }}>
              Revenue
            </h3>
            <h1 className="cash-num" style={{ marginTop: "-5px" }}>
              425k
            </h1>
            <RevenueBarChart></RevenueBarChart>
          </div>
        </div>
        <div className="right-3 grid-style">
          <div className="profile-report-area">
            <h3 className="dark-grey-title">Profit Report</h3>
            <span className="year2024">YEAR 2024</span>
            <h5 className="percent-num">↑ 68.2%</h5>
            <span className="cash-num">$84.686k</span>
          </div>
          <div style={{ marginRight: "15px", height: "100px", width: "270px", marginTop: "30px" }}>
            <ProfileLineChart></ProfileLineChart>
          </div>
        </div>
      </div>
    </div>
  )
}
