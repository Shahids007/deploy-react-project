import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = '';
        setText(newText)
    }

//----------------------important-------------------------------------------------------------

    const handleSpeakClick = ()=>{
        // console.log("upper case is clicked" + text)
        let newText = new SpeechSynthesisUtterance();
        newText.text = text
        window.speechSynthesis.speak(newText);
        // setText(newText)
    }
//-----------------------important-----------------------------------------------------------

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here')
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
        <button className="btn btn-primary" onClick={handleSpeakClick}>Let me read for you</button>
    </div>
    <div className="container my-4">
        <h1>lets see your text summary</h1>
        <p>
            {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

