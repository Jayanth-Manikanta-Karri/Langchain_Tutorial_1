import React from 'react'
import './index.css'

function navbar() {
  return (
    <>
      <div className='nav-bar'>
        <h1 className='nav-heading'>Langchain</h1>
        <ul className='nav-items'>
          <li>Chat</li>
          <li>Contact Me</li>
          <li>Follow Me</li>
        </ul>
      </div>
    </>
  )
}

export default navbar