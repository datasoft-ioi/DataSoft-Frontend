import { useContext, useState } from "react"
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import datalogo from '../images/datalogo.png'
import { Link } from "react-router-dom"
import uzbFlag from '../images/1uzb.png'
import rusFlag from '../images/1rus.png'
import { AppContext } from "../context/AppContext"

export default function Navbar() {

    const {lauga , laugaChange} = useContext(AppContext)

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

    console.log(lauga);
    return (
        <nav className='con'>
            <Link to='/'><img src={datalogo} alt="" /></Link>
            <HiOutlineMenuAlt1 className='navMenuBtn' size={'36px'} onClick={isOpen} />
            <ul className={burger}>
                <Link to='/About'><li>{lauga == 'uzb' ? 'Xaqimizda' : 'O нас'}</li></Link>
                <Link to='/services'><li>{lauga == 'uzb' ? 'Xizmatlar' : 'Услуги'}</li></Link>
                <Link to='/portfolio'><li>{lauga == 'uzb' ? 'Ishlarimiz' : 'портфолио'}</li></Link>
                <Link to='/faq'><li>{lauga == 'uzb' ? 'Savollar' : 'Вопросы'}</li></Link>
                <Link to='/contact'><button>{lauga == 'uzb' ? 'Aloqa' : 'Коммуникация'}</button></Link>
                <div className="tilChange" onClick={laugaChange}> 
                    <img src={lauga == 'uzb' ? uzb[0].img : rus[0].img} alt="" />
                    <span>{lauga == 'uzb' ? uzb[0].title : rus[0].title}</span>
                </div>
            </ul>
        </nav>
    )
}