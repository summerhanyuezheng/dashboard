import * as React from "react"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"

export default function ComponentsNestedList({ open }) {
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
          <GridViewOutlinedIcon sx={{ fontSize: "27px", color: "#32475c99", pl: "3px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Components" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>

      <Collapse in={openList && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Accordion" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Alerts" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Avatars" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Badges" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Buttons" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Button Group" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Chips" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Dialogs" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="List" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Meun" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Pagination" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Progress" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Ratings" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Snackbar" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Swiper" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Tabs" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Timeline" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Toasts" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Tree View" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="More" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Test" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
