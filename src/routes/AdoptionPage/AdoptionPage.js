import React from 'react'
import './AdoptionPage.css'


const AdoptionPage = (props) => {
  const handleStart = () => {
    const {history} = props 
    history.push('./adoption')
  }

  return (
    <div>
      <section className="adoption-info">
        <p>Welcome to the adoption queue.</p>
       <button className="adopt-button" onClick={() => handleStart()}>Adopt a Pet</button>
      </section>
    </div>
    )
  }


export default AdoptionPage
