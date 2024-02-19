import React from "react"
import "./IncomeTab.css"
import TabLineChart from "./TabLineChart"
import image65 from "./65k.png"

export default function IncomeTab() {
  return (
    <>
      <div className="tab-total-section">
        <img src="https://greakproject.vercel.app/images/cards/wallet.png" alt="" />
        <div className="tab-text-flex">
          <h5>Total Income</h5>
          <h4>
            $459.1k <span> ⌃ 42.9%</span>
          </h4>
        </div>
      </div>
      <div className="tab-line-chart">
        <TabLineChart></TabLineChart>
      </div>
      <div className="tab-bottom">
        <img className="tab-circle-image" src={image65} alt="" />
        <div className="tab-bottom-text">
          <h5>Income this week</h5>
          <h4>$39k less than last week</h4>
        </div>
      </div>
    </>
  )
}
