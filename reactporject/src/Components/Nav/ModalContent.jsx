import React from "react"
import Popular from "./Popular"
import "./ModalContent.css"
import AppsandPages from "./AppsandPages"
import UserInterface from "./UserInterface"
import FormsandTables from "./FormsandTables"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import CloseIcon from "@mui/icons-material/Close"

export default function ModalContent({ handleClose }) {
  return (
    <>
      <div className="modal-search">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          {/* input base 负责search input */}
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          {/* 关闭窗口button */}
          <IconButton onClick={handleClose} sx={{ p: "10px" }} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
      </div>
      <div className="modal-list-row1">
        <div className="popular">
          <Popular></Popular>
        </div>
        <div className="apps-pages">
          <AppsandPages></AppsandPages>
        </div>
      </div>
      <div className="modal-list-row2">
        <div className="popular">
          <UserInterface></UserInterface>
        </div>
        <div className="apps-pages">
          <FormsandTables></FormsandTables>
        </div>
      </div>
    </>
  )
}
