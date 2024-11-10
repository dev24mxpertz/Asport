import React from 'react'
import "./componentstyle.css"
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExperienceCont = () => {
  
  gsap.registerPlugin(SplitText,ScrollTrigger)


  let mysplitText  = new SplitText('.split',{type:"chars"})
  let chars  =  mysplitText.chars


  gsap.from(chars , {
    yPercent:130,
    stagger:"0.02",
    ease:"back.out",
    duration:2,
    scrollTrigger:{
      trigger:".split",
      start:"top 80%",
      markers:true
    }
  })



  return (
    <div className="ExperienceCont_container">
      {/* <div className="ExperienceCont_Left"></div>0.
      <div className="ExperienceCont_CenterLine"></div>
      <div className="ExperienceCont_Right"></div> */}
      <h3 className='split'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consectetur a, reprehenderit ut id qui, impedit perspiciatis dolore beatae sit, doloremque vero deserunt praesentium doloribus ipsa velit quisquam esse. Beatae?</h3>
    </div>
  );
}

export default ExperienceCont