import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import PeopleComponent from '../components/PeopleComponent'

const KwikeeLite = () => {
  return (
  <>
   <div className='py-[82px]' style={{background: 'rgba(44, 180, 112, 0.16)'}}>
        <Container>
            <Row>
                <Col md={6}>
                <div className='flex items-center gap-2'>
                    <img src="images/liteIcon.svg" alt="" />
                    <span className='text-[24px] text-[#2CB470]'>Kwiklite </span>
                </div>
                <div className='max-w-[587px]'>
                    <h1 className='md:text-[60px] text-[40px] mt-[44px] font-bold text-[#0A1045]'>Your personalized savings account </h1>
                    <p className='text-[21px] text-[#232858] leading-loose text-justify my-[27px]'>
                    The Kwiklite works as a saving wallet system embedded in the application. With Kwiklite you can save your funds and at the same time invest your funds. 
                    </p>
                </div>
                </Col>
                <Col md={6} className='md:relative'>
                <div className='md:w-[329px] h-[278] md:absolute md:bottom-[-130px] md:left-0 md:right-0 m-auto z-[-1]'>
                    <img src="images/visa1.png" alt="" className='md:w-full md:h-full w-[259.96px] h-[304.86px]'/>
                </div>
                </Col>
            </Row>
        </Container>
   </div>
   <div className='bg-white z-2 pt-[150px]'>
   <Container>
    <Row>
        <Col md={7} className="flex flex-col justify-center items-center">
        <div className='max-w-[639px]'>
        <h1 className='md:text-[52.95px] text-[36px] font-bold text-[#0A1045]'> 
            Save funds at ease at Zero Charge.
        </h1>
       <p className='md:text-[21px] text-[18px] text-[#232858] leading-loose text-justify my-[27px]'>
       Deposit and withdraw your funds at Zero charge anytime and everywhere. With your kwiklite wallet you’re sure of your safe funds and you get access to it when you need it.
       </p>
        </div>
        </Col>
        <Col md ={5}> 
            <div className='md:w-[236.55px] md:ml-10 w-[90%] md:my-0 my-[80px]  md:h-[511.86px] h-[75%] rounded-lg border-8 border-[#E0E0EE] overflow-hidden'>
                <img src="images/phone.png" alt="" className='w-full h-full object-cover' />
            </div>
        </Col>
    </Row>
    <div className='md:flex justify-center my-[80px] mx-3 py-5 md:justify-around items-center'>
    <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
        <img src="images/homeCard.svg" alt="Visa card" className='w-[50px] h-[50px] mb-[30px]'/>
        <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Dedicated Virtual Card for payment</h4>
        <p className='text-[14px] text-[#232858]'>With Kwiklite you get a dedicated virtual credit card for you. You can make transfer and pay for bills and utilities.</p>
    </div>
    <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
        <img src="images/cardArrow.svg" alt="Visa card" className='w-[48px] h-[25px] mb-[30px]'/>
        <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Make Funds transfer at Zero Charge</h4>
        <p className='text-[14px] text-[#232858]'>You can make transfer to friends and family in just a simple tap at zero charge directly from your Kwiklite account.</p>
    </div>
    <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
        <img src="images/cardFund.svg" alt="Visa card" className='w-[48px] h-[25px] mb-[30px]'/>
        <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Access your funds at anytime</h4>
        <p className='text-[14px] text-[#232858]'>Gain access to your fund anytime and anywhere when you’re in need while it grows in it’s compound interest.</p>
    </div>
    </div>
   </Container>
   </div>
   <PeopleComponent />
   <Footer />
  </>
  )
}

export default KwikeeLite
