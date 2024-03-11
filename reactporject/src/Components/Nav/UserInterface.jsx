import React from "react"

import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined"
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined"
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined"
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined"
import "./Popular.css"

export default function UserInterface() {
  return (
    <>
      <span style={{ color: "#32475c61", fontSize: "12px" }}>USER INTERFACE</span>
      <div className="list-popular">
        <div className="each-item-popular">
          <FontDownloadOutlinedIcon className="icon-size-popular"></FontDownloadOutlinedIcon>
          <span>Typography</span>
        </div>
        <div className="each-item-popular">
          <TableChartOutlinedIcon className="icon-size-popular"></TableChartOutlinedIcon>
          <span>Tabs</span>
        </div>
        <div className="each-item-popular">
          <RadioButtonCheckedOutlinedIcon className="icon-size-popular"></RadioButtonCheckedOutlinedIcon>
          <span>Buttons</span>
        </div>
        <div className="each-item-popular">
          <ViewDayOutlinedIcon className="icon-size-popular"></ViewDayOutlinedIcon>
          <span>Advanced Cards</span>
        </div>
      </div>
    </>
  )
}
