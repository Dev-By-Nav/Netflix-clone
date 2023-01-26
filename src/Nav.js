import React, { useEffect, useState } from 'react'
import './Nav.css'
import { BiCaretDown, BiSearch, BiBell } from 'react-icons/bi';

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else{
        handleShow(false)
    }
}

useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar);
}, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            <img 
            className='nav_logo' 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="" 
            />

            <h6 className="browse">Browse <BiCaretDown className='arrow'/></h6>

            <div className='icons'>
            <BiSearch size={20} className='search' /> 
            < BiBell size={20} className='notification' />
            </div>
        
            <img 
            className='nav_avatar' 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
            alt="" 
            />

        </div>
    </div>
  )
}

export default Nav
