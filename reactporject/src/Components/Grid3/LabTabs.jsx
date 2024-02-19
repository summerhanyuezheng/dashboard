import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import IncomeTab from "./IncomeTab"
import ExpensesTab from "./ExpensesTab"
import ProfitTab from "./ProfitTab"

export default function LabTabs() {
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: { display: "none" } }}>
            <Tab
              label="INCOME"
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
              label="EXPENSES"
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
              label="PROFIT"
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
          <IncomeTab></IncomeTab>
        </TabPanel>
        <TabPanel value="2">
          <ExpensesTab></ExpensesTab>
        </TabPanel>
        <TabPanel value="3">
          <ProfitTab></ProfitTab>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
