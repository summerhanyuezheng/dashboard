import React, { useState } from "react"
import "./Grid1Com.css"

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function PositionedMeun() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
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
  )
}

{
  /* meun drop down这里开始 */
}
