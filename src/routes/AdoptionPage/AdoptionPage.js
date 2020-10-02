import React from 'react'
import './AdoptionPage.css'


const LandingPage = (props) => {
//   const handleStart = () => {
//     const {history} = props 
//     history.push('./adoption')
//   }

  return (
    <div>
      <section className="adoption-info">
        <p>This is the adoption page info!</p>
       <button className="adopt-button" onClick={() => handleStart()}>Adopt a Pet!</button>
      </section>
    </div>
    )
  }


export default LandingPage
