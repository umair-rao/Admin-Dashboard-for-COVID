import React from 'react'
import '../styles/Navbar.css'
import { AiOutlineDown } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
        <h1 className='user-heading'>User Analytics</h1>
      <p>Lorem ipsum dolor sit consectetur.</p>
        </div>
      <div className='user-drop'>
        <p>User</p>
        <AiOutlineDown/>
      </div>
    </nav>
  )
}

export default Navbar
