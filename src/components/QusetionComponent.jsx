import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const QusetionComponent = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
   <div className='border-b-2 pb-[20px] mb-[40px]'>
      <div className='flex justify-between items-center gap-3'>
        <h4 onClick={() => setExpanded(!expanded)} className='md:w-[696.12px] font-semibold text-[21px] mb-[13px] text-[#000000]'>
          {title}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus  fontSize={18}/> : <AiOutlinePlus fontSize={18} />}
        </button>
    </div>
    {expanded && 
    <p className='text-[#6F6C90] md:w-[696.12px] text-justify'>{info}</p>}
   </div> 
   
  )
}

export default QusetionComponent
