import React from "react"
import NavCom from "../Components/Nav/NavCom"
import Grid1Com from "../Components/Grid1/Grid1Com"
import LeftDrawerCom from "../Components/LeftDrawer/LeftDrawerCom"
import Grid2Com from "../Components/Grid2/Grid2Com"
import Grid3Com from "../Components/Grid3/Grid3Com"

export default function Home() {
  return (
    <div>
      <LeftDrawerCom></LeftDrawerCom>
      <NavCom></NavCom>
      {/* <div style={{ height: "100px" }}></div> */}
      <Grid1Com></Grid1Com>
      <Grid2Com></Grid2Com>
      <Grid3Com></Grid3Com>
    </div>
  )
}
