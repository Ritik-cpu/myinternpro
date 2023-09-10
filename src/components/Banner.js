import React from 'react'
import './Banner.css'
const imgrsc="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=996&t=st=1694185727~exp=1694186327~hmac=61e2c4683a8cf242ab4a8131837f23dbfe674e70bdd188dc7f1fd0847455c1d4"
const data={
  title:"Committed to our culture",
  paragraph:"We will only achieve our mission if we live our culture. We start by becoming learners in all things –having a growth mindset. Then we apply that mindset to learning about our customers, beingdiverse and inclusive and working together as one."
}

export default function Banner() {
  return (
    <div className='banner'>

<div className="">
 <div className='card text-bg-dark  mycard'>

  <img src={imgrsc} className="card-img  " alt="..."/>
  <div className="card-img-overlay mt-5 ">
    <h2 className="card-title h1 ">{data.title}</h2>
    <p className="card-text w-75">{data.paragraph}</p>
  </div>
</div>
</div>

    

    </div>
  )
}
