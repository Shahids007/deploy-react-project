import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    
    const handleLoClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert("TextBox Cleared", "success");
    }

    const handleCopy = () =>{
        console.log("i am copy text")
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to clipboard", "success");
    }

    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("Extra spaces removed", "success");
    }

//----------------------important-------------------------------------------------------------

    const handleSpeakClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = new SpeechSynthesisUtterance();
        newText.text = text
        window.speechSynthesis.speak(newText);
        // setText(newText)
        props.showAlert("Listen to the audio", "success");
    }
//-----------------------important-----------------------------------------------------------

  const FirstLettrCaps = ()=>{
     let newText = text.toLowerCase();
     setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    //  return newText.charAt(0).toUpperCase() + newText.slice(1);
    props.showAlert("Done", "success");

  }            

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-outline-warning text-black mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={handleClearClick}>clear</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={handleSpeakClick}>Let me read for you</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={handleCopy}>Text Copy</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-warning text-black mx-2" onClick={FirstLettrCaps}>First Caps</button>

        

    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>lets see your text summary</h1>
        <p>
            {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter somethings in the above box to preview here'}</p>
    </div>
    </>
  )
}

