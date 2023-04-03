import uzum from '../images/uzum.png'
import tesla from '../images/tesla.png'
import apple from '../images/apple.png'
import spesX from '../images/spesX.png'
import axios from 'axios'
import { useEffect , useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export default function Portfolio() {

    const URL = 'https://api.data-soft.uz'
    async function HeaderTitle() {
        const portfolio = await axios.get('https://api.data-soft.uz/our/')
        setPortfolio(portfolio.data)
    }
    useEffect(() => {
        HeaderTitle();
    }, []);

    const [portfolio , setPortfolio] = useState([])

    const {lauga} = useContext(AppContext)

    return (
        <div className="container">
            <main>
            <div className="portfolio">
                        <span className="portfolioTitle">{lauga == 'uzb' ? 'Loyhalarimiz' : 'Наша работа'}</span>    
                        <div className="portfolios">
                            {
                                portfolio.map(item => (
                                    <a href={item.url}><img src={URL + item.image} alt="" /></a>
                                ))
                            }
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