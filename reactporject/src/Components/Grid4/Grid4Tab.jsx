import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import BrowserTab from "./BrowserTab"
import SystemTab from "./SystemTab"
import CountryTab from "./CountryTab"

export default function Grid4Tab() {
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider",}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: { display: "none" } }}>
            <Tab
              label="BROWSER"
              value="1"
              sx={{
                color: "rgba(50, 71, 92, 0.6)", // Default color for unselected tab
                "&.Mui-selected": {
                  backgroundColor: "#696cff",
                  color: "#fff",
                  borderRadius: "4px 4px 0 0",
                  padding: "6px 12px"
                },
                "&:not(.Mui-selected):hover": {
                  backgroundColor: "inherit",
                  color: "rgba(50, 71, 92, 0.6)"
                }
              }}
            />
            <Tab
              label="OPERATING SYSTEM"
              value="2"
              sx={{
                color: "rgba(50, 71, 92, 0.6)", // Default color for unselected tab
                "&.Mui-selected": {
                  backgroundColor: "#696cff",
                  color: "#fff",
                  borderRadius: "4px 4px 0 0",
                  padding: "6px 12px"
                },
                "&:not(.Mui-selected):hover": {
                  backgroundColor: "inherit",
                  color: "rgba(50, 71, 92, 0.6)"
                }
              }}
            />
            <Tab
              label="COUNTRY"
              value="3"
              sx={{
                color: "rgba(50, 71, 92, 0.6)", // Default color for unselected tab
                "&.Mui-selected": {
                  backgroundColor: "#696cff",
                  color: "#fff",
                  borderRadius: "4px 4px 0 0",
                  padding: "6px 12px"
                },
                "&:not(.Mui-selected):hover": {
                  backgroundColor: "inherit",
                  color: "rgba(50, 71, 92, 0.6)"
                }
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BrowserTab></BrowserTab>
        </TabPanel>
        <TabPanel value="2">
          <SystemTab></SystemTab>
        </TabPanel>
        <TabPanel value="3">
          <CountryTab></CountryTab>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
