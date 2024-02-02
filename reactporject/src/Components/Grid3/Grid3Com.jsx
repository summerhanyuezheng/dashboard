import React, { useState } from "react"
import "./Grid3Com.css"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import DonutChart from "./DonutChart"

export default function Grid3Com() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="whole-grid3">
      <div className="grid3-left grid-style ">
        <div className="order-section">
          <div className="text">
            <h3 className="dark-grey-title" style={{ marginBottom: "10px", marginTop: "0px" }}>
              Order Statistics
            </h3>
            <h5 className="light-grey-subtitle">42.82k Total Sales</h5>
          </div>
          {/* meun drop down这里开始 */}

          <div className="grid3-position-ui-menu">
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
        <div className="total-order">
          <div style={{ marginRight: "100px" }}>
            <span style={{ fontSize: "32px", color: "#32475cde" }}>8,258</span>
            <br />
            <span className="light-grey-subtitle">Total orders</span>
          </div>
          {/* -------Doughnut chart------- */}

          <DonutChart></DonutChart>
        </div>
        <div className="order-datalist"> </div>
      </div>
      <div className="grid3-middle grid-style ">2</div>
      <div className="grid3-right grid-style ">3</div>
    </div>
  )
}
