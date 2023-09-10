import React from 'react'

export const LayoutSection = ({ContentLeft,contentRight}) => {
  return (
   
<div className="container-xl">
  <div className="row">
    <div className="col-md-6">
        {ContentLeft}
    </div>
    <div className="col-md-6">
    {contentRight}
    </div>
  </div>
  </div>
    
  )
}
