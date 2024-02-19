import React from "react"
import "./IncomeTab.css"
import TabLineChart from "./TabLineChart"
import image72 from "./72k.png"

export default function ExpensesTab() {
  return (
    <>
      <div className="tab-total-section">
        <img src="https://greakproject.vercel.app/images/cards/paypal.png" alt="" />
        <div className="tab-text-flex">
          <h5>Total Expenses</h5>
          <h4>
            $316.1k <span> ⌃ 27.8%</span>
          </h4>
        </div>
      </div>
      <div className="tab-line-chart">
        <TabLineChart></TabLineChart>
      </div>
      <div className="tab-bottom">
        <img className="tab-circle-image" src={image72} alt="" />
        <div className="tab-bottom-text">
          <h5>Expenses this week</h5>
          <h4>$16k less than last week</h4>
        </div>
      </div>
    </>
  )
}
