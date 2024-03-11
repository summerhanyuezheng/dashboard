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

const rows = [createData(1, "https://greakproject.vercel.app/images/cards/chrome.png", "8.92k", 64.91, "#71dd37", "Chrome"), createData(2, "https://greakproject.vercel.app/images/cards/safari.png", "1.29k", 57, "#696cff", "Safari"), createData(3, "https://greakproject.vercel.app/images/cards/firefox.png", "328", 42.56, "#03c3ec", "Firefox"), createData(4, "https://greakproject.vercel.app/images/cards/edge.png", "142", 32.99, "#ffab00", "Edge"), createData(5, "	https://greakproject.vercel.app/images/cards/opera.png", "85", 30.2, "#ff3e1d", "Opera"), createData(6, "https://greakproject.vercel.app/images/cards/brave.png", "36", 20.34, "#03c3ec", "Brave")]

export default function BrowserTab() {
  return (
    <TableContainer
      
      sx={{
        boxShadow: "none", // Removes shadow
        border: "none", // Removes border
        overflow: "hidden",
        padding:'0px !important'
      }}
    >
      <Table sx={{ minWidth: 400, padding: "0px !important" }} >
        <TableHead>
          <TableRow sx={{ "& th": { border: "none" } }}>
            <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="left">
              NO.
            </TableCell>
            <TableCell sx={{ fontSize: "14px", color: "#32475c99" }} align="left">
              BROWSER
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
