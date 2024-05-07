import React from 'react'
import ImageWText from './ImageWText';
import feature2 from "../../../public/images/feature2.webp";
import feature3 from "../../../public/images/feature3.webp";



const ImageTextGroup = () => {
  return (
    <div className='flex flex-col justify-center w-full items-center'>
        <ImageWText src={feature2} headingText={"Never miss your goal"} orangeText={"FOMO"} infoText1="If you don't stick to your goal, your avatar loses XP and shrinks..."
        infoText2="A good reason to put on your workout shoes!" />
        <ImageWText src={feature3} headingText={"Climb leaderboards"} orangeText={"SOCIAL ACCOUNTABILITY"} infoText1="The more XP you earn, the higher you rank in your league. Get that 🥇 golden medal!"
         />

    </div>
  )
}

export default ImageTextGroup