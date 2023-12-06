import React from 'react'
import './Navbar.css'

import { GiRotaryPhone } from "react-icons/gi";
import { IoOptionsOutline } from "react-icons/io5";

import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='main-nav'>
        <div className="all">
            <div className='left'>

                <div className='lmain-bot'>
                    <Link to={"/"}>
                        <h6 className="ltext">Home</h6>
                    </Link>
                    <Link to={"/collections"}>
                        <h6 className="ltext">Collections</h6>
                    </Link>
                    <h6 className="gold">Gold Purchase Scheme</h6>
                </div>
            </div>
            <img className="logoimg" src={logo} alt="" />
            <div className='right'>

                <div className='rmain-bot'>
                     <h6 className="gr">Gold Rate</h6>
                     <div className="cont">
                        <h6>+91 9847 570333</h6>
                        <GiRotaryPhone className="icon" />
                     </div>
                    <div className="filt">
                    <IoOptionsOutline className="icon"/>
                    <select className='filter' >
                        <option >
                            Filter
                        </option>
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
                </div>
            </div>

            </div>
        </div>
        </div>
    )
}

export default Navbar