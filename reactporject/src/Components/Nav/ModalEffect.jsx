import * as React from "react"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"

import ModalContent from "./ModalContent"

export default function ModalEffect({ open, handleClose }) {
  return (
    <div>
      <Modal
        // open and onClose 是materialUI 关键字
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal"
        aria-describedby="search-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(3px)" // Apply a blur effect to the background
        }}
      >
        <Box
          sx={{
            width: "600px",
            height: "530px",
            borderRadius: "5px",
            backgroundColor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none" // Remove the default focus outline
          }}
        >
          {/* 挂载modal content */}
          <ModalContent handleClose={handleClose}></ModalContent>
        </Box>
      </Modal>
    </div>
  )
}
