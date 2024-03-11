import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import LinearColor from "./LinearColor"
import Typography from "@mui/material/Typography"
import "./Tab.css"

function createData(number, ImgUrl, visit, progress, fillColor, browserName) {
  return { number, ImgUrl, visit, progress, fillColor, browserName }
}

const rows = [createData(1, "https://greakproject.vercel.app/images/cards/windows.png", "475.26k", 61.5, "#71dd37", "Windows"), createData(2, "	https://greakproject.vercel.app/images/cards/mac.png", "89.12k", 15.67, "#696cff", "Mac"), createData(3, "https://greakproject.vercel.app/images/cards/ubuntu.png", "38.68k", 5.82, "#03c3ec", "Ubuntu"), createData(4, "https://greakproject.vercel.app/images/cards/linux.png", "30.27k", 5.03, "#ffab00", "Linux"), createData(5, "	https://greakproject.vercel.app/images/cards/chrome.png", "8.34k", 3.25, "#ff3e1d", "Chrome"), createData(6, "https://greakproject.vercel.app/images/cards/cent.png", "2.25k", 1.76, "#03c3ec", "Cent")]

export default function SystemTab() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none", // Removes shadow
        border: "none", // Removes border
        overflow: "hidden"
      }}
    >
      <Table sx={{ minWidth: 400, padding: "0px" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "& th": { border: "none" } }}>
            <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="left">
              NO.
            </TableCell>
            <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="left">
              SYSTEM
            </TableCell>
            <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="center">
              VISITS
            </TableCell>
            <TableCell align="left">
              <Typography sx={{ marginLeft: "40px", fontSize: "14px", color: "#32475c99" }}>DATA IN PERCENTAGE</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ "& td": { border: "none" } }}>
              <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="left">
                {row.number}
              </TableCell>
              <TableCell align="left">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={row.ImgUrl} alt="" style={{ height: "24px", marginRight: "10px" }} />

                  <Box sx={{ fontSize: "16px", color: "#32475c99" }}>{row.browserName}</Box>
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: "16px", color: "#32475c99" }} align="center">
                {row.visit}
              </TableCell>
              <TableCell align="center">
                <Box sx={{ marginLeft: "7px" }}>
                  <LinearColor progress={row.progress} fillColor={row.fillColor} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
