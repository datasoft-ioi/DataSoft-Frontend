import telegramBot from '../images/serviceBot.svg.svg'
import servicesWeb from '../images/service-web.svg.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import internet from '../images/internet.svg'
import discord from '../images/discord.svg'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import jslogo from '../images/jslogo.svg'
import reactlogo from '../images/reactlogo.svg'
import django from '../images/django.svg'
import python from '../images/python.svg'
import nodejs from '../images/nodejs.svg'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

export default function Service() {

    const { lauga } = useContext(AppContext)

    return (
        <>
            <div className="container">
                <main>
                    <div className="services">
                        <span className="servicesTitle">Our Core Services</span>
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
                                        <button><img src={jslogo} alt="" /></button>
                                        <button><img src={reactlogo} alt="" /></button>
                                        <button><img src={django} alt="" /></button>
                                        <button><img src={python} alt="" /></button>
                                        <button><img src={nodejs} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={servicesWeb} alt="" />
                            </div>
                            <div className="servis">
                                <div className="servisInfo">
                                    <span className="servisInfo_Title">{lauga == 'uzb' ? "Botni ishlab chiqish" : "Разработка бота"}</span>
                                    <p>{lauga == 'uzb' ? "Biz sizga ishinggizni osonlashtirish uchun sizga bot yaratib beramiz" : "Мы создадим для вас бота, который облегчит вам работу"}</p>
                                    <div className="servisInfoBtns">
                                        <button><img src={python} alt="" /></button>
                                        <button><img src={nodejs} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={telegramBot} alt="" />
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