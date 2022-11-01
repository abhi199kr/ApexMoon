import React from 'react'
import "./Need.css"

const Need = () => {
  return (
    <div className='bgn'>
    <div className=" text-light tl ">
    <h1 className='text-center'>Need help acquiring or selling a domain name?</h1>
    <p className='text-center'>We are experts in the field. Utilize our years of experience in negotiations in the domain industry whilst maintaining your anonymity. By choosing ApexMoon, you are in the best hands possible.
    </p>
    {/* Form class startd */}
    <div className="d-flex my-5 flex-md-row flex-column">
    <div className="col-md-6 col-12">
    <h3>Get In Touch</h3>
    <div className='my-3'>
    <label htmlFor="">Name </label>
    <br />
    <input type="text" />

    </div>

    <div className='my-3'>
    <label htmlFor="">Email </label>
    <br />
    <input type="text" />

    </div>

    <div className='my-3'>
    <label htmlFor="">Phone </label>
    <br />
    <input type="text" />

    </div>

    <div className='my-3'>
    <label htmlFor="">Domain </label>
    <br />
    <input type="text" />

    </div>

    <div className='my-3'>
    <label htmlFor="">Message </label>
    <br />
    <textarea type="text" />

    </div>

    <div className="text-center  px-5 py-3 text-light h6 rounded-full send ">Send</div>



    
   

    </div>

    {/* another side */}
    <div className="col-md-6 col-12">
    <h3>Contact Us</h3>

    <div className='d-flex cus gap-3'>
    <div className='wco'>
    <img className='ico m-2' src="https://apexmoon.com/img/phone.svg" alt="" />
    </div>
    <div className=''>
        <p className='call'>call us</p>
        <p className='num'>64874150657
        </p>
    </div>
    

    </div>


    <div className='d-flex cu gap-3'>
    <div className='wco'>
    <img className='ico m-2' src="https://apexmoon.com/img/mail.svg" alt="" />
    </div>
    <div className=''>
        <p className='call'>Email</p>
        <p className='num'>abhishek2019kr@gmail.com
        </p>
    </div>
    

    </div>


    <div className='d-flex cu gap-3'>
    <div className='wco'>
    <img className='ico m-2' src="https://apexmoon.com/img/skype.svg" alt="" />
    </div>
    <div className=''>
        <p className='call'>skype us</p>
        <p className='num'>apexmoon@protonmail.com
        </p>
    </div>
    

    </div>

    <h3>Follow Us</h3>
    <div className="d-flex gap-2">
    <div className='wcot'>
    <img className='icot m-2 mx-3' src="https://apexmoon.com/img/in.svg" alt="" />
    </div>

    <div className='wcot'>
    <img className='icot m-2' src="https://apexmoon.com/img/twitter-white.svg" alt="" />
    </div>

    </div>

    </div>

    </div>

    </div>
      
    </div>
  )
}

export default Need
