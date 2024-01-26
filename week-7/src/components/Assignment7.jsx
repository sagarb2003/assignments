import React, { useState } from 'react'
import './Assignment.css'

const Assignment7 = () => {
    const[name,setName]=useState();
    const [showCard,setShowCard]=useState(true);
    function buttonHandler(){
        if(name){
            setShowCard(false);
        }
    }

  return (
    <div>
      {showCard ? (
        <div style={{textAlign:'center'}}>
          <h1>Enter Your Name</h1>
          <input type="text" placeholder="Enter your name" style={{padding:'10px 20px',margin:'20px',fontSize:'15px'}} onChange={(e)=> setName(e.target.value)} />
          <br />
          <button onClick={buttonHandler} style={{padding:'10px 10px',borderRadius:'5px'}}>Done</button>{" "}
        </div>
      ) : (
        <GenerateCard name={name} />
      )}
    </div>
  );
}

function GenerateCard({name}){
    return (
      <div className="card">
        <div className="imgDiv" style={{backgroundColor:'red'}}>
          <img style={{border:'1px solid black',borderRadius:'6px'}}
            src="https://imgs.search.brave.com/W1pzpYnVdjv3ro35sv69hidkc_BL_uNqoNoRA894OR4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzQyLzQyLzg5/LzM2MF9GXzE0MjQy/ODk5MV9INW16SjFh/OFc1cFlkZEVKMUk0/VjU1MW1KMWE4YmVY/ai5qcGc"
            alt=""
          />
        </div>
        <div className="content-img">
          <h2>{name}</h2>
          <p>
            “Happy birthday {name} ! I hope all your birthday wishes and dreams come
            true.”
          </p>
        </div>
      </div>
    );
}

export default Assignment7