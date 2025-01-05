import React, {useState} from 'react'


export default function Textform(props) {
  const [text, setText] = useState("");
  let word = 0;
  if(text.split(" ").length===1){
    word= 0;
  }
  else if(text.split(" ").length> 1){
    word = text.split(" ").length
  
  }
  // else {
  //   word = text.split(" ").length
  // }
  


  // const [withSpace, withoutSpace] = useState(text);
  // setText("I am Programmer");
  
  const changeUpCase = ()=>{
    // console.log("convert into upper case "+ text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted In To Uppercase", "success")
  }
  const changeLowCase = ()=>{ 
    console.log("Hello")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted In To Lowercase", "success")
  }
  const wordsRemover = ()=>{
    let newText = ""
    setText(newText)
    props.showAlert("All words remove", "success")
    }
  const handleOnChange = (event)=>{
    console.log("handle on change")
    setText(event.target.value)
  }
  const spaceRemover = ()=>{
    let str = text.split(" ").join("")
    setText(str)
    props.showAlert("Space between the words has been removed", "success")
  }
  
    return (
      <>
    <div className='container'style={{color:props.mode === "light"?"black" :"white"}}>
        <h1>{props.heading}</h1>
        <div className="input-group">
        {/* <span class="input-group-text">With textarea</span> */}
        <textarea className={`form-control `} style={{backgroundColor:props.mode === "light"?"white" :"black", color:props.mode === "light"?"black" :"white"}} value={text} onChange={handleOnChange} aria-label="With textarea" rows="10"></textarea>
        </div>
        <button className={`btn btn-primary my-4 mx-1`} style={{backgroundColor:props.mode === "light"?"light" :"green"}} onClick={changeUpCase}>Convert in to Uppercase</button>
        <button className="btn btn-primary my-4 mx-1" onClick={changeLowCase}>Convert in to Lowercase</button>
        <button className="btn btn-primary my-4 mx-1" onClick={wordsRemover}>Clear Text</button>
        <button className="btn btn-primary my-4 mx-1" onClick={spaceRemover}>Space Remover</button>
    </div>
    <div className="container" style={{color:props.mode === "light"?"black" :"white"}}>
      <h1>Your text summary</h1>
      <p>{word} words and {text.length} characters</p>
      <p>You read this words in just {0.008*text.length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
// 0.008*text.split(" ").length