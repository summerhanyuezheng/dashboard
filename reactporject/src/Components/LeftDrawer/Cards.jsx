import * as React from "react"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"

export default function CardsNestedList({ open }) {
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
          <StyleOutlinedIcon sx={{ fontSize: "27px", color: "#32475c99", pl: "3px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Cards" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>

      <Collapse in={openList && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Basic" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Preview" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Advanced" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Statistics" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Widgets" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Actions" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Statistics" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
