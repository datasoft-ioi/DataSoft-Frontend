import { useContext, useState } from "react"
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import datalogo from '../images/datalogo.png'
import { Link } from "react-router-dom"
import uzbFlag from '../images/1uzb.png'
import rusFlag from '../images/1rus.png'
import { AppContext } from "../context/AppContext"

export default function Navbar() {

    const {lauga , setLauga} = useContext(AppContext)

    const [burger, setBurger] = useState('')
    function isOpen() {
        if (burger == '') {
            setBurger('activeBurger')
        } else {
            setBurger('')
        }
    }
    const uzb =  [
        {
            img: uzbFlag,
            title: 'UZB'
        }
    ]
    const rus = [
        {
            img: rusFlag,
            title: 'RUS'
        }
    ]


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
                    {
                        if () {
                            
                        }
                    }
                </div>
            </ul>
        </nav>
    )
}