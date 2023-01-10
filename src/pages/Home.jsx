import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import SavingImg  from '../img/savingsImage.png'
import CreditImg  from '../img/creditImage.png'
import CashbackImg  from '../img/cashbackImage.png'
import People from '../components/People';
import MoneyShower from '../components/MoneyShower';
import TransferAnimation from '../components/TransferAnimation';
import CreditCardAnimation from '../components/CreditCardAnimation';
import './Home.css'
import Typical from 'react-typical'
import { Col, Container, Row } from 'react-bootstrap';


const Home = () => {
  const [colorNum, setColorNum] = useState(1);
  
    
  const limitedInterval = setTimeout(function(){ 
    setColorNum(colorNum + 1)
    if(colorNum === 3){
      setColorNum(1)
    }
    clearInterval(limitedInterval);
  }, 6000);
  
  // console.log(colorNum)
  return (
    <div className='relative'>
      <img src="images/topLeftSvg.svg"className='absolute md:top-[60px] md:left-[80px] right-10 top-[60px]' alt="rse" />     
        <img src="images/leftSvg.svg" alt="" className='absolute top-[80px] md:left-[60px] left-0' />
        <div className='absolute top-0 left-[100px] w-[20%]'>
          <MoneyShower />
        </div>
    <div>
    <Container>
    <Row className='py-[82px]'>
      <Col md={7} className="pt-[60px]">
      <div className='flex flex-col md:justify-start justify-center md:items-start items-center ml-4 '>
          <h1 className='text-[49.52px] md:text-[52.95px] text-[#0A1045] title'>
            Everything needed for <br className='hidden md:block' /> better living. {" "} 
              <br className='md:hidden block' />
                  {colorNum === 1 &&<span className='text-[#91D8F7]'>
                    <Typical
                        steps={['Cashback', 4000, ' ', 2000]}
                        loop={Infinity}
                        wrapper="span"
                        
                      />

                  </span>
                  }
                  {colorNum === 2 &&<span className='text-[#B9C2FF]'>
                      <Typical
                        steps={['Credit', 4000, ' ', 2000 ]}
                        loop={Infinity}
                        wrapper="span"
                      />

                  </span>
                  }
                  {colorNum === 3 &&<span className='text-[#2CB470]'>
                      <Typical
                        steps={['Savings', 4000, ' ', 2000]}
                        loop={Infinity}
                        wrapper="span"
                      />
                  </span>
                  }
            </h1>
            <p className='my-[35px] md:text-[24px] text-[#232858] max-w-[80%] para'>Kwikee provides convenient, quick and seamless financial solutions.</p>
      </div>
      <div className='flex py-[35px] md:flex-row flex-col md:justify-start justify-center items-center gap-4 action md:mx-10'>
          <Link to="#" className='w-[159.86px]'>
              <img src="/images/googleBtn.svg" alt="Google play" className='w-full' />
          </Link>
          <Link to="#" className='w-[159.86px]' >
              <img src="/images/iosBtn.svg" alt="Google play" className='w-full' />
          </Link>
      </div>
      </Col>
      <Col md={5}>
        <div className='md:w-[100%] md:h-[563px] h-[332.63px] relative md:mx-0 mx-auto w-[80%] md:my-0 mt-[127px]'>
        <img src="/images/rigtSvg.svg" alt="" className='absolute hidden md:block left-[-180px]' />
                {/* {colorNum === 1 &&
                    <div className='bg-[#91D8F7] absolute right-0 w-[60%] h-full'></div>
                } */}
                <div className={`${colorNum ===1 ? 'bg-[#91D8F7] absolute right-0 w-[60%] h-full' : 'hidden' }`}></div>
                <div className={`${colorNum ===2 ? 'bg-[#B9C2FF] absolute right-0 w-[60%] h-full' : 'hidden' }`}></div>
                <div className={`${colorNum ===3 ? 'bg-[#2CB470] absolute right-0 w-[60%] h-full' : 'hidden' }`}></div>
                <img src={CashbackImg} alt="frame" className={`${colorNum === 1 ? 'absolute top-[26px] bottom-[26px] right-[23px] m-auto  h-[90%] object-cover trans': 'hidden'}`} />
                <img src={CreditImg} alt="frame" className={`${colorNum === 2 ? 'absolute top-[26px] bottom-[26px] right-[23px] m-auto  h-[90%] object-cover trans': 'hidden'}`} />
                <img src={SavingImg} alt="frame" className={`${colorNum === 3 ? 'absolute top-[26px] bottom-[26px] right-[23px] m-auto  h-[90%] object-cover trans': 'hidden'}`} />
        </div>
      </Col>
    </Row>
    </Container>
    <Container>
    <Row className='md:py-[82px]'>
        <Col md={6} >
          <div className='flex justify-center items-center md:p-0 py-[82px]'>
           <img src="/images/Frame.svg" alt="frame" className='md:w-[367px] md:h-[215px] w-[208px] h-[121px] object-cover' />
          </div>
        </Col>
        <Col md={6}>
        <div className=' max-w-[550px]'>
              <h1 className='md:text-[40px] text-[#0A1045] md:text-start mb-[22px] font-bold leading-normal text-[36px] save'>
                  The Easier Way to Save 
              </h1>
                <p className='text-[#232858] text-[21px] leading-normal md:text-start save'>
                      With Kwikee, finance is a smooth sail. Save funds anytime and receive desired funds in your Kwikee app.
                </p>
              </div>
        </Col>
    </Row>
    </Container>
    <div className='md:px-[127px] mt-[82px] mb-[180px] py-[80px]'>
    <Row style={{background: '#0A1045'}} className="md:rounded-3xl pt-[40px]">
        <Col md={6} className="flex justify-center items-center">
        <div className='flex flex-col md:justify-end md:items-start justify-center items-center my-[40px] ml-16'>
            <img src="images/virtualLite.svg" alt="" className='mb-3'  />
            <h1 className='md:text-[52.95px] text-[24px] text-white md:text-left font-bold leading-normal'>
             Just One Virtual  <br />  Card is all you <span className='text-[#2CB470] break-words'>need</span>
              </h1>
        <button className='bg-[#2CB470] text-white px-5 py-2 rounded-md my-4 '>Get Kwikee</button>
          </div>
        </Col>
        <Col md={6} className='md:relative'>
        <img src="images/iphone.png" alt="" className='object-cover md:absolute bottom-0 md:left-0 md:right-0 md:m-auto h-[100%] md:w-80% mx-auto' />
        </Col>
    </Row>
    </div>
   <div className='bg-[#F6F8FF] flex flex-col md:flex-row'>
      <div className="md:flex-[66%] flex flex-col justify-center items-start ">
        <div className='md:max-w-[566px] w-[90%] md:ml-[117px] md:p-0 p-4'>
                  <h1 className='md:text-[52.95px] max-w-[566px] text-[30px] text-[#0A1045] py-3 text-left font-extrabold '>
                    Finance Solutions for 
                    Quality Living
                  </h1>
                <p className='save text-[#232858] md:text-[21px] text-[14px] md:text-start'>
                Kwikee provides convenient, quick and seamless financial solutions. Caters to income earners and business owners looking to improve their quality of living. 
                </p>
          </div>
      </div>
      <div className="md:flex-[44%] relative p-0">
      <img src="/images/finImg.png" alt="frame" className='w-[100%] md:h-[100%] h-[350px] object-cover' />
    <div className='md:h-[99px] gap-3 md:w-[385px] bg-white flex justify-between items-center  w-[236px] px-[20px] 
      h-[65px] absolute md:top-[40%] md:bottom-[35%] md:left-[-130px] m-auto rounded-lg top-[63%] left-2'>
         <div className=''>
             <strong className='md:text-[18px] text-[#0A1045] text-[11.82px]  font-bold'>Next Year Rent</strong>
            <div className='md:text-[12px] text-[8px]'>My next year house rent in Ikeja</div>
            <img src="/images/progress.svg" alt="" className='w-full my-1' />
          </div>
          <div>
            <img src="/images/circle.svg" alt="" className='w-full my-1' />
          </div>
          </div>
              <div className='md:h-[99px] gap-5 bg-white flex justify-between items-center
               md:w-[385px] w-[236px] px-[16px] h-[65px] absolute md:top-[70%] md:left-[-40px] rounded-lg top-[86%] left-[20%]'>
            <div>
              <img src="/images/credit.svg" alt="" className='w-full' />
            </div>
             <div>
             <div className='md:text-[18px] text-[#0A1045] text-[10px]  font-bold'>N500,000 Credited</div>
             <div className='md:text-[10px] text-[7px]'>
                Get your Credit card recharged anytime at no interest on weekends</div>
             </div>
             </div> 
      </div>

   </div>

    <div className='container md:my-[100px] my-[50px]'>
        <div className='md:flex justify-center items-center gap-10 py-[80px]'>
             <div className='flex-1 flex justify-end'>
                      <div className='bgCrd md:max-w-[493px] px-3 bgColor rounded-2xl'>
                          <div className='ml-[60%]'>
                              <CreditCardAnimation />
                          </div>
                            <div className='p-3'>
                              <h1 className='font-bold text-[#0A1045] md:text-[34px] text-[21px]'>
                                Quick Credit on your <br /> Virtual Card 
                              </h1>
                              <p className='md:text-[18px] my-[37px] text-[14px] leading-loose'>
                              Kwikee enables user get an overdraft on their credit card which can be withdrawn, used for bills payment among others.
                              </p>
                          </div>
                      </div>
                    </div>
                    <div className=' flex-1 flex justify-start'>
                    <div className='bgCrd md:max-w-[493px] px-3 bgColor rounded-2xl'>
                        <div className='ml-[60%]'>
                        <TransferAnimation />
                        </div>
                          <div className='p-3'>
                            <h1 className='font-bold text-[#0A1045] md:text-[34px] text-[21px]'>
                            Transfer funds to <br /> 
                             Friends & Family at Ease
                            </h1>
                            <p className='md:text-[18px] my-[37px] text-[14px] leading-loose'>
                              Couple with numerous other finanical services, Kwikee also enables you to make payment and transfer funds to friends and family
                            </p>
                        </div>
                    </div>
                    </div> 
        </div>
    </div>
    <div className='md:flex justify-center items-center bg-[#2A3275] md:h-[580px]'>
          <div className='md:flex-[35%] flex-1 md:relative md:h-full p-10 z-10'>
              <div className='md:absolute md:left-[150px] md:right-[-300px] md:top-[160px] '>
                    <h1 className='md:text-[50px] text-[36px] font-bold text-white'>No need to wait <span className='text-[#2CB470]'> Begin the 
                    Better life with Kwikee </span></h1>
                    <div className='flex my-10 gap-5'>
                    <Link>
                      <img src="/images/googleBtn.svg" alt="" />
                    </Link>
                    <Link>
                      <img src="/images/iosBtn.svg" alt="" />
                    </Link>
                    </div>
                  </div>
                </div>
                <div className='flex-[65%] flex items-center justify-center relative md:h-full'>
                    <img src="/images/myframe.svg" alt="" className='md:w-[914px] md:h-[480px] md:absolute bottom-0 md:object-cover ' />    
                </div>
    </div>

    <div className='my-[100px]'>
                    <div className='container p-[100px] flex flex-col justify-center items-center relative'>
                    <img src="images/leftGroup.svg" alt="" className='absolute top-0 bottom-0 left-[100px] m-auto hidden md:inline-block' />
                    <img src="images/virtualLite.svg" alt="" className='absolute top-[50px] right-[250px] hidden md:inline-block' />
                    <img src="images/rightGroup.svg" alt=""  className='absolute top-0 bottom-0 right-[100px] m-auto hidden md:inline-block' />
                          <People />
                    <h1 className='text-center md:text-[35px] text-[24px]  md:w-[604px]'>Join over <span className='text-[#2CB470] font-bold mt-10'>65k+</span> people who already trust us to become better</h1>
                    </div>
    </div>
  </div>
    <Footer />
  </div>

  )
}

export default Home
