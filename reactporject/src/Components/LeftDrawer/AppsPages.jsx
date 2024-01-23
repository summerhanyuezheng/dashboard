import React from "react"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

// Define an array with objects containing both the text and the corresponding icon component
const menuItems = [
  { text: "Email", Icon: EmailOutlinedIcon },
  { text: "Chat", Icon: ChatBubbleOutlineOutlinedIcon },
  { text: "Calendar", Icon: CalendarMonthOutlinedIcon }
]

export default function AppsPages({ open }) {
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
            <ListItemText primary={item.text} sx={{ display: open ? "block" : "none", color: "#32475c99" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
