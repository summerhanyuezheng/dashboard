import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress"

function LinearColor({ progress, fillColor }) {
  // Accept progress as a prop
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Box sx={{ width: "100%", marginLeft: "30px" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10, // Adjust height to match your design
            borderRadius: 5, // Rounded corners for the bar
            backgroundColor: "#ebeef0",
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5, // Rounded corners for the filled part
              backgroundColor: fillColor // Green color
            }
          }}
        />
      </Box>
      <Box sx={{ minWidth: 10, marginLeft: "20px" }}>
        <Typography variant="body2" color="#32475c99">
          {progress + "%"}
        </Typography>
      </Box>
    </Box>
  )
}

export default LinearColor
