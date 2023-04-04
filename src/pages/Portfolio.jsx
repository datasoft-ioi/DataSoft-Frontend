import axios from 'axios'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import datashopLogo from '../images/datashop.svg'
import datashop from '../images/datashop.png'
import {FiLink} from 'react-icons/fi'
import { Link } from 'react-router-dom'



export default function Portfolio() {

    const URL = 'https://api.data-soft.uz'
    async function HeaderTitle() {
        const portfolio = await axios.get('https://api.data-soft.uz/our/')
        setPortfolio(portfolio.data)
    }
    useEffect(() => {
        HeaderTitle();
    }, []);

    const [portfolio, setPortfolio] = useState([])

    const { lauga } = useContext(AppContext)

    return (
        <div className="container">
            <main>
                <div className="portfolio">
                    <span className="portfolioTitle">{lauga == 'uzb' ? 'Loyhalarimiz' : 'Наша работа'}</span>
                    <div className="portfolios">
                        <div className="portfolioMain">
                            <img className='portfolioImg' src={datashop} alt="" />
                            <img className='portffolioLogo' src={datashopLogo} alt="" />
                            <span>Online Texnika Bozori <Link to='https://datashop.uz'><button className='portfolioLink'><FiLink size={'22px'} color='white' /></button></Link></span>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <span className="contactTitle">{lauga == 'uzb' ? 'loyihangiz haqida bizga xabar bering' : 'Расскажите нам о своем проекте'}</span>
                    <div className="contactMain">
                        <div className="contactMainInfos">
                            <input type="text" placeholder={lauga == 'uzb' ? "Ism" : "Имя"} />
                            <input type="text" placeholder={lauga == 'uzb' ? "Familiya" : "Фамилия"} />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder={lauga == 'uzb' ? "Telefon" : "телефон"} />
                            <select name="" id="">
                                <option value="" selected disabled hidden>{lauga == 'uzb' ? "Byudjet" : "Бюджет"}</option>
                                <option value="">0$-100$</option>
                                <option value="">100$-300$</option>
                                <option value="">300$-700$</option>
                                <option value="">700$-1000$</option>
                                <option value="">1000$-2000$</option>
                                <option value="">2000$+</option>
                            </select>
                            <select name="" id="">
                                <option value="" selected disabled hidden>{lauga == 'uzb' ? "Biz haqimizda qayerdan eshitdingiz?" : "Как вы узнали о нас?"}</option>
                                <option value="">Google</option>
                                <option value="">Instagram</option>
                                <option value="">Telegram</option>
                            </select>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder={lauga == 'uzb' ? "Xabar" : "Сообщение"}></textarea>
                        <button>{lauga == 'uzb' ? "Yuborish" : "Отправка"}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}