import React, { useState } from 'react'
import data from '../data'
import SingleQuestion from '../components/QusetionComponent'
import PeopleComponent from '../components/PeopleComponent'
import Footer from '../components/Footer'

const Faq = () => {
  const [questions, setQuestions] = useState(data)

  return (
   <>
    <main className='md:p-0 px-3'>
        <h1 className='text-[#000000] text-center md:text-[48px] text-[40px] font-bold md:my-[100px] my-[80px]'>Frequently Asked Questions (FAQ’s)</h1>
      <div className='md:max-w-[1061px] mx-auto rounded-xl md:shadow-xl md:py-[90px] md:px-[157px] flex flex-col justify-center items-center'>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
        <PeopleComponent />
        <Footer />
   </>
  )
}

export default Faq
