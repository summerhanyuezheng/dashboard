import React from "react";
import "./EGrid3.css";
import PerformanceChart from "./PerformanceChart";
import DropDown from "../DropDown";
import ConversionChart from "./ConversionChart";
import ProgressBar from "./ProgressBar";
import ExpenseChart from "./ExpenseChart";

export default function EGrid3() {
  return (
    <>
      <div className="e-grid-row-three">
        <div className="e3-performance grid-style">
          <div className="e3-performance-dropdown">
            <DropDown></DropDown>
          </div>
          <h3 className="grey-bold-sub" style={{ color: "#32475cde" }}>
            {" "}
            Performance
          </h3>
          <span style={{ float: "left", marginRight: "80px" }}>
            Earning:$846.17
          </span>
          <span>Sales:25.7M</span>
          <div className="radar-chart">
            <PerformanceChart></PerformanceChart>
          </div>
        </div>
        <div className="conversion-rate grid-style">
          <div className="e3-conversion-rate-dropdown">
            <DropDown></DropDown>
          </div>
          <h3 className="grey-bold-sub" style={{ color: "#32475cde" }}>
            {" "}
            Conversion Rate
          </h3>
          <h4>Compared To Last Month</h4>
          <div className="e3-num-chart">
            <div>
              <h1 className="percent-big">8.72%</h1>
              <h5 class="percent-num">↑ 4.8%</h5>
            </div>

            <div className="e3-conversion-chart">
              <ConversionChart></ConversionChart>
            </div>
          </div>
          <div className="coversion-bottom">
            <div className="each-bottom-box">
                <div className="action-num">
                    <h3>Impression</h3>
                    <h5>12.4k Visits</h5>
                </div>
                <h5 class="percent-num" style={{marginTop:'15px'}}>↑ 12.8%</h5>
                
            </div>
            <div className="each-bottom-box">
                <div className="action-num">
                    <h3>Added To Cart</h3>
                    <h5>32 Product in cart</h5>
                </div>
                <h5 class="percent-num" style={{marginTop:'15px', color:"red"}}>↓ -8.8%</h5>
                
            </div>
            <div className="each-bottom-box">
                <div className="action-num">
                    <h3>Checkout</h3>
                    <h5>21 Product checkout</h5>
                </div>
                <h5 class="percent-num" style={{marginTop:'15px'}}>↑ 9.12%</h5>
                
            </div>
            <div className="each-bottom-box">
                <div className="action-num">
                    <h3>Purchased</h3>
                    <h5>12 Orders</h5>
                </div>
                <h5 class="percent-num" style={{marginTop:'15px'}}>↑ 2.24%</h5>
                
            </div>
          </div>
        </div>

        <div className="reve-sales-expense">
          <div className="revenue-and-sales">
            <div className="e3-revenue e2-sales grid-style">
            
              <img
                src="	https://greakproject.vercel.app/images/cards/stats-vertical-desktop.png"
                alt=""
              />
              <h3 className="grey-bold-sub">Revenue</h3>
              <h1 className="cash-num">$42,389</h1>
              <h5 className="percent-num">↑ 52.76%</h5>
              <div className="drop-down-mui">
                <DropDown></DropDown>
              </div>
            
            </div>
            <div className="e3-sales grid-style">
              <h3 className="grey-bold-sub">Sales</h3>
              <h1 className="cash-num" style={{marginBottom:'5px'}}>483k</h1>
              <h5 className="percent-num blue-34">+ 34%</h5>
              <h4>Sales Target</h4>
              <div className="progress-bar" style={{marginTop:'10px'}}>
              <ProgressBar value={72} />
              </div>
            </div>
          </div>
          <div className="e3-expense grid-style">
            <div className="expense-left-flex">
            <h3 className="grey-bold-sub" style={{ color: "#32475cde" }}>
            Expenses
          </h3>
          <div>
          <h1 className="cash-num">$84.7k</h1>
          <h5 className="percent-num" style={{color:'red'}}>↓8.2%</h5>
          </div>
          <span className="july-2024">JULY 2024</span>
            </div>
            <div className="expense-chart">
              <ExpenseChart></ExpenseChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
