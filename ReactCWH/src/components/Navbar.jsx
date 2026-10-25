import React from 'react'
function Navbar(props){
  return(
<nav>
  <h2>{props.title}</h2>
  <ul>
   <li> {props.home}</li>
   <li>{props.about}</li>
  </ul>

</nav>
  );
}
export default Navbar;
