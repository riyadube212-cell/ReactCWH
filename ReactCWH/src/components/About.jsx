import React, { useState } from 'react'

export default function About() {
 const[mystyle,setmystyle]=useState
 (
{
    color:"red",
    backgroundColor:"cyan"
}
)
const[btntext,setbtntext]=useState("Enable Dark Mode")
const toggleStyle=()=>{
  if(mystyle.color=='white'){
    setmystyle({
      color:'black',
      backgroundColor:'white'
    })
  
setbtntext("Enable Dark Mode")
}
else{
  setmystyle({
    color:'white',
    backgroundColor:'black'
  })
  setbtntext("Enable Light Mode")
}
}
  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion">
  <details className="accordion-item" name="accordionExample" open>
    <summary className="accordion-header">
      Accordion Item #1
      
    </summary>
    <div className="accordion-body">
      
    </div>
  </details>
  <details className="accordion-item" name="accordionExample">
    <summary className="accordion-header">
      Accordion Item #2
     
      </summary>
  </details>
  <details className="accordion-item" name="accordionExample">
   
     
  </details>
</div>
<div className="container my-4">
<button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
    </div>
    </div>
  )
}
