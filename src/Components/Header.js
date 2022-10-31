import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
  return (
    
   
<div className=''>

<Navbar collapse0nSelect fixed='top' expand="lg" bg="white" color='black' variant="" >
<Container className=''>

<div className=''><img className='img-fluid w-50' src="https://apexmoon.com/img/apex-moon-logo.svg" alt="" /></div>
   

<Navbar.Toggle aria-controls='responsive-navbar-nav' />

<Navbar.Collapse id='responsive-navbar-nav'>

<div className=' pt-3 d-flex flex-lg-row flex-column gap-md-4 gap-2 ldiv'>
<div className='py-2 ld'>Home</div>
<div className='py-2 ld '>Buy Domains</div>
<div className='py-2 ld'>Past Sales</div>
<div className='py-2 ld'>Services</div>
<div className='py-2 ld'>About Us</div>
<div className="text-center  px-4 py-3 text-light h6 rounded-full contact ">CONTACT US</div>

{/* <button>COTACT US</button> */}


</div>
</Navbar.Collapse>
</Container>
</Navbar>
</div>




 ) }

export default Header
