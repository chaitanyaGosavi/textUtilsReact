import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");

    const upCaseClickHandle = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowCaseClickHandle = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const upCaseChangeHandle = (event) => {
        setText(event.target.value)
    }
    const copyHandle = () =>{
        let myText=document.getElementById("myBox");
        myText.select();
        navigator.clipboard.writeText(myText.value);
    }
    const spaceHandle = () =>{
        let myText=text.split(/[ ]+/);
        setText(myText.join(" "));
    }
    return (
        <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className="mb-3 my-3">
                <h1>Enter text to modify</h1>
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={upCaseChangeHandle} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',color:  props.mode === 'light' ? 'black' : 'white', border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}`}} >
                </textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={upCaseClickHandle}>convert to UpperCase</button>
            <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={lowCaseClickHandle}>convert to LowerCase</button>
            <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={copyHandle}>copy to clipboarp</button>
            <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={spaceHandle}>Remove Extra Spaces</button>

            <div className="my-3">
                <h2>your word summary</h2>
                <p>
                    {text.split(" ").length} words <br />
                    {text.length} characters

                </p>
            </div>
        </div>
    )
}
