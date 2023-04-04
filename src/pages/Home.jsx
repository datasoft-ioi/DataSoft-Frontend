import aboutImg from '../images/about.svg'
import telegramBot from '../images/serviceBot.svg.svg'
import servicesWeb from '../images/service-web.svg.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import internet from '../images/internet.svg'
import discord from '../images/discord.svg'
import line from '../images/line.svg'
import soft1 from '../images/soft1.svg'
import soft2 from '../images/soft2.svg'
import soft3 from '../images/soft3.svg'
import soft4 from '../images/soft4.svg'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import ImgGallary from './Gallary'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import datashopLogo from '../images/datashop.svg'
import datashop from '../images/datashop.png'
import {FiLink} from 'react-icons/fi'

export default function Home() {

    const URL = 'https://api.data-soft.uz'
    async function HeaderTitle() {
        const response = await axios.get('https://api.data-soft.uz/hometitle/')
        const about = await axios.get('https://api.data-soft.uz/about/')
        const portfolio = await axios.get('https://api.data-soft.uz/our/')
        setHeaderTitle(response.data);  
        setAboutTitle(about.data);
        setPortfolio(portfolio.data);
    }
    useEffect(() => {
        HeaderTitle();
    }, []);

    const [headerTitle, setHeaderTitle] = useState([])
    const [aboutTitle , setAboutTitle] = useState([])
    const [portfolio , setPortfolio] = useState([])

    const {lauga} = useContext(AppContext)
    

    return (
        <>
            <div className="container">
                <header>
                    {
                        headerTitle.map(item => (
                            <div className="header">
                                <span className="headerTItle">{lauga == 'uzb' ? item.uz_title : item.ru_title}</span>
                                <span className="headerInfo">{lauga == 'uzb' ? item.uz_mini_desc : item.ru_mini_desc}</span>
                                <Link to="/contact"><button className="headerBtn">{lauga == 'uzb' ? 'Aloqa' : 'Коммуникация'}</button></Link>
                            </div>
                        ))
                    }
                </header>
                <main>
                    <div className="about">
                        {
                            aboutTitle.map(item => (
                                <div className="aboutInfo">
                                <span className="aboutInfo_title">{lauga == 'uzb' ? item.title : item.rus_title}</span>
                                <p>{lauga == 'uzb' ? item.desc : item.rus_desc}</p>
                            </div>
                            ))
                        }
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="gallery">
                        <span className="galleryTitle">{lauga == 'uzb' ? 'Gallary' : 'Галерея'}</span>
                        <ImgGallary />
                    </div>
                    <div className="portfolio">
                        <span className="portfolioTitle">{lauga == 'uzb' ? 'Loyhalarimiz' : 'Наша работа'}</span>    
                        <div className="portfolios">
                            <div className="portfolioMain">
                                <img className='portfolioImg' src={datashop} alt="" />
                                <img className='portffolioLogo' src={datashopLogo} alt="" />
                                <span>Online Texnika Bozori <Link to='https://datashop.uz'><button className='portfolioLink'><FiLink size={'22px'} color='white'/></button></Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <span className="servicesTitle">{lauga == 'uzb' ? 'Bizning Xizmatlar' : 'Наши сервисы'}</span>
                        <div className="servicesMain">
                            <div className="servis">
                                <div className="servisInfo">
                                    <span className="servisInfo_Title">{lauga == 'uzb' ? 'Veb-sayt ishlab chiqish' : 'Развитие веб-сайта'}</span>
                                    <p>{
                                    lauga == 'uzb' ?
                                     "Aqlliroq ishlash va mijozlarga xizmat ko'rsatishni yaxshilash uchun samarali va qiziqarli veb-ychimlar" 
                                     : "Эффективные и привлекательные веб-решения для более эффективной работы и улучшения обслуживания клиентов"
                                     }</p>
                                    <div className="servisInfoBtns">
                                        <button><img src={internet} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={servicesWeb} alt="" />
                            </div>
                            <div className="servis">
                                <div className="servisInfo">
                                    <span className="servisInfo_Title">{lauga == 'uzb' ? "Botni ishlab chiqish" : "Разработка бота"}</span>
                                    <p>{lauga == 'uzb' ? "Biz sizga ishinggizni osonlashtirish uchun sizga bot yaratib beramiz" : "Мы создадим для вас бота, который облегчит вам работу"}</p>
                                    <div className="servisInfoBtns">
                                        <button><img src={telegram} alt="" /></button>
                                        <button><img src={discord} alt="" /></button>
                                        <button><img src={whatsapp} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={telegramBot} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="software">
                        <span className="softwareTitle">{lauga == 'uzb' ? "Dasturiy ta'minotni ishlab chiqish jarayoni" : 'Процесс разработки программного обеспечения'}</span>
                        <div className="softwareMain">
                            <img className='line' src={line} alt="" />
                            <div className="softwareMainStructura left">
                                <div className="softwareMainStructuraInfo">
                                    <span>{lauga == 'uzb' ? "Kashf qiling" : "Откройте для себя это"}</span>
                                    <p>{
                                    lauga == 'uzb' ? "Biz izlanishlar orqali brendlarni shakllantiramiz, har qadamda taxminlarni rad etish uchun chuqur tadqiqotlarni qo'llaymiz." 
                                        : "Мы создаем бренды с помощью исследований, применяя углубленные исследования, чтобы опровергать предположения на каждом этапе пути."
                                    }</p>
                                </div>
                                <img src={soft1} alt="" className="softwareMainStructuraImg" />
                            </div>
                            <div className="softwareMainStructura right">
                                <div className="softwareMainStructuraInfo">
                                    <span>{lauga == 'uzb' ? "Dizayn" : "Дизайн"}</span>
                                    <p>{
                                        lauga == 'uzb' ? "Bizning dizayn yondashuvimiz foydalanuvchi oqimidan foydalanish qulayligini soddalashtirishga qaratilgan. Biz oddiy va jozibali noyob narsani yaratishdan xursandmiz."
                                        : "Наш подход к дизайну направлен на упрощение юзабилити пользовательского потока. Мы рады создавать что-то уникальное, простое и привлекательное."
                                    }</p>
                                </div>
                                <img src={soft2} alt="" className="softwareMainStructuraImg" />
                            </div>
                            <div className="softwareMainStructura left">
                                <div className="softwareMainStructuraInfo">
                                    <span>{lauga == 'uzb' ? "Ko'dlash" : "Кодирование"}</span>
                                    <p>{
                                        lauga == 'uzb' ? "Eng ilg'or texnologiyalardan foydalanib, biz biznesga asoslangan moslashuvchan va kengaytiriladigan echimlarni yaratib, samaradorlik va mahorat bilan quramiz."
                                        : "Используя самые современные технологии, мы создаем гибкие и масштабируемые бизнес-ориентированные решения с эффективностью и мастерством."
                                    }</p>
                                </div>
                                <img src={soft3} alt="" className="softwareMainStructuraImg" />
                            </div>
                            <div className="softwareMainStructura right">
                                <div className="softwareMainStructuraInfo">
                                    <span>{lauga == 'uzb' ? "Yetkazib berish" : "Доставка"}</span>
                                    <p>{
                                        lauga == 'uzb' ? "Biz ishimizga ham, amaliyotimizga ham iterativ yondashamiz, har doim qilayotgan ishimizni yaxshilash yo'llarini qidiramiz."
                                        : "Мы используем итеративный подход как к нашей работе, так и к нашей практике, всегда ищем способы улучшить то, что мы делаем."    
                                    }</p>
                                </div>
                                <img src={soft4} alt="" className="softwareMainStructuraImg" />
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
        </>
    )
}