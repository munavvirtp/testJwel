import React from 'react'
import './Product.css'
import Button from '../elements/Button'
import one from '../Images/PLekshya.png'
import two from '../Images/PNidhi.png'
import three from '../Images/PNila.png'
import four from '../Images/PNoora.png'
import five from '../Images/PShila.png'
import six from '../Images/PSiri.png'
import seven from '../Images/PVarna.png'
import eight from '../Images/PYuma.png'
import nine from '../Images/PZara.png'

function Product() {
    return (
        <div className="main-product" >
            <h3>Arabian Gold & Diamonds Collections</h3>
            <div className='submain' >

                <div>
                    <img src={one} alt="" />
                    <h4>Lekshya</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={two} alt="" />
                    <h4>Nidhi</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={three} alt="" />
                    <h4>Nila</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={four} alt="" />
                    <h4>Noora</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={five} alt="" />
                    <h4>Shila</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={six} alt="" />
                    <h4>Siri</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={seven} alt="" />
                    <h4>Varna</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={eight} alt="" />
                    <h4>Yuma</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
                <div>
                    <img src={nine} alt="" />
                    <h4>Zara</h4>
                    <a href="">
                        <h6>shop now</h6>
                    </a>
                </div>
            </div>
            <Button abhilash="click"/>
            
        </div>
    )
}

export default Product