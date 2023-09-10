import React from 'react'
import './MyInput.css'
export const MyInput = ({type,id,Placeholder,fotInp,text}) => {
  return (
    <div>
    <div className="form__group">
  <input type={type} id={id} className="form__field" placeholder={Placeholder}/>
  <label for={fotInp} className="form__label">{text}</label>
</div>
    </div>
  )
}




export const UploadFiles = () => {
  return (
    <div>
      <div className="mycontainer">
  <div className="mycard">
    <h3>Upload Files</h3>
    <div className="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{display:"none"}} />
      <button className="mybtn">Choose File</button>
    </div>

  </div>
</div>
    </div>
  )
}
