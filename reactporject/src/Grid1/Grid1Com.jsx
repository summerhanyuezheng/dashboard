import React, { useState } from "react"
import "./Grid1Com.css"
import chartImage from "./276chart.jpg"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Popover from "@mui/material/Popover"

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
    <div className="whole-grid">
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
          {/* The button that will be used to open the Popover */}
          <Button aria-controls={open ? "simple-popover" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
            <MoreVertIcon className="menu-icon-row1 " />
          </Button>

          {/* The Popover component */}
          <Popover
            id="simple-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 160, left: 1500 }}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center"
            }}
          >
            {/* The content inside the Popover */}
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Popover>
        </div>
      </div>
    </div>
  )
}
