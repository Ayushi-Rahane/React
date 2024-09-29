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

   const handleCapitalizedClick = ()=>{
    setText(   
      text.split(" ").map(x =>{
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
        
      }).join(" "));
   }

   const handleSentenceClick = ()=>{      
      setText(text.split(".").map(x=>{
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
      }).join(". "));
   }

   const handleAlternatingClick = ()=>{
      console.log(text.split(" ").join(""));
      for(let i=0;i<text.split("").length;i++){
        if(i%2===0){
        setText(text.split(" ").join("").toLowerCase());
        }
        else{
          setText(text.split(" ").join("").toUpperCase());
        }
      }

   }

  return (
  <>
    <div>
     
     <div className="mb-3">
         <h1>{heading}</h1>
         <textarea  className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
     </div>

     <button className="btn btn-primary mx-2" onClick={handleUpperClick}>UPPERCASE</button>
     <button className="btn btn-primary mx-2" onClick={handleLowerClick}>lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Capitalized Case</button>
     <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Sentence case</button>
     <button className="btn btn-primary mx-2" onClick={handleAlternatingClick}>aLtErNaTiNg cAsE</button>


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
