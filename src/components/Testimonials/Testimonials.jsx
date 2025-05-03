import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();

    let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }





  return (

    <>
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Consistent Earnings</h3>
                            
                        </div>
                    </div>
                    <p>
                    Earn monthly income just by letting verified clients use your LinkedIn profile for outreach and marketing.

</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Total Privacy</h3>
                            
                        </div>
                    </div>
                    <p>
                    Your account details stay secure—no changes to email, password, or ownership. You’re always in control.

</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Flexible Exit</h3>
                            
                        </div>
                    </div>
                    <p>
                    Need your account back? Just let us know a week in advance. No penalties, no pressure.

</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Respect & Responsibility</h3>
                           
                        </div>
                    </div>
                    <p>
                    We treat every account with respect and handle every step responsibly—from onboarding to payment.

</p>
                </div>
            </li>
        </ul>
    </div>
    
    </div>

    
</>
  )
}

export default Testimonials
