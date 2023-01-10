import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import PeopleComponent from '../components/PeopleComponent'

const Kwikgoals = () => {
  return (
    <div>
        
        <div style={{background:'rgba(145, 216, 247, 0.16)'}} className="md:flex">
           <div className='md:flex-[50%] md:my-[80px] md:ml-20 p-3'>
                <div className='flex items-center gap-2  my-10'>
                <img src="images/goalIcon.svg" alt="" />
                <span className='text-[24px] text-[#91D8F7] font-bold'>Kwikgoals</span>
            </div>
                <div>
                    <h1 className='md:text-[50px] text-[30px] font-bold text-[#0A1045] w-[80%]'>
                    Save towards a Goal    
                    </h1>
                    <p className='text-[21px] text-[#232858] leading-loose my-[17px] text-justify'>
                    Save towards a particular goal, Achieve your target and earn up to 12% per Annum.
                    </p>
                </div>
           </div>
           <div className='flex-[50%] flex md:justify-end justify-center items-center md:relative'>
            <div className='md:w-[679.78px] md-h-[624.92px] h-[70%] md:absolute bottom-0'>
                    <img src="images/kwikigoal2.png" alt="" className='w-full h-full object-cover'/>
            </div>
           </div>
        </div>
        <div className='md:flex justify-between items-center md:px-[112px] md:md:py-[86px] px-3 py-5 md:mt10 md:mx-20'>
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
        <PeopleComponent />
        <Footer />
    </div>
  )
}


export default Kwikgoals
