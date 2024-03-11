import * as React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"

import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import "./LeftDrawerCom.css"
import DashNestedList from "./DashNestedList"
import AppsPages from "./AppsPages"
import InvoiceNestedList from "./InvoiceNestedList"
import UserNestedList from "./UserNestedList"
import RolesNestedList from "./RolesNestedList"
import logo from "./logo&name.jpg"
import PagesNestedList from "./Pages/PagesNestedList"

import AuthPageNested from "./AuthPages/AuthPageNested"
import WizardExamplesNested from "./WizardExamplesNested"
import DialogExamplesNested from "./DialogExamplesNested"
import UserInterface from "./UserInterface"
import CardsNestedList from "./Cards"
import ComponentsNestedList from "./Components"
import FormTable from "./FormTable"
import FormElement from "./FormElement"
import ChartsNestedList from "./Charts"
import OthersNestedList from "./Others"

const drawerWidth = 240

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
})

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}))

export default function LeftDrawerCom() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div>
            <img src={logo} alt="" style={{ width: "100px", marginLeft: "-220px", marginTop: "15px" }} />
          </div>
          {open ? (
            <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{ color: "#32475c99", marginTop: "10px" }} />}</IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 0,
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon sx={{ color: "#696cff", marginTop: "10px", marginLeft: "-35px", Color: "#696cff29" }} />
            </IconButton>
          )}
        </DrawerHeader>
        {/* ----------------这里加入nested list 组件------- */}
        <DashNestedList open={open}></DashNestedList>
        {/* ----------APPS & PAGES分隔符--------------- */}
        {/* 三目判断，当抽屉关闭时只显示分隔符 */}
        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              APPS & PAGES
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}

        <AppsPages open={open}></AppsPages>
        {/* ----------invoice nestedlist--------------- */}
        <InvoiceNestedList open={open}></InvoiceNestedList>

        {/* ----------user nestedlist--------------- */}
        <UserNestedList open={open}></UserNestedList>
        {/* ----------roles nestedlist--------------- */}
        <RolesNestedList open={open}></RolesNestedList>
        {/* ----------pages nestedlist--------------- */}
        <PagesNestedList open={open}></PagesNestedList>
        {/* ----------AuthPages nestedlist--------------- */}
        <AuthPageNested open={open}></AuthPageNested>
        {/* ----------Wizard Examples nestedlist--------------- */}
        <WizardExamplesNested open={open}></WizardExamplesNested>
        {/* ----------Wizard Examples nestedlist--------------- */}
        <DialogExamplesNested open={open}></DialogExamplesNested>

        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              USER INTERFACE
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}

        {/* 挂载UserInterface 没有连环套的部分 */}
        <UserInterface open={open}></UserInterface>
        {/* ----------Cards nestedlist--------------- */}
        <CardsNestedList open={open}></CardsNestedList>
        {/* ----------Components nestedlist--------------- */}
        <ComponentsNestedList open={open}></ComponentsNestedList>

        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              FORMS & TABLES
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}
        {/* <FormTable open={open}></FormTable> */}
        <FormElement open={open}></FormElement>
        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              CHARTS & MISC
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}
        {/* ----------Charts nestedlist--------------- */}
        <ChartsNestedList open={open}></ChartsNestedList>
      </Drawer>
    </Box>
  )
}
