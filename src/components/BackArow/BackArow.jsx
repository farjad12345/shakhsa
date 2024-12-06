import React from 'react'
import "./BackArow.css"
import arrowRight from "../../assets/arrowRight.png"

function BackArow() {
  return (
    <div className='back'>
    <img src={arrowRight}alt="" />
    <a href="#">بازگشت
    </a>
  </div>  )
}

export default BackArow