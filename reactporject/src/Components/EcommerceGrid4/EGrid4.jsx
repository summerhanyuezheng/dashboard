import React from "react";
import "./EGrid4.css";
import ProductTable from "./ProductTable";
import DropDown from "../DropDown";
import { Avatar } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BalanceChart from "./BalanceChart";

export default function EGrid4() {
  return (
    <>
      <div className="e-grid-row-four">
        <div className="e4-left grid-style">
          <ProductTable className="product-ttable"></ProductTable>
        </div>
        <div className="e4-right grid-style">
          <h3 className="grey-bold-sub" style={{ color: "#32475cde" }}>
            {" "}
            Total Balance
          </h3>
          <div className="e4-balance-dropdown">
            <DropDown></DropDown>
          </div>
          <div className="e4-wallet-box">
            <div style={{ display: "flex", width: "174px" }}>
              <Avatar
                sx={{ width: "40px", height: "40px", bgcolor: "#FFAB0040" }}
                variant="rounded"
              >
                <WalletIcon sx={{ color: "orange" }}></WalletIcon>{" "}
              </Avatar>
              <div className="e4-money-wallet-flex">
                <h3>$2.54k</h3>
                <h5>Wallet</h5>
              </div>
            </div>
            <div style={{ display: "flex", width: "174px" }}>
              <Avatar
                sx={{ width: "40px", height: "40px", bgcolor: "#696cff40" }}
                variant="rounded"
              >
                <AttachMoneyOutlinedIcon
                  sx={{ color: "#696cff" }}
                ></AttachMoneyOutlinedIcon>{" "}
              </Avatar>
              <div className="e4-money-wallet-flex">
                <h3>$2.54k</h3>
                <h5>Wallet</h5>
              </div>
            </div>
          </div>
          <div className="e4-balance-chart">
            <BalanceChart></BalanceChart>
          </div>
          <h5 className="e4-more-sales">
            You have done 57.6% more sales. Check your new badge in your
            profile.
          </h5>
        </div>
      </div>
    </>
  );
}
