import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='bgs'>
    <div className='container'>
    <h1 className='text-center bord'>Services</h1>
    <div className='white'></div>
    {/* Row grid */}
    <div className="row my-5">
        <div className='col-md-3'>
            <p className="text-center"><img className='is text-center' src="	https://apexmoon.com/img/Domain-brokerage-icon.svg" alt="" /></p>
        
            <h3 className='text-center'>Domain Brokerage</h3>
        </div>
        <div className='col-md-3'>
            <p className="text-center"><img className='is text-center' src="	https://apexmoon.com/img/Domain-brokerage-icon.svg" alt="" /></p>
        
            <h3 className='text-center'>Domain Brokerage</h3>
        </div>
        <div className='col-md-3'>
            <p className="text-center"><img className='is text-center' src="	https://apexmoon.com/img/Domain-brokerage-icon.svg" alt="" /></p>
        
            <h3 className='text-center'>Domain Brokerage</h3>
        </div>
        <div className='col-md-3'>
            <p className="text-center"><img className='is text-center img-fluid' src="	https://apexmoon.com/img/Domain-brokerage-icon.svg" alt="" /></p>
        
            <h3 className='text-center'>Domain Brokerage</h3>
        </div>
        
    </div>


    </div>
    
    </div>
  )
}

export default Services
