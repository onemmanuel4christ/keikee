import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animation/KWK_Animations_Money Shower.json';

const MoneyShower = () => {
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
            height="50%"
            width="100%"
            
        />
    </div>
  )
}



export default MoneyShower
