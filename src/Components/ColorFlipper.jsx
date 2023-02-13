import React, { useState } from "react";

export const ColorFlipper = () => {
  const [btnText, setBtnText] = useState("rgb(0, 0, 0)");
  const [backgroud, setBackground] = useState("rgb(0, 0, 0)");

  const randomVal = () => {
    return Math.floor(Math.random() * 255);
  };

  const backgroundhandler = () => {
    const red = randomVal();
    const green = randomVal();
    const blue = randomVal();
    const rgb = `rgb(${red}, ${green}, ${blue})`
    setBtnText(rgb);
    setBackground(rgb)
  };

  return (
    <div className="container" style={{ background: backgroud }}>
      <h2>
        Click it 👉 
      </h2>
        <button className="btn" onClick={backgroundhandler}>
          {btnText}
        </button>
    </div>
  );
};
