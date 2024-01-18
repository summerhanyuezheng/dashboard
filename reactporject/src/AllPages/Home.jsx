import React from "react"
import NavCom from "../Components/Nav/NavCom"
import Grid1Com from "../Grid1/Grid1Com"
import LeftDrawerCom from "../Components/LeftDrawer/LeftDrawerCom"
export default function Home() {
  return (
    <div>
      <LeftDrawerCom></LeftDrawerCom>
      <NavCom></NavCom>
      {/* <div style={{ height: "100px" }}></div> */}
      <Grid1Com></Grid1Com>
    </div>
  )
}
