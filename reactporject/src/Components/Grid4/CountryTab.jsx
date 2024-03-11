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

const rows = [createData(1, "	https://greakproject.vercel.app/images/cards/usa.png", "87.24k", 38.12, "#71dd37", "USA"), createData(2, "https://greakproject.vercel.app/images/cards/brazil.png", "42.69k", 28.23, "#696cff", "Brazil"), createData(3, "https://greakproject.vercel.app/images/cards/india.png", "12.58k", 13.82, "#03c3ec", "India"), createData(4, "https://greakproject.vercel.app/images/cards/australia.png", "4.13k", 12.72, "#ffab00", "Australia"), createData(5, "	https://greakproject.vercel.app/images/cards/china.png", "2.21k", 3.25, "#ff3e1d", "China"), createData(6, "	https://greakproject.vercel.app/images/cards/france.png", "1.56k", 6.59, "#03c3ec", "France")]

export default function CountryTab() {
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
              COUNTRY
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
