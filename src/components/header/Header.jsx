import React from 'react'
import './Header.css'
import Logo from '../../assets/output.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' ><img src={Logo} alt='logo' className='logo' /></Link>
      <Link to='/register/basic'><button className='register_btn' >Register</button></Link>
    </div>
  )
}

export default Header
