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
        <h1>Welcome to the Petful Shelter</h1>
        <h3>We're so happy that you're here!</h3>
        <a href="https://imgur.com/B3Wfn94"><img src="https://i.imgur.com/B3Wfn94.jpg" alt="A collection of cats and dogs" title="source: imgur.com" /></a>
        <br />
        <p>If you'd like to adopt a cat, a dog, or both, click on the 'Begin Adoption Process' button below. You'll be taken to the adoption page where you'll see other prospective adopters, and most importantly, your future lifelong fuzzy companion!</p>
      <button className="begin-adopt-button" onClick={() => handleStart()}>Begin Adoption Process</button>
      </section>
    </div>
    )
}


export default LandingPage