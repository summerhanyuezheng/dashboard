import React from "react";
import "./EGrid2.css";
import DropDown from "../DropDown";
import ProfitChart from "./ProfitChart";
import ExpenseChart from "./ExpenseChart";
import TotalIncomeChart from "./TotalIncomeChart";

export default function EGrid2() {
  return (
    <>
      <div className="e-grid-two">
        <div className="e2-left-flex">
          <div className="e2-sales-profit">
            <div className="e2-sales grid-style">
              <img
                src="https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png"
                alt=""
              />
              <h3 className="grey-bold-sub">Sales</h3>
              <h1 className="cash-num">$4,679</h1>
              <h5 className="percent-num">↑ 28.14%</h5>
              <div className="drop-down-mui">
                <DropDown></DropDown>
              </div>
            </div>
            <div className="e2-profit grid-style">
              <h3 className="grey-bold-sub">Profit</h3>
              <h1 className="cash-num">624k</h1>
              <div className="profit-chart">
                <ProfitChart></ProfitChart>
              </div>
            </div>
          </div>
          <div className="e2-expense-transaction">
            <div className="e2-expense grid-style">
              <h3 className="grey-bold-sub">Expenses</h3>
              <div className="expense-chart">
                <ExpenseChart></ExpenseChart>
                <h1 className="cash-num">72%</h1>

              </div>
              <h5>$2k Expenses more than last month</h5>
            </div>
            <div className="e2-transaction grid-style">
              <img
                src="https://greakproject.vercel.app/images/cards/stats-vertical-card.png"
                alt=""
              />
              <h3 className="grey-bold-sub">Transactions</h3>
              <h1 className="cash-num">$14,854</h1>
              <h5 className="percent-num">↑ 17.53%</h5>
              <div className="drop-down-mui">
                <DropDown></DropDown>
              </div>
            </div>
          </div>
        </div>

        <div className="e2-right grid-style">
            <div className="e2-total-income">
            <h3 className="grey-bold-sub" style={{color:'#32475cde'}}>Total Income</h3>
            <h4>Yearly report overview</h4>
            <div className="total-income-chart">
                <TotalIncomeChart></TotalIncomeChart>
            </div>

            </div>
            <div className="e2-report">
            <h3 className="grey-bold-sub" style={{color:'#32475cde'}}>Total Income</h3>
            <h4>Monthly Avg. $45.578k</h4>
            <div className="income-dropdown-mui">
            <DropDown></DropDown>

            </div>
            
            <div className="three-boxes">
                <div className="income-box each-box-style ">
                   <div className="each-box-img"> 
                   <img src="https://greakproject.vercel.app/images/cards/paypal-primary.png" alt="" />
                   </div>
                    <div className="boxname-money">
                        <h5>Income</h5>
                        <h3>$42.845</h3>
                    </div>
                    <h5 className="percent-num percent-num-align">↑ 2.7k</h5>
                </div>
                <div className="income-box each-box-style ">
                   <div className="each-box-img"> 
                   <img src="	https://greakproject.vercel.app/images/cards/shopping-bag.png" alt="" />
                   </div>
                    <div className="boxname-money">
                        <h5>Expense</h5>
                        <h3>$38.658</h3>
                    </div>
                    <h5 className="percent-num percent-num-align"  style={{color:'red'}}>↓ -1.15k</h5>
                </div>
                <div className="income-box each-box-style ">
                   <div className="each-box-img"> 
                   <img src="https://greakproject.vercel.app/images/cards/wallet-info.png" alt="" />
                   </div>
                    <div className="boxname-money">
                        <h5>Profit</h5>
                        <h3>$18.220</h3>
                    </div>
                    <h5 className="percent-num percent-num-align">↑ 2.7k</h5>
                </div>
            </div>
            
            </div>
        </div>
      </div>
    </>
  );
}
