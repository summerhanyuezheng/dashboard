import React from 'react'
import './EGrid1.css'

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
              
            </div>


        </div>
    </div>
  )
}
