import React from 'react'
import './Section.css'
import { LayoutSection } from './LayoutSection'
import { Tabs } from '../tabs/Tabs'
const imgsrc="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=826&t=st=1694189209~exp=1694189809~hmac=8460585b5b9f85daa21805267af6884873ea9a321fcc33664ccf43d660e6261b"


export const Section = () => {
  return (
    <div>
        
        <div className='py-5 '>
            <div className=' container h1 py-3'>Our cultural attributes</div>
        <LayoutSection ContentLeft={<Tabs/>} contentRight={<img className='w-100' src={imgsrc} alt=''/>} />
        </div>

        <div className='py-5'>
        <LayoutSection ContentLeft={<img className='w-100 imgset' src={imgsrc} alt=''/>} contentRight={<LefPara/>}/>
        </div>
    </div>
  )
}


const LefPara = () => {
  return (
    <div className='p-4 pt-5'>
      <h3 className='py-4'> Making a difference</h3>
      <p>If we commit to being customer obsessed, becoming more diverse and inclusive, and operating as One EKalakaar, we will achieve our mission to empower every person and organization on the planet. Beyond that, we will make a difference and find deep meaning in our work. We stand in awe of what humans dare to achieve and are motivated every day to empower others to do more and achieve more through our technology and innovation. </p>
    </div>
  )
}
