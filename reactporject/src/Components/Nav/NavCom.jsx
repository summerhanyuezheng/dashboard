import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./NavCom.css"
import searchIcon from "./searchBar.png"
import languageIcon from "./language.png"
import moonIcon from "./moon.png"
import settingIcon from "./setting.png"
import alarmIcon from "./alarm.png"
import profileIcon from "./profile.png"
import leftIcon from "./left.png"

import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/Inbox"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

export default function NavCom() {
  //profileICon dropdown的页面跳转：
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/login")
  }

  //左边drawer的state和function
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = open => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setDrawerOpen(open)
  }

  // 这里加入展开后现实的内容
  const list = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>{/* ... list items ... */}</List>
    </Box>
  )

  //profileIcon 点击drop down 的state 和function:
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null)
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl)
  const handleProfileMenuClick = event => {
    setProfileMenuAnchorEl(event.currentTarget)
  }
  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null)
  }

  return (
    <div className="searchBarWrapper">
      <img src={searchIcon} className="   searchIcon" alt="Search" />
      <input className="searchBar" type="search" placeholder="           Search(Ctrl + /)" />
      <img src={languageIcon} className="languageIcon" alt="Voice Search" />
      <img src={moonIcon} className="moonIcon" alt="Settings" />
      <img src={settingIcon} className="settingIcon" alt="Settings" />
      <img src={alarmIcon} className="alarmIcon" alt="Settings" />
      <img src={profileIcon} className="profileIcon" alt="Profile" onClick={handleProfileMenuClick} />

      {/* Profile dropdown menu materialUL 部分*/}
      <Menu
        id="profile-menu"
        anchorEl={profileMenuAnchorEl}
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleProfileMenuClose()
            handleLogout()
          }}
        >
          Logout
        </MenuItem>
      </Menu>

      {/*  left drawer MaterialUI part */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  )
}
