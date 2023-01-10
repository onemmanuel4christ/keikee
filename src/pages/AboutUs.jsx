import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MoneyShower from '../components/MoneyShower'
import PeopleComponent from '../components/PeopleComponent'

const AboutUs = () => {
  return (
    <div>
      <div className='md:flex container md:py-[150px] justify-center items-center relative'>
      <div className='absolute top-0 left-32 w-[20%]'>
        <MoneyShower />
      </div>
          <div className='flex-[50%]'>
           <div className='md:pt-0 pt-[100px]'>
           <h1 className='md:text-[50px] text-[30px] text-[#0A1045]'>Creating Financial Solutions for Everyone</h1>
            <p className='my-[39px] text-[21px]'>Kwikee is a digital platform that ensures access to basic financial services (credit, savings, investments, and payments).</p>
           </div>
          </div>
          <div className='flex-[50%] md:px-5 relative'>
            <img src="/images/aboutLeftSvg.svg" alt="" className='hidden md:block md:absolute absolute left-[180px] top-[-20px] ' />
            <img src="/images/aboutRightSvg.svg" alt="" className='absolute top-[-130px] right-60 hidden md:block md:absolute' />
            <div className='md-w-[370.75px] md:h-[268.86px] p-10 mx-auto'>
                <img src="/images/aboutImg.png" alt="" className='md-w-full md:h-full object-contain mx-auto' />
            </div>
          </div>
      </div>
      <div className='md:py-[108] bg-[#F6F8FF] mb-[300px]' >
          <div className='container flex flex-col-reverse md:flex-row h-full'>
              <div className='flex-1 md:relative'>
              <img src="images/iphone.png" alt="" className='md:absolute md:bottom-0 md:left-0 md:right-0 m-auto md:h-[60%] ' />
              </div>
              <div className='flex-1 flex flex-col justify-center items-center py-5'>
              <div className='p-2'>
              <h1 className='md:text-[50px] text-[30px] text-[#0A1045]'>
                Our Journey to make finance easier and better <br />
                <span className='text-[#26A762]'>...just for you</span>
                </h1>
                <p className='my-[39px] text-[21px]'>
                For over 2 years, we have been providing credit, investments, and payments under the umbrella of Moneymarque Finance until we branched out in 2021. 
                </p>
              </div>
              </div>
          </div>
      </div>

      <div className='bg-[#0A1045]'>
        <div className='md:flex container'>
            <div className='flex-1 md:py-[86px]'>
             <div className='md:px-[100px] px-3 md:py-0 py-[50px]'>
             <h1 className='md:text-[138.15px] text-[100px] text-[#2CB470]'>65k+</h1>
                <p className='text-[21px] text-[#FFFFFF] text-justify'>
                  We have helped over 65,000 Nigerians manage their finances over this period. Through the use of technology, we believe that we have a responsibility to make financial services accessible, secure, and  frictionless for our customers.
                </p>
             </div>
            </div>
            <div className='flex-1 md:relative md:mt-0 mt-10'>
              <div className='md:h-[688px] md:w-[483px] h-[520px] w-[350px]  md:absolute md:bottom-0 md:left-0 md:right-0 m-auto'>
                <img src="images/kwikeelady.png" alt="" className='h-full  ' />
              </div>
            </div>
       </div>
      </div>
      {/* <div className='flex flex-col justify-center items-center my-[100px]'>
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

export default AboutUs
