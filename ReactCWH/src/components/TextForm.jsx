import React from 'react'
export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
  <textarea class="form-control" id="Exapmle-form"rows="8"></textarea>
  </div>
  <button className="btn btn primary">Convert ToUppercase</button>
</div>
     )
}
