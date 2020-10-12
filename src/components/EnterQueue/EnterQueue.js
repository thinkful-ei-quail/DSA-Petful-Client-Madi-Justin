import React from 'react'
import './EnterQueue.css'

export default class EnterQueue extends React.Component {

  render() {
    return (
      <form className='queue-form' onSubmit={(e) => this.props.handleSubmit(e)}>
        <label htmlFor='name'>Enter your name</label><br/>
        <input type='text' id='name' onChange={(e) => this.props.handleChange(e.target)} value={this.props.name} /><br/>
        <button type='submit' className='Submit'>Submit</button>
      </form>
    )
  }
}