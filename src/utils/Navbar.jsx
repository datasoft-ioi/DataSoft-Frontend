import { useState } from "react"
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import datalogo from '../images/datalogo.png'
import { Link } from "react-router-dom"
import uzbFlag from '../images/1uzb.png'
import rusFlag from '../images/1rus.png'

export default function Navbar() {


    const [burger, setBurger] = useState('')
    function isOpen() {
        if (burger == '') {
            setBurger('activeBurger')
        } else {
            setBurger('')
        }
    }
    const [flag, setFlag] = useState([
        {
            img: uzbFlag,
            title: 'UZB'
        }
    ])
    const rus = [
        {
            img: rusFlag,
            title: 'RUS'
        }
    ]
    function languageChange() {
        if (flag[0].title === 'UZB') {
            setFlag(rus)
        } else {
            setFlag([
                {
                    img: uzbFlag,
                    title: 'UZB'
                }
            ])
        }
    }


    return (
        <nav className='con'>
            <Link to='/'><img src={datalogo} alt="" /></Link>
            <HiOutlineMenuAlt1 className='navMenuBtn' size={'36px'} onClick={isOpen} />
            <ul className={burger}>
                <Link to='/About'><li>About Us</li></Link>
                <Link to='/services'><li>Service</li></Link>
                <Link to='/portfolio'><li>Portfolio</li></Link>
                <Link to='/faq'><li>FAQ's</li></Link>
                <Link to='/contact'><button>Contact Us</button></Link>
                <div className="tilChange" onClick={languageChange}>
                    <img src={flag[0].img} alt="" />
                    <span>{flag[0].title}</span>
                </div>
            </ul>
        </nav>
    )
}