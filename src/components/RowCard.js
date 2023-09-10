import React from 'react'
const imgsrc="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=826&t=st=1694189209~exp=1694189809~hmac=8460585b5b9f85daa21805267af6884873ea9a321fcc33664ccf43d660e6261b"


export const RowCard = () => {
  return (
    <div  className="container py-5 ">
      <h2 className='py-3'>
        Our culture in action
      </h2>
      <p className='py-2'>
      Our culture leads us to find ways to help people do ordinary and sometimes extraordinary things.
      </p>

      {/* cards */}
    <div className="row">
    <div className="col-md py-4">
      <Cardd/>
    </div>
    <div className="col-md py-4 ">
    <Cardd/>
    </div>
    <div className="col-md py-4 ">
    <Cardd/>
    </div>
    <div className="col-md py-4 ">
    <Cardd/>
    </div>
  </div>
    </div>
  )
}

const Cardd=()=>{
  return(
   
  <div className="card" >
  <img src={imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className='py-2'>Inclusion is innovation</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
  )
}