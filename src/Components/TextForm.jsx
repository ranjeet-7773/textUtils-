import React,{useState} from 'react';

export default function TextForm(props) {

   const handleUpClick= ()=>{
    //console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
   }
   const handleDownClick= ()=>{
    //console.log("lowerrcase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
   }
   const clearText= ()=>{
    let newText= " "
    setText(newText)
   }

   const copyText= ()=>{
    
    let text= document.querySelector('#myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
   }
  
  const handleOnChange= (e)=>{
    //console.log("Onchange")
    setText(e.target.value)
   }
    const[text,setText]=useState("Start typing or paste document here")

    
  return (
    <>
    <div className='container'>
     <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
    <div className="mb-3"   >
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'light'}} onChange={handleOnChange}  id='myBox' rows='8'></textarea>
    </div>
    <button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1 ' onClick={handleDownClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1 ' onClick={clearText} >Clear text</button>
    <button className='btn btn-primary mx-1 ' onClick={copyText} >Copy text</button>
  
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
