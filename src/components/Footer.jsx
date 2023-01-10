import React from 'react'
import { Link } from 'react-router-dom'
import { GrTwitter, GrInstagram } from 'react-icons/gr'
import { FaLinkedinIn, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='md:pt-[100px]  md:px-[120px]  bg-[#F7F9FF] text-[#0A1045] max-w-[1440px]'>
      <div className='md:flex md:justify-between justify-center items-center py-4 px-3'>
            <div className='md:flex-1 md:flex md:justify-between md:items-center'>
                <div className='flex'>
                    <img src="/images/nig.svg" alt="nig" className='rounded-md object-cover w-[24px] h-[20px] mr-3' />
                    <span className='text-[14px] mr-3 '>Nigeria (English)</span>
                </div>
            </div>
            <div className='flex-2 md:flex gap-3 hidden'> 
                    <Link to="#" className='link'>Website terms</Link>
                    <Link to="#" className='link'>Legal Agreements</Link>
                    <Link to="#" className='link'>Complaints</Link>
                    <Link to="#" className='link'>Privacy</Link>
                </div>
            <div className='md:flex-1 flex gap-3 md:mt-0 mt-5 md:justify-end justify-start items-start md:gap-5 py-2'>
                <Link to="#twitter">
                    <GrTwitter color='#2CB470' size={38}/>
                </Link>
                <Link to="#instagram">
                    <GrInstagram color='#2CB470' size={38}/>
                </Link>
                <Link to="#linkedin">
                    <FaLinkedinIn color='#2CB470' size={38}/>
                </Link>
                <Link to="#facebook">
                    <FaFacebookSquare color='#2CB470' size={38}/>
                </Link>
            </div>
      </div>
      <div className='md:flex md:py-5 px-3'>
        <div className='flex-[30%] md:border-r-2 py-3 pr-3 mr-2'>
            <Link to="/">
            <img src="/images/logo.svg" alt="" className='w-[156px] h-[26px] object-cover' />
            </Link>
            <div className='text-[13px my-[20px] font-bold text-left'>
                +234 90333 392 01 ||  holla@kwikee.africa
                No 43, CMD Road, Magodo, Lagos.
            </div>
        </div>
        <div className='flex-[70%] pt-10'>
            <p className='mx-2 text-justify text-[12px] font-light leading-loose'>Kwikee™ is a trademark of Moneymarque Finance Limited (“MMFL”). As the data collector, MMFL ("we" “us” “our”) are committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting https://kwikee.app or using Kwikee mobile application hosted on the Google Play Store or Apple Play Store (collectively “our site”) you are accepting and consenting to the practices described in this policy. Please note that by clicking the “Connect with Facebook” button you are agreeing that Facebook may share personal data held by them with us. The collection and processing of your personal data is in accordance with the National Information Technology Development Agency Act 2007 (the “Act”), Nigeria Data Protection Regulation 2019 (the “Regulations”) and the provisions and prescriptions of Section 5; Part 1 and Part 2 of National Information Systems and Network Security Standards and Guidelines</p>
        </div>
      </div>
        <div className='pb-5 px-3'>
            <Link className='link mr-4 text-[14px]' to="#">Kwikelite</Link> | 
            <Link className='link mx-4 text-[14px]' to="#">Kwikgoals</Link> | 
            <Link className='link ml-4 text-[14px]' to="#">Bills and Utility Support</Link> 
        </div>
    </div> 
  )
}

export default Footer
