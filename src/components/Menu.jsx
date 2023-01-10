import React from 'react'

const Menu = () => {
 
  return (
    <div className='w-[770px] absolute top-[75px] left-[20vw] bg-[#FFFFFF] z-50 py-[50px] px-[60px] shadow-lg hover:translate-y-5 hover:transition-all'>
     <div className='flex justify-between items-center gap-3 mb-2'>
      <a href="/kwiklite" className='link flex-[50%] flex items-center gap-3'>
        <div className='flex-[10%] flex justify-center items-center'>
            <img src="images/liteIcon.svg" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
        </div>
        <div className='flex-[90%]'>
            <h3 className='text-[#2CB470] text-[18px] mb-2'>Kwiklite</h3>
            <p className='text-[12px] text-[#0A1045]'>Transfer seamlessly without charges. Earn up to 10% interest on your savings.</p>
        </div>
      </a>
      <a href="/kwikmax" className='link flex-[50%] flex items-center gap-3'>
        <div className='flex-[10%] flex justify-center items-center'>
            <img src="images/maxIcon.svg" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
        </div>
        <div className='flex-[90%]'>
        <h3 className='text-[#0A1045] text-[18px] mb-2'>Kwikmax</h3>
            <p className='text-[12px] text-[#0A1045]'>Lock funds for minimum of 3 month at an annual interest rate of 24%.</p>
        </div>
      </a>
    </div>  
    <div className='flex justify-between items-center gap-3 mb-2'>
      <a href="/kwikgoal" className='link flex-[50%] flex items-center gap-3'>
        <div className='flex-[10%] flex justify-center items-center'>
            <img src="images/goalIcon.svg" alt="" className='w-[30px] h-[30px] rounded-full' />
        </div>
        <div className='flex-[90%]'>
            <h3 className='text-[#91D8F7] text-[18px] mb-2'>Kwikgoals</h3>
            <p className='text-[12px] text-[#232858]'>Save towards a particular goal, Achieve your target and earn up to 12% per Annum.</p>
        </div>
      </a>
      <a href="/credit" className='link flex-[50%] flex items-center gap-3'>
        <div className='flex-[10%] flex justify-center items-center'>
            <img src="images/creditIcon.svg" alt="" className='w-[30px] h-[30px] rounded-full' />
        </div>
        <div className='flex-[90%]'>
            <h3 className='text-[#A8B2F8] text-[18px] mb-2'>Credit</h3>
            <p className='text-[12px] text-[#232858]'>Access quick credit on your virtual credit card with affordable interest rates. </p>
        </div>
      </a>
    </div>  
    <div>
      <a href="/utilities" className='link flex-[50%] flex items-center gap-3'>
        <div className='flex-[10%]  max-w-[30px]'>
            <img src="images/utilityIcon.svg" alt="" className='w-[30px] h-[30px] rounded-full object-cover' />
        </div>
        <div className='flex-[90%]'>
            <h3 className='text-[#0F3E27] text-[18px] mb-2'>Utilities</h3>
            <p className='text-[12px] max-w-[45%] text-[#232858]'>Pay bills such as airtime, transfers, electricity bills, amongst others, at ease. </p>
        </div>
      </a>
    </div>  
    </div>
  )
}

export default Menu
