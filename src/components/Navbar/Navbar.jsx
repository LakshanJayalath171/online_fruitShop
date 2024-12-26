// import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <img  src={logo} alt="" />
          <div>
            <h2>TERRA </h2>
            <h3>Fresh Fruit..</h3>
          </div>
        </div>
        <div className='list_items'>
          <ul>
            <li>About US</li>
            <li>Categoris</li>
            <li>Contact Us</li>
            <li> <button className='btn'>Order</button> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar