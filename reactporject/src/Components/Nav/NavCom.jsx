import React, { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import "./NavCom.css"
import searchIcon from "./searchBar.png"
import languageIcon from "./language.png"
import moonIcon from "./moon.png"
import settingIcon from "./setting.png"
import alarmIcon from "./alarm.png"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import { IconButton } from "@mui/material"

import ModalEffect from "./ModalEffect"
import ProfileIcon from "./ProfileIcon"
import ProfileDropDown from "./ProfileDropDown"

export default function NavCom() {
  //profileICon dropdown的页面跳转：
  const navigate = useNavigate()
  const location = useLocation()  // Initialize useLocation
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
  // State for modal
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const handleSearchModalOpen = () => setSearchModalOpen(true)
  const handleSearchModalClose = () => setSearchModalOpen(false)

  //profileIcon 点击drop down 的state 和function:

  const [profileDropDownOpen, setProfileDropDownOpen] = useState(false)
  const [profileDropDownAnchorEl, setProfileDropDownAnchorEl] = useState(null)

  // Function to handle opening the profile dropdown
  const handleProfileDropDownOpen = event => {
    setProfileDropDownAnchorEl(event.currentTarget)
    setProfileDropDownOpen(true)
  }

  // Function to handle closing the profile dropdown
  const handleProfileDropDownClose = () => {
    setProfileDropDownOpen(false)
  }


  // Determine the width based on the current path
  const searchBarWidth = location.pathname === "/ecommerce" ? "1320px" : "1380px"

  return (
    <div className="searchBarWrapper" style={{ width: searchBarWidth }}>
      <img src={searchIcon} className="searchIcon" alt="Search" onClick={handleSearchModalOpen} /> <input className="searchBar" type="search" placeholder="          Search(Ctrl + /)" onClick={handleSearchModalOpen} />
      <img src={languageIcon} className="languageIcon" alt="Voice Search" />
      <img src={moonIcon} className="moonIcon" alt="Settings" />
      <img src={settingIcon} className="settingIcon" alt="Settings" />
      <img src={alarmIcon} className="alarmIcon" alt="Settings" />
      {/* <img src={profileIcon} className="profileIcon" alt="Profile" onClick={handleProfileMenuClick} /> */}
      <IconButton className="profileIcon" onClick={handleProfileDropDownOpen}>
        <ProfileIcon></ProfileIcon>
      </IconButton>
      {/* Profile dropdown menu materialUL 部分*/}
      <Menu
        id="profile-dropdown-menu"
        anchorEl={profileDropDownAnchorEl}
        open={profileDropDownOpen}
        onClose={handleProfileDropDownClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {/* 挂载dropdown */}
        <ProfileDropDown onLogout={handleLogout} />
      </Menu>
      {/*  left drawer MaterialUI part */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
      {/* 挂载modal */}
      {/* 
      const [searchModalOpen, setSearchModalOpen] = useState(false)
  const handleSearchModalOpen = () => setSearchModalOpen(true)
  const handleSearchModalClose = () => setSearchModalOpen(false) */}
      <ModalEffect open={searchModalOpen} handleClose={handleSearchModalClose} />
    </div>
  )
}
