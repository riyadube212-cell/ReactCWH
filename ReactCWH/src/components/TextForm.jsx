import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
           rows="8"
        ></textarea>
      </div>

      <button
        className="btn btn-primary mx-2" onClick={handleUpClick}
      >Convert to Uppercase
      </button>
      
      <button
        className="btn btn-primary mx-2" onClick={handleLoClick}
      > Convert to Lowercare
      </button>
    </div>

  );
}