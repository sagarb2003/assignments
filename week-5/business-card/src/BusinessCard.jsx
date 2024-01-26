import './BusinessCard.css'

import React from 'react'

const BusinessCard = () => {
  return (
    <div className='card'>
      <div className='card-sub1'>
        <h1>Sagar Singh Bisht</h1>
        <p>A TA in the 100xDevs Cohort 2.0</p>
      </div>
      <div className='card-sub2'>
        <h2>Interests</h2>
        <p>Ionic</p>
        <p>Open Source</p>
        <p>App dev</p>
      </div>
      <div className='card-button'>
        <button>LinkedIn</button>
        <button>Twitter</button>
      </div>
      <div>

      </div>
    </div>
  );
}

export default BusinessCard