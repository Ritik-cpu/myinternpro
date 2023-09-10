import React from 'react'
import './Caraousel.css'
import { LayoutSection } from './section/LayoutSection'
const imgrsc="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=996&t=st=1694185727~exp=1694186327~hmac=61e2c4683a8cf242ab4a8131837f23dbfe674e70bdd188dc7f1fd0847455c1d4"

export const Caraousel = () => {
  return (
    <div className='w-100'>
        
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    
      <div className='w-75 mx-auto'>
      <LayoutSection ContentLeft={<LeftCont/>} contentRight={<RightCont/>}/>
      </div>
    </div>
    <div className="carousel-item">
    <div className='w-75 mx-auto'>

    <LayoutSection ContentLeft={<LeftCont/>} contentRight={<RightCont/>}/>
    </div>

    </div>
    <div className="carousel-item">
    <div className='w-75 mx-auto'>

    <LayoutSection ContentLeft={<LeftCont/>} contentRight={<RightCont/>}/>
    </div>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-danger"  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}



const LeftCont = () => {
  return (
    <div className='py-5'>
      <h3 className='py-2'>
        Giving is part of who we are
      </h3>
      <p className='py-2'>
      EKalakaar employees are passionate about giving time, money, and skills to address the issues facing our world. Giving is ingrained in our culture—it’s how we live our mission to empower every person on the planet to achieve more. 
      </p>

    <p className='text-danger py-2'>
    Learn how our employees are making an impact through giving {`>`}
    </p>
    </div>
  )
}

const RightCont=()=>{
  return(
    <div>
        <img src={imgrsc} className='w-100' alt=''/>
    </div>
  )
}
