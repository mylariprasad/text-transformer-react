import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to uppercase","success")
  }
  const handleLowClick = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("Converted to lowercase","success")
  }
  const handleClearText = () => {
    setText("")
  }
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here');
  return (<>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="container">
        <textarea className="form-control" value={text} onClick={handleClearText} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'? 'white':'#2e3338' , color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
      <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-4`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-4`} onClick={handleLowClick}>Convert to Lowercase</button>
      <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-4`} onClick={handleClearText}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
  </>
  )
}
