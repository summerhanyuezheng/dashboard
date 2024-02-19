import React from "react"
import "./IncomeTab.css"
import TabLineChart from "./TabLineChart"
import image42 from "./42k.png"

export default function ProfitTab() {
  return (
    <>
      <div className="tab-total-section">
        <img src="https://greakproject.vercel.app/images/cards/chart.png" alt="" />
        <div className="tab-text-flex">
          <h5>Total Profit</h5>
          <h4>
            $147.9k <span> ⌃ 35.1%</span>
          </h4>
        </div>
      </div>
      <div className="tab-line-chart">
        <TabLineChart></TabLineChart>
      </div>
      <div className="tab-bottom">
        <img className="tab-circle-image" src={image42} alt="" />
        <div className="tab-bottom-text">
          <h5>Profit this week</h5>
          <h4>$28k less than last week</h4>
        </div>
      </div>
    </>
  )
}
