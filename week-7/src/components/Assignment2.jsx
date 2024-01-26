import React from 'react'
import { useState } from 'react';

//Background Color changer
const Assignment2 = () => {
    const [backgroundColor,setBackgroundColor]=useState('white');
    function buttonHandler(e){
        const colorChoice=e.target.value;
        setBackgroundColor(colorChoice);
    }
    const buttonStyles = {
      margin: "0px 10px",
      padding: "5px 20px",
      borderRadius: "7px",
      fontWeight:'bold',
      
    };
  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          minHeight: "83vh",
          padding: "20px",
          
        }}
      ></div>
      <div style={{ margin: "10px 0px 0px 300px" }}>
        <button
          onClick={buttonHandler}
          value="red"
          style={{ ...buttonStyles, backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={buttonHandler}
          value="yellow"
          style={{ ...buttonStyles, backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={buttonHandler}
          value="black"
          style={{ ...buttonStyles, backgroundColor: "black", color: "white" }}
        >
          Black
        </button>
        <button
          onClick={buttonHandler}
          value="purple"
          style={{ ...buttonStyles, backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={buttonHandler}
          value="green"
          style={{ ...buttonStyles, backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={buttonHandler}
          value="blue"
          style={{ ...buttonStyles, backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={buttonHandler}
          value="white"
          style={{ ...buttonStyles, backgroundColor: "white" }}
        >
          Default
        </button>
      </div>
    </>
  );
}



export default Assignment2