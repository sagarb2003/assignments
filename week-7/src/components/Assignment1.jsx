import React from 'react'
import './Assignment.css'

const Assignment1 = () => {
  return (
    <div className="card">
      <div className="imgDiv">
        <img
          src="https://imgs.search.brave.com/qrXLmFhwO288mdrkMAhtdKGP6RV8Q0fzd0MUyPgVirQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pc290/cm9waWMuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDIv/amxoZWFkc2hvdG1h/cjIwMjMuanBlZw"
          alt=""
        />
      </div>
      <div className="content-img">
        <div className="name-and-age">
          <h2>Hemant Varchase</h2>
          <span>32</span>
        </div>
        <p>London</p>
      </div>
      <div className="displayCount">
        <div className="countItem">
          <h2>80K</h2>
          <p>Followers</p>
        </div>
        <div className="countItem">
          <h2>803K</h2>
          <p>Likes</p>
        </div>
        <div className="countItem">
          <h2>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}



export default Assignment1