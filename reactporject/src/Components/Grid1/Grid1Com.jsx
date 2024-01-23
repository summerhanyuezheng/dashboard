import React, { useState } from "react"
import "./Grid1Com.css"
import chartImage from "./276chart.jpg"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function HomeGridCom() {
  //右边盒子meun dropdown的state
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="whole-grid1">
      <div className="row1 ">
        <div className="row1-left grid-style">
          <div className="row1-left-texts">
            <h2>Congratulations John! 🎉</h2>
            <p>You have done 72% more sales today. Check your new badge in your profile.</p>
            <button>VIEW BADGES</button>
          </div>
          <div className="row1-left-img">
            <img src="https://greakproject.vercel.app/images/cards/illustration-john-light.png" alt="" />
          </div>
        </div>
        <div className="row1-right1 grid-style">
          <h3 className="grey-bold-sub">Order</h3>
          <h1 className="cash-num">276k</h1>
          <img src={chartImage} alt="Chart" />
        </div>
        <div className="row1-right2 grid-style">
          <img src="https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png" alt="" />
          <h3 className="grey-bold-sub">Sales</h3>
          <h1 className="cash-num">$4,679</h1>
          <h5 className="percent-num">↑ 28.14%</h5>
          {/* meun drop down这里开始 */}

          <div className="grid1-position-ui-menu">
            <Button id="demo-positioned-button" aria-controls={open ? "demo-positioned-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
              <MoreVertIcon className="menu-icon-row1 " />
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
      </div>
    </div>
  )
}
