import React from "react"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined"
import ViewArrayOutlinedIcon from "@mui/icons-material/ViewArrayOutlined"
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined"
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

// Define an array with objects containing both the text and the corresponding icon component
const menuItems = [
  { text: "Form Layouts", Icon: ListOutlinedIcon },
  { text: "Form Validation", Icon: ChecklistOutlinedIcon },
  { text: "Form Wizard", Icon: ViewArrayOutlinedIcon },
  { text: "Table", Icon: ViewColumnOutlinedIcon },
  { text: "Mui DataGrid", Icon: ViewModuleOutlinedIcon }
]

export default function FormTable({ open }) {
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "#32475c99"
              }}
            >
              {/* Instantiate the icon component */}
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ display: open ? "block" : "none", color: "#32475c99", marginLeft: "-12px" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
