import React, { useState } from 'react'
import './Main.scss'
const Main = () => {

   const [selected,setSelected] = useState('offer2')
   const [selectedValue,setSelectedValue] = useState('₹299')
   
  return (
    <div className='main'>
        <div className="left">
          

           <div className="header">
            <h3>Access curated courses worth</h3>
             <h2>₹<span id='cross'>18500</span> at just <span className='rup'>₹299</span> per year! </h2>
           </div>
            
            {/* features */}

             <div className="feature">
                <img src='/Book.png' alt="Book" />
                <h2><span>100+</span>Job relevant courses</h2>
             </div>
             <div className="feature">
                <img src='/Clock.png' alt="clock" />
                <h2><span>20,000+</span>Hours of content</h2>
             </div>
             <div className="feature">
                <img src="/live.png" alt="live" />
                <h2><span>Exclusive</span>webinar access</h2>
             </div>
             <div className="feature">
                <img src="/scholar.png" alt="scholar" />
                <h2>Scolarship with <span>₹94,500</span></h2>
             </div>
             <div className="feature">
                <img src="/ad.png" alt="ads" />
                <h2><span>Ad Free</span>learning experience</h2>
             </div>
             
         
           
        </div>
        <div className="right">
          
            <div className="form">
             {/* progress container  */}
              <div className="progress">
                 <div className="stage">
                    <img src="/Sign.png" width="32px" alt="signup" />
                    <h5>Sign Up</h5>
                 </div>
                 <div className="stage">
                    <img src="/sub.png" width="32px" alt="signup" />
                    <h5>Subscribe</h5>
                 </div>
              </div>
              <div className="form-header">

              <h2>Select your subscription plan</h2>
              </div>
             
             {/* offer container */}

              <div className="offers">

                <div className="offer1" >
                   <input type="Radio"  disabled checked   />
                   <div className="text-container">
                    
                    
                    <h5>12 Months Subscription</h5>
                    <div className="right-text">
                      <div className="top">
                        <h6>Total</h6>
                        <h5>₹99</h5>
                      </div>
                      <div className="bottom">
                        <h5>₹8</h5>
                        <h6> /mo</h6>
                      </div>
                    </div>
                   </div>
                   <div className="tag">
                     <h5>Offer expired</h5>
                   </div>
                </div>
                <div className="offer2" onClick={()=>{
                  setSelected('offer2')
                  setSelectedValue('₹299')
                }} style={{backgroundColor : selected =='offer2' ? '#D7EDDD' : '' , border: selected=='offer2' ? '2px solid #47BA68' : '2px solid #BEBEBE'}} >
                  {selected == 'offer2' ? <img src="/check.png" width="24px" /> :
                  <input type="radio" />
                  }
                  <div className="text-container">
                     
                     <h5>12 Months Subscription</h5>
                     <div className="right-text">
                        <div className="top">
                           <h6>Total</h6>
                           <h5>₹299</h5>
                        </div>
                        <div className="bottom">
                           <h5>₹25</h5>
                           <h6>/mo</h6>
                        </div>
                     </div>
                  </div>
                  <div className="tag">
                     <h5>Recommended</h5>
                  </div>
                </div>
                <div className="offer3" onClick={()=>{
                  setSelected('offer3');
                  setSelectedValue('₹199')
                }} style={{backgroundColor : selected =='offer3' ? '#D7EDDD' : '' , border: selected=='offer3' ? '2px solid #47BA68' : '2px solid #BEBEBE'}}>
                  {selected == 'offer3' ? <img src="/check.png" width="24px" /> : <input type='radio' />}
                  
                  <div className="text-container">
                     <h5>6 Months Subscription</h5>
                     <div className="right-text">
                        <div className="top">
                           <h6>Total</h6>
                           <h5>₹199</h5>
                        </div>
                        <div className="bottom">
                           <h5>₹17</h5>
                           <h6>/mo</h6>
                        </div>
                     </div>
                  </div>
                </div>
                <div className="offer4" onClick={()=>{
                  setSelected('offer4')
                  setSelectedValue('₹99')
                }} style={{backgroundColor : selected =='offer4' ? '#D7EDDD' : '' , border: selected=='offer4' ? '2px solid #47BA68' : '2px solid #BEBEBE'}} >
                
                {selected =='offer4' ? <img src="/check.png" width="24px" /> : 
                <input type='radio' />
                }
                  <div className="text-container">
                     <h5>3 Months Subscription</h5>
                     <div className="right-text">
                        <div className="top">
                           <h6>Total</h6>
                           <h5>₹99</h5>
                        </div>
                        <div className="bottom">
                           <h5>₹33</h5>
                           <h6>/mo</h6>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* summary container */}
              
              <div className="summary">
                <div className="text-container">
                  <h6>Subscription Fee</h6>
                  <h5>{selectedValue}</h5>
                </div>
                {selected !== 'offer4' && (
               
                
               

                

                <div className="alert">
                   <div className="header">
                     <h5>Limited time offer</h5>
                     {selected == 'offer2' ? <h6>-₹99</h6> : <h6>-₹49</h6> } 
                   </div>
                   <div className="body">
                     <img src="/time.png" width="20px"/>
                     <h5>Offer valid till 25th May 2023 </h5>
                   </div>
                </div>
                
               
                )}
                <div className="text-container2">
                  <h6>Total (Incl. of 18% GST)</h6>
                  {selected == 'offer4' ? <h5>₹119</h5> : selected == 'offer2' ? <h5>₹200</h5> : <h5>₹150</h5> } 
                </div>

              </div>

              {/* payment buttons  */}

              <div className="buttons">
                <button className='btn btn-outline'>Cancel</button>
                <button className='btn btn-primary'>Proceed to pay</button>
              </div>

              <div className="icon">
                <img src="Razorpay.png" alt="razorpay" />
              </div>

              
             </div>
            </div>
        </div>
    
  )
}

export default Main