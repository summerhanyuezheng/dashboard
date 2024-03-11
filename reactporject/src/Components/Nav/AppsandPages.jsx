import React from "react"

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import "./Popular.css"

export default function AppsandPages() {
  return (
    <>
      <span style={{ color: "#32475c61", fontSize: "12px" }}>APPS & PAGES</span>
      <div className="list-popular">
        <div className="each-item-popular">
          <DateRangeOutlinedIcon className="icon-size-popular"></DateRangeOutlinedIcon>
          <span>Calendar</span>
        </div>
        <div className="each-item-popular">
          <DescriptionOutlinedIcon className="icon-size-popular"></DescriptionOutlinedIcon>
          <span>Invoice List</span>
        </div>
        <div className="each-item-popular">
          <MonetizationOnOutlinedIcon className="icon-size-popular"></MonetizationOnOutlinedIcon>
          <span>Pricing</span>
        </div>
        <div className="each-item-popular">
          <SettingsOutlinedIcon className="icon-size-popular"></SettingsOutlinedIcon>
          <span>Account Settings</span>
        </div>
      </div>
    </>
  )
}
