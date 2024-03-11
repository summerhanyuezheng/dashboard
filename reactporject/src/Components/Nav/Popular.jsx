import React from "react"

import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import "./Popular.css"

export default function Popular() {
  return (
    <>
      <span style={{ color: "#32475c61", fontSize: "12px" }}>POPULAR SEARCHES</span>
      <div className="list-popular">
        <div className="each-item-popular">
          <span>
            <AnalyticsOutlinedIcon className="icon-size-popular"></AnalyticsOutlinedIcon>
          </span>

          <span>Analytics</span>
        </div>
        <div className="each-item-popular">
          <span>
            <AccountCircleOutlinedIcon className="icon-size-popular"></AccountCircleOutlinedIcon>
          </span>

          <span>CRM</span>
        </div>
        <div className="each-item-popular">
          <span>
            <ShoppingBagOutlinedIcon className="icon-size-popular"></ShoppingBagOutlinedIcon>
          </span>

          <span>eCommerce</span>
        </div>
        <div className="each-item-popular">
          <span>
            <PeopleAltOutlinedIcon className="icon-size-popular"></PeopleAltOutlinedIcon>
          </span>
          <span>User List</span>
        </div>
      </div>
    </>
  )
}
