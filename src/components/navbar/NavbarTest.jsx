import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/White_logo[1].png';
import './Navbar.css'
import { HiMiniBars3 } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';
import OverlayContact from '../../pages/Home/component/OverlayContact';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const NavbarTest = () => {
  const [click, setClick] = useState(false)
  const [book, setBook] = useState(false)
  const [color, setColor] = useState(false)
  const [expand, setExpand] = useState();

  const handleExpand = () => {
    setExpand(!expand)
  }

  const handleClick = () => {
    setClick(!click)
  };

  const handleBook = () => {
    setBook(!book)
  };

  const handleColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", handleColor)


  return (
    <div className={color ? "nav color " : "nav"}>
      <nav onMouseLeave={() => setExpand(false)}>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className={click ? "nav-menu active" : "nav-menu"} >
          <ul>
            <li onClick={handleClick}><NavLink to='/'>Home</NavLink></li>
            <li onClick={handleClick}><NavLink to='/about'>Prefabs</NavLink></li>
            <li onClick={handleClick}><NavLink to='/hospitality'>Hotel Essentials</NavLink></li>
            <li className='about-dropdown' onClick={handleExpand}>
              <NavLink to='/projects'
                onMouseEnter={() => setExpand(true)}
              >Projects {expand ? <IoIosArrowUp /> : <IoIosArrowDown />}</NavLink>
              {expand &&
              <div className='about-list'onMouseLeave={() => setExpand(false)}>
                <li onClick={handleClick}><NavLink to='/projects/completed'>Completed</NavLink></li>
                <li onClick={handleClick}><NavLink to='/projects/ongoing'>On Going</NavLink></li>
              </div>
            }
            </li>
            <li onClick={handleClick}><NavLink to='/windows-doors'>Windows & Doors</NavLink></li>
            <li onClick={handleClick}><NavLink to='/tiles'>Tiles</NavLink></li>
            <li onClick={handleClick}><Link onClick={handleBook} >Contact-us</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {
            click ? <CgClose style={{ color: "white" }} size={25} /> : <HiMiniBars3 style={{ color: "white" }} size={25} />
          }
        </div>
      </nav>
      {
        book && <OverlayContact handleBook={handleBook} />
      }
    </div>
  )
}

export default NavbarTest