import React, {useState} from 'react'

export default function TextForm({heading}) {
    const [text, setText] = useState("Enter text here:");
   // setText("Text2");

   const handleOnChange = (event)=>{
      setText(event.target.value);
   }

   const handleUpperClick =()=>{
    let newText = text.toUpperCase();
      setText(newText);
   }

   const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
   }
  return (
  <>
    <div>
     
     <div className="mb-3">
         <h1>{heading}</h1>
         <textarea  className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
     </div>

     <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Sentencecase</button>


</div>
<div className="container my3">
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.008*text.split(" ").length} Minutes read</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
  </>
  )
}
