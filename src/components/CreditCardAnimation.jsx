import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animation/Credit Card.json';

const CreditCardAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
  return (
    <div>
       <Lottie
            options={defaultOptions}
            height="120px"
            width="6rem"
        />
    </div>
  )
}



export default CreditCardAnimation
