import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
        <h1>Shorts</h1>
        <nav>
            <div><ion-icon name="apps"></ion-icon></div>
            <div>Home</div>
            <div>Vids</div>
            <div>Pics</div>
            <div className='login-btn'>Login</div>
        </nav>
    </header>
  )
}

export default Header