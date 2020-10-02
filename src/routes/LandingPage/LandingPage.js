import React from 'react'
import './LandingPage.css'


const LandingPage = (props) => {
  const handleStart = () => {
    const {history} = props 
    history.push('./adoption')
  }

  return (
    <div>
      <section className="landing-info">
        <p>This is the landing page info!</p>
      <button className="begin-adopt-button" onClick={() => handleStart()}>Begin Adoption Process</button>
      </section>
    </div>
    )
  }


export default LandingPage