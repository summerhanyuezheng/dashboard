import * as React from "react"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded"
import { useNavigate } from "react-router-dom"

export default function DashNestedList({ open }) {
  const [openList, setOpenList] = React.useState(false)
  //add navigate for ecommerce page
  const navigate = useNavigate()

  const handleClick = () => {
    setOpenList(!openList)
  }

  //naviagte handler
  const handleNavigation = (path) => {
    navigate(path)
  }

  // Modified navigate handler to open in a new tab
  // const handleNavigation = (path) => {
  //   window.open(path, '_blank')
  // }


  

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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HomeOutlinedIcon sx={{ fontSize: "30px", color: "#32475c99" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Dashboard" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>

      <Collapse in={openList && open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} onClick={()=>handleNavigation('/home')}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="Analytics" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={()=>handleNavigation('/ecommerce')}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="eCommerce" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <FiberManualRecordRoundedIcon sx={{ fontSize: "10px", color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText primary="CRM" sx={{ marginLeft: "-22px" }} />
          </ListItemButton>
          
        </List>
      </Collapse>
    </List>
  )
}
