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
import UserProfileNested from "./UserProfileNested"
import MiscellaneousNested from "./MiscellaneousNested"
import AccountingSettingsNested from "./AccountingSettingsNested"

export default function PagesNestedList({ open }) {
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
          <UploadFileIcon sx={{ fontSize: "27px", color: "#32475c99", pl: "3px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Pages" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>
      {/* --------- nested userProfile */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <UserProfileNested open={open} />
      </Collapse>
      {/* --------- AccountSetting Nested  */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <AccountingSettingsNested open={open} />
      </Collapse>
      <Collapse in={open && openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="User Profile" sx={{ marginLeft: "-22px" }} />
          </ListItemButton> */}

          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="FAQ" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Help Center" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Pricing" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
        </List>
        {/* --------- Miscellaneous Nested */}
        <Collapse in={openList} timeout="auto" unmountOnExit>
          <MiscellaneousNested open={open} />
        </Collapse>
      </Collapse>
    </List>
  )
}
