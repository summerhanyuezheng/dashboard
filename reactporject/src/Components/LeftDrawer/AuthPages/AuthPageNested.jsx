import * as React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import LogInNested from "./LogInNested"
import RegisterNested from "./RegisterNested"
import VerifyEmailNested from "./VerifyEmailNested"
import ForgotPassword from "./ForgotPasswordNested"
import ResetPasswordNested from "./ResetPasswordNested"
import TwoStepsNested from "./TwoStepsNested"

export default function AuthPageNested({ open }) {
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
          <LockOpenOutlinedIcon sx={{ fontSize: "27px", color: "#32475c99", pl: "3px" }} />
        </ListItemIcon>

        {open && <ListItemText primary="Auth Pages" sx={{ color: "#32475c99", marginLeft: "-15px" }} />}
        {open && (openList ? <ExpandLess sx={{ color: "#32475c99" }} /> : <ExpandMore sx={{ color: "#32475c99" }} />)}
      </ListItemButton>
      {/* --------- nested Login */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <LogInNested open={open}></LogInNested>
      </Collapse>
      {/* --------- nested Register */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <RegisterNested open={open}></RegisterNested>
      </Collapse>
      {/* --------- nested Verify Email */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <VerifyEmailNested open={open}></VerifyEmailNested>
      </Collapse>
      {/* --------- nested forgot password */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <ForgotPassword open={open}></ForgotPassword>
      </Collapse>

      {/* --------- nested reset password */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <ResetPasswordNested open={open}></ResetPasswordNested>
      </Collapse>

      {/* --------- nested reset password */}
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <TwoStepsNested open={open}></TwoStepsNested>
      </Collapse>
    </List>
  )
}
