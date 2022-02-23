
import React from 'react'
import BigPicture from '../components/BigPicture.js'
import Navbars from '../components/Navbars.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/image.jpg'
import Content1 from '../components/Content1.js';
import SkillAcquired from '../components/SkillAcquired.js';
import VideoContainer from '../components/VideoContainer.js';


export default function Home() {
  return (
    <>
      {/* <Navbars /> */}
      <BigPicture/>
      <Content1 />
      <SkillAcquired />
      <VideoContainer />
    </>
  )
}

