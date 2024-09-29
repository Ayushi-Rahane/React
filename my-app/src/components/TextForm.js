import React, {useState} from 'react'

export default function TextForm({heading}) {
    const [text, setText] = useState("Enter text here:");
   // setText("Text2");
   
   const handleOnFocus =()=> {
       setText("");
   }
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

   const handleSentenceClick = ()=>{
 
    setText(   
      text.split(" ").map(x =>{
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
        
      }).join(" "));
   }
  return (
  <>
    <div>
     
     <div className="mb-3">
         <h1>{heading}</h1>
         <textarea  className="form-control" id="myBox" rows="8" value={text} onFocus={handleOnFocus} onChange={handleOnChange}></textarea>
     </div>

     <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to Sentencecase</button>


</div>
<div className="container my3">
<h2>Your text summary</h2>
<p>{text.split(" ").filter(x => {if(x!==' '){return x} else{ return false;}}).length} words and {text.split("").filter(x => {if(x!==' '){return x} else{ return false;}}).length} characters</p>
<p> {0.008*text.split(" ").filter(x => {if(x!==' '){return x} else{ return false;} }).length} Minutes read</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
  </>
  )
}
