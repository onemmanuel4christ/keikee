import React from 'react'
import { Link } from 'react-router-dom'
import People from './People'

const PeopleComponent = () => {
  return (
    <div className='my-[100px]'>
    <div className='container p-[100px] flex flex-col justify-center items-center relative'>
    {/* <img src="images/leftGroup.svg" alt="" className='absolute top-0 bottom-0 left-[100px] m-auto hidden md:inline-block' />
    <img src="images/virtualLite.svg" alt="" className='absolute top-[50px] right-[250px] hidden md:inline-block' />
    <img src="images/rightGroup.svg" alt=""  className='absolute top-0 bottom-0 right-[100px] m-auto hidden md:inline-block' /> */}
          <People />
    <h1 className='text-center md:text-[35px] text-[24px] max-w-[764px] md:w-[764px]'>
      Join over <span className='text-[#2CB470] font-bold mt-10'>65k+
      </span> people who already trust us to become better</h1>' <div className='flex gap-4 my-5'>
                  <Link to='#'>
                            <img src="images/googleBtn.svg" alt="" className='object-cover md:w-[227.9px] md:h-[64px]' />
                            </Link>
                            <Link to='#'>
                            <img src="images/iosBtn.svg" alt="" className='object-cover md:w-[227.9px] md:h-[64px]' />
                            </Link>
        </div>
    </div>
    
</div>
  )
}

export default PeopleComponent
