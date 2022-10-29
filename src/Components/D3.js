import React from 'react'
import "./D3.css"

const D3 = () => {
  return (
    <div className='container text-center my-5'>
    
      <h1>Why Choose Us?</h1>
      <p className='bl'>Not all domain brokers are created equal. With more than a decade of experience in the industry, having helped clients acquire and sell some of the more exclusive domain names in the world, we have gained a unique set of skills, knowledge, and experience, and have built a powerful network that allows us to help you reach your goals. Don't take our word for it; check out what some of our clients have said in the testimonials.
      </p>

      <div className='row re'>
      <div className="col-md-3">
        <img src="https://apexmoon.com/img/global-expert.svg" className='wi' alt="" />
        <p>Global Expert</p>
      </div>
      <div className="col-md-3">
        <img src="https://apexmoon.com/img/Trustworthy.svg" className='wi' alt="" />
        <p>Global Expert</p>
      </div>
      <div className="col-md-3">
        <img src="https://apexmoon.com/img/Proven-Success.svg" className='wi' alt="" />
        <p>Global Expert</p>
      </div>
      <div className="col-md-3">
        <img src="https://apexmoon.com/img/Confidentiality.svg" className='wi' alt="" />
        <p>Global Expert</p>
      </div>
      
      {/* <div className="col-md-3">dfdfffd</div>
      <div className="col-md-3">dfdfffd</div>
      <div className="col-md-3">dfdfffd</div> */}

      </div>


      {/* button */}
      <div className="text-center px-4 py-3 text-light h6 rounded-full  se">SELL YOUR DOMAIN</div>
      {/* <button type="button" class="btn btn-warning">Warning</button> */}
    </div>
  )
}

export default D3
