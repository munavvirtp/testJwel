import React from 'react'
import './lekshya.css'
import banner from './Images/lekshyabanner.png'
import { LekshyaData } from './LekshyaData';

Const[view,set view]=usestate (false)

function lekshya() {
    return (
        <div className="lekshya">
            <img className="banner" src={banner} alt="lekshya banner" />
            <button onClick={()=>{set view(!view)}} className="btn">
            Explore More
            View?<little>:<big>
            </button>
        </div>
    )
}

export default lekshya;