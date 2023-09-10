import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { data } from './data'
import './Tabs.css'

export const Tabs = () => {
  const jobs=data
  const [value,setValue]=useState(0)

  const {comapany,dates,duties,title}=jobs[value]
  return (
    <div className='row' >
       <div className='col-4 d-flex flex-column'>
        {/* btn container */}
        
          {
            jobs.map((item,index)=>{
              return <button className={`my-4 btn btn-link text-blue text-decoration-none ${index===value && 'btn btn-link text-danger text-decoration-none textverti'}`} onClick={()=>{setValue(index)}} key={item.id}>
                {item.company}
              </button>
            })
          }
       
        {/* job info */}
       </div>
      <div className='col-8'>
        <h3>{title}</h3>
        <h4>{comapany}</h4>
        <p> {dates}</p>
        {
          duties.map((duty,index)=>{
            return <div key={index}>
              <p>{duty}</p>
            </div>
          })
        }
      </div>
       
  </div>
  )
}
