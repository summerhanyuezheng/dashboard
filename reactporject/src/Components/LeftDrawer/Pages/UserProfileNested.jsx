import * as React from "react"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import UploadFileIcon from "@mui/icons-material/UploadFile"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"

export default function UserProfileNested({ open }) {
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
          <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99", pl: "7px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="User Profile" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>
      <Collapse in={open && openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Teams" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Projects" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Connections" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
