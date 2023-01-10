import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animation/peopleAnimate.json';

const People = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    }
  return (
    <div>
       <Lottie
            options={defaultOptions}
            height='200px'
            width='20rem'
        />
    </div>
  )
}

export default People
