import * as React from "react"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import SingleAvatar from "./SingleAvatar"
import ManyAvatar from "./ManyAvatar"

export default function TimeLine() {
  return (
    <Timeline>
      <TimelineItem sx={{
        '&::before': {
         
          content: "none", 
        },
      }}  >
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "rgb(105, 108, 255)", // RGB color for the background
              boxShadow: "rgba(105, 108, 255, 0.16) 0px 0px 0px 4px" // Box shadow
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            color: "#32475cde",
            fontSize: "16px",
            marginBottom: "20px"
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            12 Invoices have been paid<Typography sx={{ color: "#32475c99", fontSize: "14px" }}>12 min ago</Typography>
          </Typography>

          <Typography
            sx={{
              color: "#32475c99",
              fontSize: "16px",
              marginTop: "5px"
            }}
          >
            Invoices have been paid to the company
          </Typography>
          <Typography sx={{ color: "#32475cde", display: "flex", alignItems: "end" }}>
            <img src="https://greakproject.vercel.app/images/icons/file-icons/pdf.png" alt="" style={{ width: "24px", height: "auto", marginTop: "15px", marginRight: "10px" }} />
            Invoices.pdf
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{
        '&::before': {
         
          content: "none", 
        },
      }}>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "rgb(255, 171, 0)", // RGB color for the background
              boxShadow: "rgba(255, 171, 0, 0.16) 0px 0px 0px 4px;" // Box shadow
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            color: "#32475cde",
            fontSize: "16px",
            marginBottom: "10px"
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            Client Meeting<Typography sx={{ color: "#32475c99", fontSize: "14px" }}>45 min ago</Typography>
          </Typography>

          <Typography
            sx={{
              color: "#32475c99",
              fontSize: "16px",
              marginTop: "5px"
            }}
          >
            Project meeting with john @10:15am
          </Typography>
          <SingleAvatar></SingleAvatar>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{
        '&::before': {
         
          content: "none", 
        },
      }}>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "rgb(3, 195, 236)", // RGB color for the background
              boxShadow: "rgba(3, 195, 236, 0.16) 0px 0px 0px 4px;" // Box shadow
            }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            color: "#32475cde",
            fontSize: "16px"
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            Create a new project for client<Typography sx={{ color: "#32475c99", fontSize: "14px" }}>2 days ago</Typography>
          </Typography>

          <Typography
            sx={{
              color: "#32475c99",
              fontSize: "16px",
              marginTop: "5px"
            }}
          >
            5 team members in a project
          </Typography>
          <ManyAvatar></ManyAvatar>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
