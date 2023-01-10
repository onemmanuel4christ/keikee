import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Utility = () => {
  return (
    <div>
        <div style={{background:'rgba(62, 64, 149, 0.16)'}} className="md:flex">
           <div className='md:flex-[50%] md:ml-20 md:px-0 px-3 py-[80px] '>
                <div className='flex items-center gap-2 '>
                
                <img src="images/utilityIcon.svg" alt="" />
                <span className='text-[24px] text-[#0F3E27] font-bold'>Utilities</span>
            </div>
                <div>
                    <h1 className='md:text-[60px] text-[40px] font-bold text-[#0A1045] w-[80%]'>
                    Save towards a Goal   
                    </h1>
                    <p className='text-[21px] text-[#232858] mt-[27px] leading-loose my-[17px] text-justify'>
                        Save towards a particular goal, Achieve your target and earn up to 12% per Annum.
                    </p>
                </div>
           </div>
           <div className='flex-[50%] flex md:justify-end justify-center items-center md:relative'>
            <div className='md:w-[455px] md:h-[267px] w-[70%] h-[50%] md:absolute bottom-0 right-20 mt-20'>
                    <img src="images/utility.svg" alt="" className='w-full h-full'/>
            </div>
           </div>
        </div>
        {/* <div className='md:flex justify-between items-center md:px-[112px] md:md:py-[86px] px-3 py-5 md:mt10 md:mx-20'>
            <div className='md:flex-[50%] md:my-10'>
                <div>
                <h1 className='md:text-[60px] text-[40px] font-bold text-[#0A1045] w-[80%]'> 
                    Save funds at ease at Zero Charge.
                </h1>
               <p className='text-[21px] text-[#232858] leading-loose my-[17px] text-justify'>
               Deposit and withdraw your funds at Zero charge anytime and everywhere. With your kwiklite wallet you’re sure of your safe funds and you get access to it when you need it.
               </p>
                </div>
            </div>
            <div className='flex-[50%] px-3 flex items-center justify-center py-3'>
                <div className='md:w-[236.55px] w-[90%] md:h-[511.86px] rounded-lg border-8 border-[#E0E0EE] overflow-hidden'>
                <img src="images/image.png" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div> */}
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
                <img src="images/visaCard.svg" alt="Visa card" className='w-[48px] h-[25px]'/>
                <h4 className='text-[#0A1045] text-[23px] my-3'>Dedicated Virtual Card for payment</h4>
                <p className='text-[14px] text-[#232858]'>With Kwiklite you get a dedicated virtual credit card for you. You can make transfer and pay for bills and utilities.</p>
            </div>
            <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
                <img src="images/cardArrow.svg" alt="Visa card" className='w-[48px] h-[25px]'/>
                <h4 className='text-[#0A1045] text-[23px] my-3'>Make Funds transfer at Zero Charge</h4>
                <p className='text-[14px] text-[#232858]'>You can make transfer to friends and family in just a simple tap at zero charge directly from your Kwiklite account.</p>
            </div>
            <div className='w-[331px] h-[318px] mx-auto p-5 bg-[#DDF3E880] md:my-20 my-5 rounded-md'>
                <img src="images/cardFund.svg" alt="Visa card" className='w-[48px] h-[25px]'/>
                <h4 className='text-[#0A1045] text-[23px] my-3'>Access your funds at anytime</h4>
                <p className='text-[14px] text-[#232858]'>Gain access to your fund anytime and anywhere when you’re in need while it grows in it’s compound interest.</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center md:m-20 md:p-5 py-3'>
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
        </div>
        <Footer />
    </div>
  )
}

export default Utility
