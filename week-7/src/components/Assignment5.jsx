import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Assignment.css'

const Assignment5 = () => {
  
  const [username, setUsername] = useState("");
  const [showCard,setShowCard]=useState(true);
  const[objectUser,setObjectUser]=useState();
  async function buttonHandler(){
    const result=await axios.get(`https://api.github.com/users/${username}`);
    const response= await result.data;
    console.log(response);
    setObjectUser(response);

    if(response){
      setShowCard(false)
    }
  }
  return (
    <div>
      {showCard ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>Generate Your Github Info Card</h1>
          <input
            type="text"
            placeholder="Your github username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "7px 40px" }}
          />
          <button
            onClick={buttonHandler}
            style={{
              padding: "7px 10px",
              margin: "0px 20px",
              borderRadius: "5px",
            }}
          >
            Generate
          </button>
        </div>
      ) : (
        <GenerateCard objectUser={objectUser} />
      )}
    </div>
  );
};

function GenerateCard({ objectUser }) {
  return (
    <div className="card">
      <div className="imgDiv">
        <img src={objectUser.avatar_url} alt="" />
      </div>
      <div className="content-img">
        <div className="name-and-age">
          <h2 >{objectUser.name}</h2>
          <a
            href={objectUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/fluidicon.png"
              alt="GitHub Icon"
              style={{ width: "20px", height: "20px", marginLeft: "5px" }}
            />
          </a>
        </div>
        <p>{objectUser.bio}</p>
      </div>
      <div className="displayCount">
        <div className="countItem">
          <h2>{objectUser.followers}</h2>
          <p>Followers</p>
        </div>
        <div className="countItem">
          <h2>{objectUser.following}</h2>
          <p>Following</p>
        </div>
        <div className="countItem">
          <h2>{objectUser.public_repos}</h2>
          <p>Repositories</p>
        </div>
      </div>
    </div>
  );
}



export default Assignment5;
