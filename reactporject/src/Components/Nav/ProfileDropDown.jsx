import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined"
import MailOutlinedIcon from "@mui/icons-material/MailOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined"

export default function ProfileDropDown({ onLogout }) {
  return (
    <Box sx={{ width: "230px", left: "1590px" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2OutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Chat" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Pricing" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutlineOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="FAQ" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onLogout}>
            <ListItemIcon>
              <PowerSettingsNewOutlinedIcon sx={{ color: "#32475c99" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#32475c99", marginLeft: "-15px" }} primary="Sign Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
