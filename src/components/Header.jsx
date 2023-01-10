import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false);

  const handleClick = (e) =>{
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
      window.onresize = function() {
      let width = window.innerWidth;
      if(width <= 900){
        setIsMenuOpen(false);
      }
    };
  });

  function MouseOut(event){
    setIsMenuOpen(false)
  }
  function MouseHover(event){
    setIsMenuOpen(false)
  }

  return (
  //  <div className='relative'>
    <Navbar collapseOnSelect expand="lg" className='bg-[#FCFCFC] relative text-inherit z-10 md:h-[86px]' onMouseLeave={MouseOut}>
      <Container className='justify-between items-center my-3 '>
        <Nav.Link href="/" className='mr-5'>
        <img src="/images/logo.svg" alt="" className='md:w-[155px] md:h-[26px] w-[121px] h-[20px] object-cover'/>        
        </Nav.Link>
        <Navbar.Toggle ariacontrols="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-4">
            {/* <button onClick={handleClick} onMouseOver={handleClick} className='hidden md:inline-block text-[##1E1E1E] hover:bg-white hover:text-[#0A1045] px-3 rounded-md'>Kwikee</button> */}
            <Nav.Link  className='hover:bg-white hover:text-[#0A1045] px-3 text-[14px] rounded-md Hover:px-5' onClick={handleClick} onMouseOver={handleClick}>
            Kwikee
            </Nav.Link>

            
            <div className='md:hidden block'>
            <NavDropdown title="Kwikee" id="basic-nav-dropdown" className='mt-3 ml-4'>
              <NavDropdown.Item href="/kwiklite" className='my- text-[#000333]'>
                Kwiklite
                </NavDropdown.Item>
              <NavDropdown.Item href="/kwikmax" className='my-2 text-[#000333]'>
                Kwikmax
              </NavDropdown.Item>
              <NavDropdown.Item href="/kwikgoal" className='my-2 text-[#000333]'>
              Kwikgoals
              </NavDropdown.Item>
              <NavDropdown.Item href="/utilities" className='my-2 text-[#000333]'>
              Utilities
              </NavDropdown.Item>
              <NavDropdown.Item href="/credit" className='my-2 text-[#000333]'>
                Credit
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <Nav.Link href="/about-us" className='hover:bg-white hover:text-[#0A1045] px-3 text-[14px] rounded-md Hover:px-5 text-[#000333]' onMouseEnter={MouseHover}>About</Nav.Link>
            <Nav.Link href="/faqs" className='hover:bg-white hover:text-[#0A1045] px-3 text-[14px] rounded-md Hover:px-5 text-[#000333]' onMouseEnter={MouseHover}>FAQs</Nav.Link>
            <Nav.Link href="/blogs" className='hover:bg-white hover:text-[#0A1045] px-3 text-[14px] rounded-md Hover:px-5 text-[#000333]' onMouseEnter={MouseHover}>Blogs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/help">
              <button className='bg-[#0A1045] flex justify-center items-center py-[8px] text-[14px] w-[111px] rounded-md text-white'>Help</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div onMouseLeave={MouseOut}>
      {isMenuOpen && <Menu />}
      </div>
    </Navbar>
  //  </div>
  );
}

export default Header
