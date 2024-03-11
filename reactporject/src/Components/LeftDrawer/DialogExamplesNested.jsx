import * as React from "react"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"

export default function DialogExamplesNested({ open }) {
  const [openList, setOpenList] = React.useState(false)

  const handleClick = () => {
    setOpenList(!openList)
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        "& .MuiListItemText-primary": {
          color: "#32475c99"
        }
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{ marginTop: "-10px" }} onClick={handleClick}>
        <ListItemIcon>
          <DriveFolderUploadOutlinedIcon sx={{ fontSize: "27px", color: "#32475c99", pl: "3px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Dialog Examples" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>
    </List>
  )
}
