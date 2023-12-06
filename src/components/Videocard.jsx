import React from 'react'
import './Videocard.css'
import one from '../Images/vid1.mp4'
import Button from '../elements/Button'

function Videocard() {
    return (
        <div className='mainvideo'>

            <div className="vidiv">
                <video className='vdocard' src={one} autoPlay muted loop />
                <div classname="pdiv">
                    <h1>About Us</h1>
                    <p>Arabian Gold & Diamonds is the realization of a dream <br/> and fulfillment of a vision to create a brand that <br/>consistently delights the customer with excellence <br/>and innovation.We made a humble beginning back <br/>in 2000. Since then we have been aiming to <br/> gradually expand our presence by developing a strong <br/>and satisfied customer base.</p>
                    <p>We are always seeking for new opportunities for growth <br/> and success, which has allowed us to expand into other emerging <br/> towns such as Karunagappally, Pathanamthitta, and Kayamkulam. <br/> We have branches in UAE as well.</p>
                    <p>We are always keen in keeping our product range updated <br/> according to the latest global trends. In addition to this, we have <br/> succeeded in developing our in-house design centers to stay <br/> ahead with our uniqueness. The phenomenal success of the group has been <br/> driven by an unstinting commitment to quality, a fact <br/> that has been widely recognized.</p>
                </div>
            </div>


        </div>
    )
}

export default Videocard