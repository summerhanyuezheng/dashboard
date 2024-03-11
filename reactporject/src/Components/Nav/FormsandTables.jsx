import React from "react"

import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined"
import AutofpsSelectOutlinedIcon from "@mui/icons-material/AutofpsSelectOutlined"
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined"
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined"
import "./Popular.css"

export default function FormsandTables() {
  return (
    <>
      <span style={{ color: "#32475c61", fontSize: "12px" }}>FORMS & TABLES</span>
      <div className="list-popular">
        <div className="each-item-popular">
          <GradingOutlinedIcon className="icon-size-popular"></GradingOutlinedIcon>
          <span>Select</span>
        </div>
        <div className="each-item-popular">
          <AutofpsSelectOutlinedIcon className="icon-size-popular"></AutofpsSelectOutlinedIcon>
          <span>Autocomplete</span>
        </div>
        <div className="each-item-popular">
          <TableViewOutlinedIcon className="icon-size-popular"></TableViewOutlinedIcon>
          <span>Table</span>
        </div>
        <div className="each-item-popular">
          <EditCalendarOutlinedIcon className="icon-size-popular"></EditCalendarOutlinedIcon>
          <span>Date Pickers</span>
        </div>
      </div>
    </>
  )
}
