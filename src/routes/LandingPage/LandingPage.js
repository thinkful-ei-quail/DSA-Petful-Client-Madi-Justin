import React from 'react'
import './LandingPage.css'


const LandingPage = (props) => {
  const handleStart = () => {
    const {history} = props 
    history.push('./adoption')
  }

  return (
    <div>
      <section class="landing-info">
        <p>Welcome to the Petful Shelter. We're so happy that you're here!</p>
        <a href="https://imgur.com/B3Wfn94"><img src="https://i.imgur.com/B3Wfn94.jpg" alt="A collection of cats and dogs" title="source: imgur.com" /></a>
        <br />
        <p>If you'd like to adopt a cat, a dog, or both, click on the 'Begin Adoption Process' button below. You'll be taken to the adoption page where you'll see other prospective adopters, and most importantly, your future lifelong fuzzy companion!</p>
      <button class="begin-adopt-button" onClick={() => handleStart()}>Begin Adoption Process</button>
      </section>
    </div>
    )
}


export default LandingPage