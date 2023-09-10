import React from 'react'
import { LayoutSection } from '../section/LayoutSection'
import { MyInput, UploadFiles } from './MyInput'


export const FormSet = () => {
  return (
    <div className='container'>
      <LayoutSection  ContentLeft={<Inputs/>} contentRight={<UploadFiles/>}/>
   {/* type,id,Placeholder,fotInp,text */}
    </div>
  )
}

const Inputs=()=>{
  return(
    <div>
         <MyInput type="name" id="name"  Placeholder="Name" fotInp="Name" text="Name" />
         <MyInput type="age" id="age"  Placeholder="Age (Year)" fotInp="age" text="Age (Year)" />
         <MyInput type="adress" id="adress"  Placeholder="Adress" fotInp="adress" text="Adress" />
         <MyInput type="language" id="language"  Placeholder="language" fotInp="language" text="language" />
         <MyInput type="Education Qualification" id="Education Qualification"  Placeholder="Education Qualification" fotInp="Education Qualification" text="Education Qualification" />
         <MyInput type="language" id="language"  Placeholder="language" fotInp="language"  text="Mention your passion including your interest?" />
         <MyInput type="language" id="language"  Placeholder="language" fotInp="language"  text="Are you available for at least 4-6 hours daily" />
    </div>
  )
}



