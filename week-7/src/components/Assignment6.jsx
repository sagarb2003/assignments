import React, { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";

const Assignment6 = () => {
  const [input, setInput] = useState(true);
  const [number, setNumber] = useState(0);
  function otpHandler() {
    if (number.length === 10) {
      setInput(false);
    } else {
      alert("Enter 10 digit number");
    }
  }
  return (
    <>
      {input ? (
        <div style={{textAlign:'center',margin:'100px 0px'}}>
        
          <h1>LOGIN VIA OTP</h1>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            style={{padding:'15px 20px',margin:'20px'}}
          />{" "}
          <br />
          <button onClick={otpHandler} style={{padding:'10px',borderRadius:'5px'}}>Send OTP</button>
        </div>
      ) : (
        <>
        
        <GenerateOtp number={number} />
        </>
      )}
    </>
  );
};

function GenerateOtp({number}) {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs=useRef([]);
  var val = useMemo(()=>{
      return Math.floor(1000 + Math.random() * 9000);
  },[])
  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[])

  function handleChange(index,e){
    const value=e.target.value;
    if(isNaN(value)) return ;

    const newOtp=[...otp];
    newOtp[index]=value.substring(value.length-1);
    setOtp(newOtp);

    if(value && index<4 && inputRefs.current[index+1] ){
      inputRefs.current[index+1].focus();
    }
  }
  function buttonHandler(){
    // console.log(otp);
    let num='';
    for(let i=0;i<4;i++){
      num+=otp[i];
    }
    if(num==val){
      alert('Login successful')
    }
    else{
      alert('Invalid otp')
    }
  }

  // function handleKeyDown(index,e){
  //   const val=e.target.value;
  //   console.log(inputRefs.current[index]);
  //   if(!val && e.key==='Backspace' && !otp[index] && index>0 && inputRefs.current[index-1]){
  //     inputRefs.current[index - 1].focus();
  //   }
  // }
  return (

    <div style={{textAlign:'center',marginTop:'100px'}}>
      <h1>Enter your OTP sent to {number}</h1>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={value}
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleChange(index, e)}
            style={{ width: "40px", height: "30px", margin: "0px 10px" }}
            // onKeyDown={(e)=> handleKeyDown(index,e)}
          />
        );
      })}
      <br />
      <button
        onClick={buttonHandler}
        style={{ padding: "8px", borderRadius: "5px",marginTop:'30px' }}
      >
        Login
      </button>
      <h4 style={{marginTop:'100px'}}>Your OTP is {val} </h4>
    </div>
  );
}



export default Assignment6;
