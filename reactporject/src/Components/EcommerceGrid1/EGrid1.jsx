import React from 'react'
import './EGrid1.css'
import NewVisitorChart from './NewVisitorChart'
import ActivityChart from './ActivityChart'

export default function EGrid1() {
  return (
    <div className='e-grid-one'>
        <div className='e-grid-row-one'>
            <div className='katie grid-style'>
              <div className='left-katie'>
                <h3>Congratulations Katie!</h3>
                <h4>Best seller of the month</h4>
                <h1 className='cash-num' style={{color:'#696cff'}}>$48.9k</h1>
                <h4>78% of target</h4>
                <button>VIEW SALES</button>
              </div>
              <div className='right-katie'>
              <img className='trophy-pic' src="https://greakproject.vercel.app/images/misc/trophy.png" alt="" />
              </div>
            </div>
            <div className='right-row-one grid-style'>
              <div className='new-visitor'>
                
                <div className='new-visitor-top-flex'> 
                <h2 className='each-title'>New Vistiors</h2>
                <h4 className='top-grey-bold-sub '>Last Week </h4>
                  
                </div>
                <div className='new-visitor-bottom-flex'>
                  <div className='stack-num'> 
                    <h1  className='percent-big'>23%</h1>
                    <h5 className='percent-num' style={{color:'red'}}>↓ 8.75</h5>
                  </div>
                    <div className='visitor-chart'><NewVisitorChart></NewVisitorChart></div>
                  
                 
                </div>
               
              </div>
              <div className='activity'>
              <div className='activity-top-flex'> 
                <h2 className='each-title'>Activity</h2>
                <h4 className='top-grey-bold-sub '>Last Week </h4>
                  
                </div>
                <div className='activity-bottom-flex'>
                  <div className='stack-num'> 
                    <h1  className='percent-big'>82%</h1>
                    <h5 className='percent-num' >↑ 19.6%</h5>
                  </div>
                    <div className='visitor-chart'><ActivityChart></ActivityChart></div>
                  
                 
                </div>
               
              </div>
              
            </div>


        </div>
    </div>
  )
}
