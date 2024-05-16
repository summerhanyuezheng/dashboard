import React from 'react'
import NavCom from "../Components/Nav/NavCom"
import LeftDrawerCom from "../Components/LeftDrawer/LeftDrawerCom"
import EGrid1 from '../Components/EcommerceGrid1/EGrid1'
import EGrid2 from '../Components/EcommerceGrid2/EGrid2'
import EGrid3 from '../Components/EcommerceGrid3/EGrid3'
import EGrid4 from '../Components/EcommerceGrid4/EGrid4'
import Footer from "../Components/Footer/Footer"

export default function ECommerce() {
  return (
    <>
    <LeftDrawerCom></LeftDrawerCom>
     <NavCom></NavCom>
     <EGrid1></EGrid1>
     <EGrid2></EGrid2>
     <EGrid3></EGrid3>
     <EGrid4></EGrid4>
     <Footer></Footer>
    
    
    
    
    </>
  )
}
