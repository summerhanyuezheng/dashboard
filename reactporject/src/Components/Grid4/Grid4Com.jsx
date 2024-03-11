import React, { useState } from "react"
import "./Grid4Com.css"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import TimeLine from "./TimeLine"
import Grid4Tab from "./Grid4Tab"

export default function Grid4Com() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div className="whole-grid4">
        <div className="grid4-left grid-style">
          <div className="top-text-ui-meun">
            <h4>Transactions</h4>
            <div className="grid4-position-ui-menu">
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
                    width: "150px" // Set your desired width
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
                <MenuItem onClick={handleClose}>Share timeline</MenuItem>
                <MenuItem onClick={handleClose}>Suggest edits</MenuItem>
                <MenuItem onClick={handleClose}>Report bug</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="timeline-section">
            <TimeLine></TimeLine>
          </div>
        </div>
        <div className="grid4-right grid-style">
          <Grid4Tab></Grid4Tab>
        </div>
      </div>
    </>
  )
}
