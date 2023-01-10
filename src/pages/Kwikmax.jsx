import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import PeopleComponent from '../components/PeopleComponent'

const Kwikmax = () => {
  return (
    <div>
        <div style={{background:'rgba(62, 64, 149, 0.16)'}}className="md:flex md:py-[82px]">
           <div className='md:flex-[50%] md:my-10 md:ml-20 p-3'>
                <div className='flex items-center gap-2  my-10'>
                    <img src="images/maxIcon.svg" alt="" />
                <span className='text-[24px] text-[#0A1045] font-bold'>Kwikmax </span>
            </div>
                <div>
                    <h1 className='md:text-[50px] text-[30px] font-bold text-[#0A1045] w-[80%]'>Lock your funds & 
earn interest</h1>
                    <p className='text-[21px] text-[#232858] leading-loose my-[17px] text-justify'>With Kwikmax you get to Lock their funds for minimum of 3 month at an annual interest rate of 18%.</p>
                </div>
           </div>
           <div className='flex-[50%] flex md:justify-end justify-center items-center md:relative'>
            <div className='md:absolute md:bottom-[-80px] md:mt-0 mt-5 '>
                    <img src="images/kwikimax.png" alt="" className=''/>
            </div>
           </div>
           {/* <div className='flex-[50%] flex justify-center items-center'>
            <img src="images/kwikimax.png" alt="kwikimax images" className='md-w-[304px] w-[260px] md-h-[410px] md:mt-0 m-5  md:absolute md:bottom-0' />
           </div> */}
        </div>
        <div className='md:flex justify-between items-center md:px-[112px] md:md:py-[86px] px-3 py-10 md:mt10 md:mx-20'>
            <div className='md:flex-[50%] md:my-10'>
                <div>
                <h1 className='md:text-[50px] text-[30px] font-bold text-[#0A1045] w-[80%]'> 
                    Save funds at ease at Zero Charge.
                </h1>
               <p className='text-[21px] text-[#232858] leading-loose my-[17px] text-justify'>
               Deposit and withdraw your funds at Zero charge anytime and everywhere. With your kwiklite wallet you’re sure of your safe funds and you get access to it when you need it.
               </p>
                </div>
            </div>
            <div className='flex-[50%] px-3 flex items-center justify-center py-3'>
                <div className='md:w-[236.55px] w-[90%] md:h-[511.86px] rounded-lg border-8 md:my-20 border-[#E0E0EE] overflow-hidden'>
                <img src="images/phone.png" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
        <div className='md:flex justify-center mx-3 py-5 md:justify-around items-center'>
            <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
                <img src="images/visaCard.svg" alt="Visa card" className='w-[48px] h-[25px] mb-[30px]'/>
                <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Dedicated Virtual Card for payment</h4>
                <p className='text-[14px] text-[#232858]'>With Kwiklite you get a dedicated virtual credit card for you. You can make transfer and pay for bills and utilities.</p>
            </div>
            <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
                <img src="images/cardArrow.svg" alt="Visa card" className='w-[48px] h-[25px]  mb-[30px]'/>
                <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Make Funds transfer at Zero Charge</h4>
                <p className='text-[14px] text-[#232858]'>You can make transfer to friends and family in just a simple tap at zero charge directly from your Kwiklite account.</p>
            </div>
            <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
                <img src="images/cardFund.svg" alt="Visa card" className='w-[48px] h-[25px]  mb-[30px]'/>
                <h4 className='text-[#0A1045] text-[18px] font-bold my-3'>Access your funds at anytime</h4>
                <p className='text-[14px] text-[#232858]'>Gain access to your fund anytime and anywhere when you’re in need while it grows in it’s compound interest.</p>
            </div>
        </div>
        {/* <div className='flex flex-col justify-center items-center md:m-20 md:p-5 py-3'>
                <div className='md:max-w-[804px] w-[98%] mx-auto flex flex-col items-center'>
                    <img src="images/people.png" alt="users" className='my-3 object-cover md:w-[581.26px] md:h-[250px] w-[90%] h-[254px]' />
                    <h3 className='text-center md:text-[45px] text-[24px]'>Join over <span className='text-[#2CB470] font-bold'>65k+</span> people who already trust us to become better</h3>
                    <div className='flex gap-4 my-5'>
                            <Link to='#'>
                            <img src="images/googleBtn.svg" alt="" className='object-cover md:w-[227.9px] md:h-[64px]' />
                            </Link>
                            <Link to='#'>
                            <img src="images/iosBtn.svg" alt="" className='object-cover md:w-[227.9px] md:h-[64px]' />
                            </Link>
                    </div>
                </div>
        </div> */}
        <PeopleComponent />
        <Footer />
    </div>
  )
}

export default Kwikmax
