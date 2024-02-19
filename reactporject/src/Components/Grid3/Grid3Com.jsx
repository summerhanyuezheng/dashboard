import React, { useState } from "react"
import "./Grid3Com.css"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import EChart from "./EChart"
import Avatar from "@mui/material/Avatar"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined"
import LabTabs from "./LabTabs"

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
      {/* --------------左边的的grid------------- */}
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

          <EChart></EChart>
        </div>

        <div className="order-datalist">
          <div className="each-order-datalist">
            <Avatar
              sx={{
                bgcolor: "#696cff29",
                width: 38,
                height: 38
              }}
              variant="rounded"
            >
              <PhoneAndroidOutlinedIcon
                sx={{
                  color: "#696cff",
                  width: 22,
                  height: 22
                }}
              />
            </Avatar>
            <div className="category-description">
              <h4>Electronic</h4>
              <h5>Mobile, Earbuds,TV</h5>
            </div>
            <span>82.5k</span>
          </div>
          <div className="each-order-datalist">
            <Avatar
              sx={{
                bgcolor: "rgba(113, 221, 55, 0.16)",
                width: 38,
                height: 38
              }}
              variant="rounded"
            >
              <CheckroomOutlinedIcon
                sx={{
                  color: "rgb(113, 221, 55)",
                  width: 22,
                  height: 22
                }}
              />
            </Avatar>
            <div className="category-description">
              <h4>Fashion</h4>
              <h5>Tshirt, Jeans, Shoes</h5>
            </div>
            <span>23.8k</span>
          </div>
          <div className="each-order-datalist">
            <Avatar
              sx={{
                bgcolor: "rgb(3, 195, 236,0.16)",
                width: 38,
                height: 38
              }}
              variant="rounded"
            >
              <HomeOutlinedIcon
                sx={{
                  color: "rgb(3, 195, 236)",
                  width: 22,
                  height: 22
                }}
              />
            </Avatar>
            <div className="category-description" style={{ marginLeft: "-155px" }}>
              <h4>Decor</h4>
              <h5>Fine Art, Dining</h5>
            </div>
            <span>849</span>
          </div>
          <div className="each-order-datalist">
            <Avatar
              sx={{
                bgcolor: "rgb(133, 146, 163,0.16)",
                width: 38,
                height: 38
              }}
              variant="rounded"
            >
              <SportsSoccerOutlinedIcon
                sx={{
                  color: "rgb(133, 146, 163)",
                  width: 22,
                  height: 22
                }}
              />
            </Avatar>
            <div className="category-description" style={{ marginLeft: "-145px" }}>
              <h4>Sports</h4>
              <h5>Football, Cricket Kit</h5>
            </div>
            <span>99</span>
          </div>
        </div>
      </div>

      {/* --------------中间的的grid------------- */}
      <div className="grid3-middle grid-style ">
        {/* 挂载tab */}
        <LabTabs></LabTabs>
      </div>

      {/* --------------最右边的grid------------- */}
      <div className="grid3-right grid-style ">
        <div className="grid3-trans-top">
          <h4>Transactions</h4>
          <div className="grid3-position-ui-menu2">
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
        <div className="trans-datalist">
          <div className="each-trans-datalist">
            <img className="trans-img" src="	https://greakproject.vercel.app/images/cards/paypal.png" alt="" />
            <div className="trans-category-description">
              <h5>Paypal</h5>
              <h4>Send money</h4>
            </div>
            <div className="num-usd">
              <span className="trans-num">+82.6</span>
              <span className="trans-usd">USD</span>
            </div>
          </div>
          <div className="each-trans-datalist">
            <img className="trans-img" src="https://greakproject.vercel.app/images/cards/wallet.png" alt="" />
            <div className="trans-category-description">
              <h5>Wallet</h5>
              <h4>Mac'D</h4>
            </div>
            <div className="num-usd">
              <span className="trans-num">+270.69</span>
              <span className="trans-usd">USD</span>
            </div>
          </div>
          <div className="each-trans-datalist">
            <img className="trans-img" src="https://greakproject.vercel.app/images/cards/chart.png" alt="" />
            <div className="trans-category-description">
              <h5>Transfer</h5>
              <h4>Refund</h4>
            </div>
            <div className="num-usd">
              <span className="trans-num">+637.91</span>
              <span className="trans-usd">USD</span>
            </div>
          </div>

          <div className="each-trans-datalist">
            <img className="trans-img" src="https://greakproject.vercel.app/images/cards/wallet.png" alt="" />
            <div className="trans-category-description">
              <h5>Wallet</h5>
              <h4>Starbucks</h4>
            </div>
            <div className="num-usd">
              <span className="trans-num">+203.33</span>
              <span className="trans-usd">USD</span>
            </div>
          </div>
          <div className="each-trans-datalist">
            <img className="trans-img" src="	https://greakproject.vercel.app/images/cards/atm-card.png" alt="" />
            <div className="trans-category-description">
              <h5>Mastercard</h5>
              <h4>Ordered Food</h4>
            </div>
            <div className="num-usd">
              <span className="trans-num">-92.45</span>
              <span className="trans-usd">USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
