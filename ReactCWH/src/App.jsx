import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

// let name="Riya Dubey";
// function App() {
//   return(
//     <>
//   <div className="blank">Riya Dubey
//     <h1>Hi {name}</h1>
//   </div>
//   <Navbar/>
  
// </>

//   )
//  };

function App(){
  return(
<div>
  <Navbar
  title="My website"
  home="Home"
  about="About"
  />
</div>
  );
}
export default App
