import React from 'react'
import './Botbar.css'
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoOptionsOutline } from "react-icons/io5";

function Botbar() {
  return (
    <div className='main-bot'>
        <h5>Home</h5>
        <h5>Collections</h5>
        <h5>Gold Purchase Scheme</h5>
        <h5>Gold Rate</h5>
        <div className="cont">
            <h4>Customer Care <br/> +91 9847 570333</h4>
            <FaMobileScreenButton className="icon" />
        </div>
        <button className="filt">
            <IoOptionsOutline className="icon"/>
{/*             <h5>Filter</h5> */}
            <select className='filter' >
                        <option >
                           Price
                        </option>
                        <option >
                           Jewellery type
                        </option>
                        <option >
                            Product
                        </option>
                        <option >
                            Brand
                        </option>
                        <option >
                            Gender
                        </option>
                        <option >
                            Purity
                        </option>

                    </select>
        </button>
    </div>
  )
}

export default Botbar